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

let page = 1;

function hendleFormBtn(event) {
  event.preventDefault();
  
  
  fetchImages(refs.inputImageName.value.trim())
  .then(images => {
    
    renderCardsImages(images);
    refs.btnLoadMore.classList.remove('is-hidden');
   console.log(images)
  })
  .catch(() => {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  });
};

function hendleLoadMore() {

 
  fetchImages(refs.inputImageName.value.trim())
  .then((images) => {
    
    renderCardsImages(images);
  })
  .catch(() => {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  });
  
}