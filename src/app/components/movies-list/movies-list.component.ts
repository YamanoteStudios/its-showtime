import { Component, OnInit } from '@angular/core';
import { MoviesListService } from 'src/app/core/services/movies-list/movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesListService: MoviesListService) { }

  ngOnInit() {
  }


}
