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


function hendleFormBtn(event) {
  event.preventDefault();
  let inputValue = refs.inputImageName.value.trim();
  fetchImages(inputValue, page)
  .then(images => {
    renderCardsImages(images);
    refs.btnLoadMore.classList.remove('is-hidden');
  })
  .catch(() => {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  });
};

let page = 1;
function hendleLoadMore() {
  let inputValue = refs.inputImageName.value.trim();
  page += 1;
  console.log(page)
  fetchImages(inputValue, page)
  .then((images) => {
    
    renderCardsImages(images);
  })
  .catch(() => {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  });
};


