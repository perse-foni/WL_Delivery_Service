import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/sign-in-form/landing-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { SingleStoreComponent } from './components/single-store/single-store.component';
import { SuccessfulRegistrationComponent } from './components/successful-registration/successful-registration.component';
import { CategoryDisplayComponent } from './components/category-display/category-display.component';
import { FoundStoresComponent } from './components/found-stores/found-stores.component';


export const routes: Routes = [

    { path:'login', component:LandingPageComponent},
    { path:'home', component:HomePageComponent},
    { path:'registration', component:RegistrationPageComponent},
    { path: 'confirmation', component:SuccessfulRegistrationComponent},
    { path: 'account', component:AccountPageComponent},
    { path: 'history', component:HistoryPageComponent},
    { path: 'store/:id', component:SingleStoreComponent},
    { path: 'category/:id', component:CategoryDisplayComponent},
    { path: 'stores', component:FoundStoresComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full'},  
    { path: '**', component:PageNotFoundComponent}
];
