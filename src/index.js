import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchImages from "./js/pixabayApi";
import renderCardsImages from "./js/renderCardsImages";

const refs = {
  searchFormSubmit: document.querySelector('#search-form'),
  inputImageName: document.querySelector('input'),
  galleryImageCards: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
};

let gallary = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: true,
  scrollZoomFactor: 0.1,
  });

refs.searchFormSubmit.addEventListener('submit', hendleFormBtn);
refs.btnLoadMore.addEventListener('click', hendleLoadMore);
let q = null;
let page = 1;
let per_page = null;

async function hendleFormBtn(event) {
  event.preventDefault();
  q = refs.inputImageName.value.trim();
  page = 1;
  per_page = 40;
  // Проверка: Пустой ли массив при запросе?
  if (q === '') { 
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    return;
  };
  try {
    const imgRespons = await fetchImages(q, page, per_page)
    const {total, totalHits, hits} = imgRespons;
    refs.galleryImageCards.innerHTML = '';
    
    renderCardsImages(imgRespons);
    gallary.refresh();
    // Проверка: Дошол ли до конца колекции при submit формы?
    if (totalHits !== 0) { 
      Notify.success(`Hooray! We found ${totalHits} images.`);
    };

    if (totalHits / per_page < page) { 
      refs.btnLoadMore.classList.add('is-hidden');
   };
    
  } catch(err) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  }
};

async function hendleLoadMore() {
  let q = refs.inputImageName.value.trim();
  page += 1;
  try {
    const imgRespons = await fetchImages(q, page, per_page)
    const {total, totalHits, hits} = imgRespons;
    renderCardsImages(imgRespons);
    gallary.refresh();
    // Проверка: Дошол ли до конца колекции при клике на LoadMore?
    if (totalHits / per_page < page) {
      refs.btnLoadMore.classList.add('is-hidden');
      Notify.warning("We're sorry, but you've reached the end of search results.");
    };
  } catch (error) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  };
};


