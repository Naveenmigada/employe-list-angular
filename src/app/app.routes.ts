import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path:'login',component:LoginComponent},
    { path:'signup',component:SignupComponent},
    {path:'homepage',component:HomepageComponent},

];
