import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css', '../movies-list/movies-list.component.css']
})
export class MovieComponent implements OnInit {

  movieID: number;
  changesSaved: boolean = false;
  movieMeta: { id: number, name: string };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.movieMeta = data['movie'];
        // console.log(this.movieMeta);
      });
  }

  editMovie() {
    this.router.navigate(['edit-movie'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
