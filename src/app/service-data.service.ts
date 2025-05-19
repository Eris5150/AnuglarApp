import { Injectable } from '@angular/core';
import { Genre } from './genre.modules';
import genresData from '../assets/data/movies.json';

@Injectable({
  providedIn: 'root',
})
export class RetrieveGenreDataService {
  action: Genre = genresData.action;
  thriller: Genre = genresData.thriller;

  constructor() {}
}
