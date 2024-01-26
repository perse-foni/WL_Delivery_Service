import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductComponent } from '../product/product.component';
import { EmptyCartComponent } from '../empty-cart/empty-cart.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductComponent, EmptyCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  service = inject(CartService);

  deleteFromCart(product: any) {
    this.service.delete(product);
  }

  isCartEmpty(): boolean {
    const cartItems = this.service.getItems();
    return cartItems.length === 0;
  }
}
