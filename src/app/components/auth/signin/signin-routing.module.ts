import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { SigninComponent } from './signin.component';

const routes: Routes = [
    { path: '', component: SigninComponent }
]

export const SigninRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);  