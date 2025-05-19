import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetrieveGenreDataService } from '../service-data.service';
import { Genre } from '../genre.modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  actionMovies!:Genre;
  thrillerMovies!:Genre;

  constructor(private genreService: RetrieveGenreDataService, private router:Router){}

  ngOnInit(): void {
    this.actionMovies = this.genreService.action;
    this.thrillerMovies = this.genreService.thriller;
  }

  navigateToBooking(movieTitle: string): void {
    this.router.navigate(['/booking'], { queryParams: { movie: movieTitle } });
  }

}
