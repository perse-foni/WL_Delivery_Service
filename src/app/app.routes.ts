import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';


export const routes: Routes = [

    { path:'login', component:LandingPageComponent},
    { path:'home', component:HomePageComponent},

    { path: '', redirectTo: 'login', pathMatch: 'full'},  
    { path: '**', component: FileNotFoundComponent}
];
