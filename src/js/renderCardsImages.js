export default function renderCardsImages(images) {
  const refs = {
    galleryImageCards: document.querySelector('.gallery'),
    btnLoadMore: document.querySelector('.load-more'),
  };
  const { total, totalHits, hits } = images;
  
  imgFound = [];
  
 
  hits.map(hit => {
    const { webformatURL, tags, likes, views, comments, downloads } = hit;
    imgFound += `
    <div class="photo-card">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
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
  `
    refs.galleryImageCards.innerHTML = imgFound;
  });
  
  
};

