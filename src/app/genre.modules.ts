export interface Genre {
  movies: {
    title: string;
    description: string;
    posterUrl: string;
    genre:string;
    duration:string;
    rating:string;
  }[];
}
