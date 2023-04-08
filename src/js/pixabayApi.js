import axios from "axios";
const BASE_URL = 'https://pixabay.com/';
const API_KEY = '34862797-4eb1005b10021e74ba901079d';

export default function fetchImages(q, page, per_page) {
 
  return axios.get(`${BASE_URL}api/?key=${API_KEY}&q=${q}&per_page=${per_page}
  &page=${page}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then((response) => {
      // console.log(response)
      return response.data;
      
    })
    .catch(console.warn);
};


// export default async function fetchImages(q, page, per_page) {
  
//   try {
//     return await axios.get(`${BASE_URL}api/?key=${API_KEY}&q=${q}&per_page=${per_page}
//     &page=${page}&image_type=photo&orientation=horizontal&safesearch=true`);
//     console.log(response.data);
//     return await response.data;
    
//   }
//   catch (err) {
//     // throw new Error(err.message);
//     console.log(err);
//   };
// };



