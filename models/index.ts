export class Business {
  id: string;
  name: string;
  photos: string[];
  rating: number;
  review_count: number;
  location: Address;
}

export class Address {
  address1: string;
  city: string;
  state: string;
}
