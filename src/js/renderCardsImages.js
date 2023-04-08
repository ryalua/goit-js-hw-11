import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from "notiflix";

export default function renderCardsImages({total, totalHits, hits}) {
  
  const refs = {
    galleryImageCards: document.querySelector('.gallery'),
    btnLoadMore: document.querySelector('.load-more'),
  };
    
  let imgFound = [];
  
  if (totalHits === 0) {
    Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    return;
  } 
  refs.btnLoadMore.classList.remove('is-hidden');

  hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    
    imgFound += `
      <a class="gallery-link" href="${largeImageURL}">
        <div class="photo-card">
          <img src="${webformatURL}" alt="${tags}" width="600" height="400" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>${likes}
            </p>
            <p class="info-item">
              <b>Views</b>${views}
            </p>
            <p class="info-item">
              <b>Comments</b>${comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>${downloads}
            </p>
          </div>
        </div>
      </a>
    `
  });
  refs.galleryImageCards.insertAdjacentHTML('beforeend', imgFound);
  
  let gallary = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: true,
  scrollZoomFactor: 0.1,
  });
  gallary.refresh();
};


