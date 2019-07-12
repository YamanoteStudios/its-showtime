import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { LandingComponent } from './components/common/landing/landing.component';
import { UserProfilePageComponent } from './components/user-profile-page/user-profile-page.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { EditMovieComponent } from './components/movies/edit-movie/edit-movie.component';
import { MovieComponent } from './components/movies/movie/movie.component';

import { CanActiveChildGuard } from './auth/can-activate-child.guard';
import { CanActiveGuard } from './auth/can-activate.guard';
import { CanDeactiveGuard } from './auth/can-deactive.guard';
import { ResolveGuard } from './auth/resolve.guard';

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
                path: 'movie',
                children: [
                    {
                        path: ':id',
                        component: MovieComponent,
                        resolve: { movie: ResolveGuard }
                    },
                    {
                        path: ':id/edit-movie',
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
    }
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);  