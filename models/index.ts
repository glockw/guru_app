export class Business {
  id: string;
  name: string;
  photos: string[];
  rating: number;
  phone: string;
  display_phone: string;
  review_count: number;
  location: Address;
}

export class BussinesExtended extends Business {
  is_closed: boolean;
  price: string;
  hours: Hours[];
  reviews: Review[];
}

export enum Week {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export const MapDate = {
  0: Week.Sunday,
  1: Week.Monday,
  2: Week.Tuesday,
  3: Week.Wednesday,
  4: Week.Thursday,
  5: Week.Friday,
  6: Week.Saturday,
};

export class Hours {
  is_overnight: false;
  end: string;
  start: string;
  day: number;

  current: boolean;
  start_number: number;
  end_number: number;
}

export class Review {
  text: string;
  time_created: Date;
  rating: number;
  user: User;
}

export class User {
  name: string;
  image_url: string;
}

export class Address {
  address1: string;
  city: string;
  state: string;
  formatted_address: string;
}
