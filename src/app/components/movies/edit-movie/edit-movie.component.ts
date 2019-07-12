import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesListService } from 'src/app/core/services/movies-list/movies-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movieForm: FormGroup;
  movieID: number;
  changesSaved: boolean = false;
  movieMeta: { id: string, name: string };

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private moviesListService: MoviesListService
  ) { }

  ngOnInit() {
    this.initForm();
    this.bindMovie();
    this.searchMovie();
  }

  initForm() {
    this.movieForm = this.fb.group({
      id: this.fb.control(''),
      name: this.fb.control('')
    });
  }

  bindMovie() {
    this.router.params.subscribe((prams: Params) => {
      this.movieID = prams.id;
    })
  }

  searchMovie() {
    this.movieMeta = this.moviesListService.searchMovie(this.movieID);
    this.movieForm.setValue(this.movieMeta);
  }

  updateMovie() {
    this.changesSaved = true;
    // console.log(this.movieForm.value);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.movieMeta.name !== this.movieForm.controls.name.value && !this.changesSaved) {
      return confirm('Do you want to discard these changes?');
    }
    else {
      return true;
    }
  }

}
