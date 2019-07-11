import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { LandingComponent } from './components/common/landing/landing.component';
import { CanActiveChildGuard } from './auth/can-activate-child.guard';
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component';
import { CanActiveGuard } from './auth/can-activate.guard';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { CanDeactiveGuard } from './auth/can-deactive.guard';

const routes: Routes = [

    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },

    { path: 'signin', loadChildren: './components/auth/signin/signin.module#SigninModule' },
    {
        path: '',
        component: MoviesComponent,
        children: [
            {
                path: 'movies-list',
                component: MoviesListComponent,
            },
            {
                path: '',
                children: [
                    {
                        path: 'edit-movie/:id',
                        component: EditMovieComponent,
                        canDeactivate: [CanDeactiveGuard]
                    }
                ],
                canActivateChild: [CanActiveChildGuard],
                canActivate: [CanActiveGuard]
            },
        ]
    },
    {
        path: 'profile',
        component: UserProfilePageComponent,
        data: {
            title: 'User Profile Page'
        },
        canActivate: [CanActiveGuard]
    },



]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);  