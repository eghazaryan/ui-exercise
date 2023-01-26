export interface CardStats {
  id: "infrastructure" | "popularity" | "availability" | "fish_size";
  value: number;
}

export interface CardData {
  id: "great-barrier-reef";
  name: string;
  description: string;
  license: boolean;
  boat: boolean;
  fish: string[];
  rating: number;
  comments: number;
  bookmarked: boolean;
  stats: CardStats[];
  images: string[];
}
