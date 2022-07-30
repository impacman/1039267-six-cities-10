import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Settings = {
  CARDS: [
    {id: 1, premium: true, img: 'apartment-01.jpg', price: 120, rating: 80, name: 'Beautiful &amp; luxurious apartment at great location', type: 'Apartment', bookmark: false},
    {id: 2, premium: false, img: 'room.jpg', price: 80, rating: 80, name: 'Wood and stone place', type: 'Private room', bookmark: true},
    {id: 3, premium: false, img: 'apartment-02.jpg', price: 132, rating: 80, name: 'Canal View Prinsengracht', type: 'Apartment', bookmark: false},
    {id: 4, premium: true, img: 'apartment-03.jpg', price: 180, rating: 100, name: 'Nice, cozy, warm big bed apartment', type: 'Apartment', bookmark: false},
    {id: 5, premium: false, img: 'room.jpg', price: 80, rating: 80, name: 'Wood and stone place', type: 'Private room', bookmark: false},
  ]
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cards={Settings.CARDS} />
  </React.StrictMode>,
);
