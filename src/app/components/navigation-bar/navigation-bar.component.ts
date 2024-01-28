import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, CartComponent, SearchComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

service = inject (CartService)

getTotalQuantity() {
  return Math.max(
    this.service.getItems().reduce((acc, item) => acc + item.quantity, 0),
    0
  );
}
}
