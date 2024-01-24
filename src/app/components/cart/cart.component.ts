import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  
  service = inject(CartService);

  deleteFromCart(product: any) {
    this.service.delete(product);
  }
}
