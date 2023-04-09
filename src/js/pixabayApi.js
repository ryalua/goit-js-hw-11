import axios from "axios";
const BASE_URL = 'https://pixabay.com/';
const API_KEY = '34862797-4eb1005b10021e74ba901079d';

export default async function fetchImages(q, page, per_page) {
  try {
    const response = await axios.get(`${BASE_URL}api/?key=${API_KEY}&q=${q}&per_page=${per_page}
    &page=${page}&image_type=photo&orientation=horizontal&safesearch=true`);
    
    return await response.data;
  } 
  catch (err) {
      throw new Error(err.message);
  };
};






