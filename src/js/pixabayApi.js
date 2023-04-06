import axios from "axios";
const BASE_URL = 'https://pixabay.com/';
const API_KEY = '34862797-4eb1005b10021e74ba901079d';
page = 1;
export default function fetchImages(q, page, per_page) {
 
  return fetch(`${BASE_URL}api/?key=${API_KEY}&q=${q}&per_page=${per_page}
  &page=${page}&image_type=photo&orientation=horizontal&safesearch=true`)
  .then(response => {
    
    if(!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};



