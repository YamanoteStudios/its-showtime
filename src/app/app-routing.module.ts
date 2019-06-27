import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { LandingComponent } from './components/common/landing/landing.component';

const routes: Routes = [

    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },

    { path: 'signin', loadChildren: './components/auth/signin/signin.module#SigninModule' },
    { path: 'movies-list', loadChildren: './components/movies-list/movies-list.module#MoviesListModule' },

]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);  