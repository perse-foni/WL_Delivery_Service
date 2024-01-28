import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoriesListComponent } from '../categories-list/categories-list.component';
import { StoresListComponent } from '../stores-list/stores-list.component';
import { AccountPageComponent } from '../account-page/account-page.component';
import { MostFamousStoresListComponent } from "../most-famous-stores-list/most-famous-stores-list.component";
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [CommonModule, RouterOutlet, CategoriesListComponent, StoresListComponent, AccountPageComponent, MostFamousStoresListComponent, SearchComponent]
})
export class HomePageComponent {

}
