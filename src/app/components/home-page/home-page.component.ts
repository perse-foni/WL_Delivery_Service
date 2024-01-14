import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoriesListComponent } from '../categories-list/categories-list.component';
import { StoresListComponent } from '../stores-list/stores-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CategoriesListComponent, StoresListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
