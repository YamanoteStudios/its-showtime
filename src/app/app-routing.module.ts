import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './components/common/home/home.component';

const routes: Routes = [

    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },

    { path: 'signin', loadChildren: './components/auth/signin/signin.module#SigninModule' },
    { path: 'movies-list', loadChildren: './components/movies-list/movies-list.module#MoviesListModule' },

]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);  