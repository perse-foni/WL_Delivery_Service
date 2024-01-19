import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/sign-in-form/landing-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { SingleStoreComponent } from './single-store/single-store.component';

export const routes: Routes = [

    { path:'login', component:LandingPageComponent},
    { path:'home', component:HomePageComponent},
    { path:'registration', component:RegistrationPageComponent},
    { path: 'profile', component:AccountPageComponent},
    { path: 'history', component:HistoryPageComponent},
    { path: 'store/:id', component:SingleStoreComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full'},  
    { path: '**', component:PageNotFoundComponent}
];
