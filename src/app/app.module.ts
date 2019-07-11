import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LandingComponent } from './components/common/landing/landing.component';
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';

import { CanActiveGuard } from './auth/can-activate.guard';
import { CanActiveChildGuard } from './auth/can-activate-child.guard';

import { MoviesListService } from './core/services/movies-list/movies-list.service';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanDeactiveGuard } from './auth/can-deactive.guard';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    LandingComponent,

    MoviesListComponent,
    UserProfilePageComponent,
    EditMovieComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MoviesListService,

    CanActiveGuard,
    CanActiveChildGuard,
    CanDeactiveGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
