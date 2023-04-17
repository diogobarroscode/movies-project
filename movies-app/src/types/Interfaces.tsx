export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number; 
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface moviesByGenreObject {
    [key: number]: Movie[];
  }