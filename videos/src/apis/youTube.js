import axios from 'axios';

const KEY = 'AIzaSyAKUW52AXXR54TJsyTL6l_VQAjNeHoV2_c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});