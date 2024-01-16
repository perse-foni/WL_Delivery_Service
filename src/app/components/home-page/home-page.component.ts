import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoriesListComponent } from '../categories-list/categories-list.component';
import { StoresListComponent } from '../stores-list/stores-list.component';
import { AccountPageComponent } from '../account-page/account-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CategoriesListComponent, StoresListComponent, AccountPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
