export default function renderCardsImages(images) {
  const refs = {
    galleryImageCards: document.querySelector('.gallery'),
    btnLoadMore: document.querySelector('.load-more'),
  };
  const { total, totalHits, hits } = images;
  imgFound = [];
  // const { webformatURL, tags, likes, views, comments, downloads } = hits;
  // console.log(hits.webformatURL);
  hits.map(hit => {
    imgFound += `
    <div class="photo-card">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes${likes}</b>
        </p>
        <p class="info-item">
          <b>Views${views}</b>
        </p>
        <p class="info-item">
          <b>Comments${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads${downloads}</b>
        </p>
      </div>
    </div>
  `
    refs.galleryImageCards.innerHTML = imgFound;
  });
  
  
};

