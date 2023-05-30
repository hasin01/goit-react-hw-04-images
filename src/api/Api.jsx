import axios from 'axios';

const refs = {
  API_URL: "https://pixabay.com/api/",
  KEY: "35986982-1e91609b0f68cd8c4b5293b55",
}

const fetchImages = async (searchQuery, page) => {
    const request_url = `${refs.API_URL}?key=${refs.KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
    try {
        const request = await axios(request_url);
        return request.data;
    } catch (error) {
        console.error(error);
    }
}

export default fetchImages;