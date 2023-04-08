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

refs.searchFormSubmit.addEventListener('submit', hendleFormBtn);
refs.btnLoadMore.addEventListener('click', hendleLoadMore);
let q = null;
let page = 1;
let per_page = null;

// function hendleFormBtn(event) {
//   event.preventDefault();
//   q = refs.inputImageName.value.trim();
//   page = 1;
//   per_page = 40;
//   if (q === '') {
//     Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//     return;
//   };
//   fetchImages(q, page, per_page)
//     .then((hits) => {
//       refs.galleryImageCards.innerHTML = '';
//       renderCardsImages(hits);
//       console.log(hits)

//       if (hits.totalHits / per_page < page) {
//         refs.btnLoadMore.classList.add('is-hidden');
//       };
      
//   })
//   .catch(() => {
//     Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//   });
// };



async function hendleFormBtn(event) {
  event.preventDefault();
  q = refs.inputImageName.value.trim();
  page = 1;
  per_page = 40;
  if (q === '') {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    return;
  };
  try {
    const imgRespons = await fetchImages(q, page, per_page)
    // const {total, totalHits, hits} = await fetchImages(q, page, per_page)
    refs.galleryImageCards.innerHTML = '';
    console.log(imgRespons)
    renderCardsImages(imgRespons);
    
    if (imgRespons.totalHits / per_page < page) {
      refs.btnLoadMore.classList.add('is-hidden');
    };
  } catch(err) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  }
};

// function hendleLoadMore() {
//   let q = refs.inputImageName.value.trim();
//   page += 1;
  
//   fetchImages(q, page, per_page)
//   .then((hits) => {
//     renderCardsImages(hits);
    
//     if (hits.totalHits / per_page < page) {
//       refs.btnLoadMore.classList.add('is-hidden');
      
//     };
//   })
//   .catch(() => {
//     Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//   });
// };


async function hendleLoadMore() {
  let q = refs.inputImageName.value.trim();
  page += 1;
  try {
    const imgRespons = await fetchImages(q, page, per_page)
    renderCardsImages(imgRespons);
    if (imgRespons.totalHits / per_page < page) {
      refs.btnLoadMore.classList.add('is-hidden');
    };
  } catch (error) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  };
};


