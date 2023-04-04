import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchImages from "./js/pixabayApi";
import renderCardsImages from "./js/renderCardsImages";

const refs = {
  searchFormSubmit: document.querySelector('#search-form'),
  inputImageName: document.querySelector('input'),
  btnLoadMore: document.querySelector('.load-more'),
};

refs.searchFormSubmit.addEventListener('submit', hendleFormBtn);
// refs.btnLoadMore.addEventListener('click', hendleLoadMore);

function hendleFormBtn(event) {
  event.preventDefault();
  if(refs.inputImageName.value === '') {
    return;
  }
  
  fetchImages(refs.inputImageName.value.trim())
  .then(images => {
    
    renderCardsImages(images);
    console.log(totalHits);
    // if(totalHits === page) {
      
    //   refs.btnLoadMore.classList.add('is-hidden');
    //   return;
    // };
    refs.btnLoadMore.classList.remove('is-hidden');
   console.log(images)
  })
  .catch(() => {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  });
  

};

