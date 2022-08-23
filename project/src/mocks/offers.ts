import { Offers } from '../types/offers';

// export const offers: Offers = [
//   {
//     location: 'amsterdam',
//     cards: [{
//       id: 1,
//       premium: true,
//       img: 'apartment-01.jpg',
//       price: 120,
//       rating: 80,
//       name: 'Beautiful &amp; luxurious apartment at great location',
//       type: 'Apartment',
//       bookmark: false
//     }, {
//       id: 2,
//       premium: false,
//       img: 'room.jpg',
//       price: 80,
//       rating: 80,
//       name: 'Wood and stone place',
//       type: 'Private room',
//       bookmark: true
//     }, {
//       id: 3,
//       premium: false,
//       img: 'apartment-02.jpg',
//       price: 132,
//       rating: 80,
//       name: 'Canal View Prinsengracht',
//       type: 'Apartment',
//       bookmark: false
//     }]
//   }, {
//     location: 'cologne',
//     cards: [{
//       id: 1,
//       premium: true,
//       img: 'apartment-03.jpg',
//       price: 180,
//       rating: 100,
//       name: 'Nice, cozy, warm big bed apartment',
//       type: 'Apartment',
//       bookmark: false
//     }, {
//       id: 2,
//       premium: false,
//       img: 'room.jpg',
//       price: 80,
//       rating: 80,
//       name: 'Wood and stone place',
//       type: 'Private room',
//       bookmark: false
//     }]
//   }
// ]

export const offers: Offers = [
  {
    id: 1,
    premium: true,
    img: 'apartment-01.jpg',
    price: 120,
    rating: 80,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    bookmark: false,
    location: 'amsterdam'
  }, {
    id: 2,
    premium: false,
    img: 'room.jpg',
    price: 80,
    rating: 80,
    name: 'Wood and stone place',
    type: 'Private room',
    bookmark: true,
    location: 'amsterdam'
  }, {
    id: 3,
    premium: false,
    img: 'apartment-02.jpg',
    price: 132,
    rating: 80,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    bookmark: false,
    location: 'amsterdam'
  }, {
    id: 4,
    premium: true,
    img: 'apartment-03.jpg',
    price: 180,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    bookmark: false,
    location: 'cologne'
  }, {
    id: 5,
    premium: false,
    img: 'room.jpg',
    price: 80,
    rating: 80,
    name: 'Wood and stone place',
    type: 'Private room',
    bookmark: false,
    location: 'cologne'
  }
];
