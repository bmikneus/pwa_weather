import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

ReactDom.render(<App />, document.getElementById('root'));
