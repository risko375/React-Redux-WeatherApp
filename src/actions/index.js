// import axios library to make async request to openweathermap.org for data 
import axios from 'axios';

// set api key as a constant
const API_KEY = '6c8c1ca505649fa55934bfa2d170166d';

// set root url for axios to use as a constant using string interpolation to add api key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// set FETCH_WEATHER as a constant to keep action types consistent between action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// creating an action creator function which utilises axios to make api call and return promise
export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    // make get request which returns a promise
    const request = axios.get(url);
    
    
    // returned action object
    return {
    
        type: FETCH_WEATHER,
        // returning the Promise on the payload key
        payload: request
    };


}