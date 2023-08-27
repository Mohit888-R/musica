import axios from 'axios';

const spotifyAPI = axios.create({
    baseURL : 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
      },
})

export default spotifyAPI;