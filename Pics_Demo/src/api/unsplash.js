import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c7daf30965594ffd1dd7475ae61475c68404fa4198a81da31499448fbd96d031'
  }
})

