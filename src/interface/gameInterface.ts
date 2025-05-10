export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
}

export interface odrder_by {
  name: string;
}

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  selectedOrder: string;
}
