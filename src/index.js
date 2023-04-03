import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchImages from "./js/pixabayApi";
import renderCardsImages from "./js/renderCardsImages";

const refs = {
  searchFormSubmit: document.querySelector('#search-form'),
  inputImageName: document.querySelector('input'),
};

refs.searchFormSubmit.addEventListener('submit', hendleFormBtn);

function hendleFormBtn(event) {
  event.preventDefault();
  fetchImages(refs.inputImageName.value.trim())
  .then(images => {
    console.log(images);
    renderCardsImages(images);
    // console.log(images);
  })
  .catch(() => {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  });
};

