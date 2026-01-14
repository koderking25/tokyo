
export interface AirbnbOption {
  id: number;
  name: string;
  priceTotal: string;
  pricePerPerson: string;
  pricePerNight: string;
  features: string[];
  bedrooms: string;
  beds: string;
  baths: string;
  highlights: string[];
  location: string;
  availability: 'AVAILABLE' | 'UNAVAILABLE';
  image: string;
  vibe: string;
  link: string;
}

export type TabType = 'STAY' | 'EXPLORE' | 'VIBE-CHECK';
