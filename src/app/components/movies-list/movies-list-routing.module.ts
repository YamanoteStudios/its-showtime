import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { MoviesListComponent } from './movies-list.component';

const routes: Routes = [
    { path: '', component: MoviesListComponent }
]

export const MoviesListRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);  