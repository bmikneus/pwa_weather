import React from 'react';

import axios from 'axios';
import { getKey } from './keys/keys.js';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: '6dacb2654ea16c870c7b8edfbef4389b'
        }
        
    });
    console.log(getKey());
    return data;
}