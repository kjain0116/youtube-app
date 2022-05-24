import axios from 'axios';

const KEY = 'AIzaSyAmt-0WAoYMIy70S4AMlmCWMyHEUa1VEDk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});