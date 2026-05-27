export interface IZone {
  id: number;
  title: string;
  images: string[];
  feature: string;
  subtitle: string;
  color: string;
  characteristics: ICharacteristic[];
  prices: IPrice[];
}

export interface ICharacteristic {
  id: number;
  title: string;
  value: string;
  image: string;
}

export interface IPrice {
  id: number;
  title: string;
  available: string;
  image: string;
  rate: string;
  price: number;
  borderColor: string;
}
