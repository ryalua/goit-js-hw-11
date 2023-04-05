import axios from "axios";
const BASE_URL = 'https://pixabay.com/';
const API_KEY = '34862797-4eb1005b10021e74ba901079d';


export default function fetchImages(name, page, inputValue) {
  
  return fetch(`${BASE_URL}api/?key=${API_KEY}&q=${name}&per_page=40
  &page=${page}&image_type=photo&orientation=horizontal&safesearch=true`)
  .then(response => {
    
    if(!response.ok) {
      throw new Error(response.status);
    }
    console.log(page)
    return response.json();
    
  });
};



