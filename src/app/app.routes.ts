import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { SingleStoreComponent } from './components/single-store/single-store.component';
import { SuccessfulRegistrationComponent } from './components/successful-registration/successful-registration.component';
import { CategoryDisplayComponent } from './components/category-display/category-display.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'confirmation', component: SuccessfulRegistrationComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: 'store/:id', component: SingleStoreComponent },
  { path: 'category/:id', component: CategoryDisplayComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
