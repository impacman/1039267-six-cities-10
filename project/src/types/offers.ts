// export type Location = string;

export type Cards = {
  id: number,
  premium: boolean,
  img: string,
  price: number,
  rating: number,
  name: string,
  type: string,
  bookmark: boolean,
  location: string
}

// export type Offers = {
//   location: Location;
//   cards: Cards[];
// }[];

export type Offers = Cards[];

