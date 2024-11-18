import axios from 'axios';

export async function fetchImg(query, page = 1) {
  axios.defaults.baseURL = 'https://pixabay.com/api/';

  const response = await axios.get('?', {
    params: {
      key: '47110078-1dfbe4a00d7fe250476d6992f',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}
