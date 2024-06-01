import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchQuery: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies;
  }

  onSearchChange(query: string): void {
    this.filteredMovies = this.movieService.filterMovies(query);
  }

}
