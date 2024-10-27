import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../src/styles/header/Header.css"
import "../src/styles/footer/Footer.css"
import "../src/styles/navbar/Navbar1.css"
import { BrowserRouter } from 'react-router-dom';
import "../src/styles/slider/Slider.css"
import "../src/styles/pages/sale/Sale.css"
import "../src/styles/productuidesc/ProductUiDesc.css"
import "../src/styles/banner/Banner.css"
import "../src/styles/section/section1.css"
import "../src/styles/navbar/Navbarmenu.css"
import "../src/styles/navbar/Navbarbtn.css"
import "../src/styles/navbar/Searchbar.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
