import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Services from "./components/Services";
import Teams from './components/Teams';
import Location from './components/Locations';
import Contactus from './components/Contactus';
import Footer from "./components/Footer";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HeroBanner />
    <Services />
    <Location />
    <Contactus />
    <Teams />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

