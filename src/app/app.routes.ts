import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [

    { path:'login', component:LandingPageComponent},
    { path:'home', component:HomePageComponent},

    { path: '', redirectTo: 'login', pathMatch: 'full'},  
    { path: '**', component:PageNotFoundComponent}
];
