import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  service = inject(CartService);

  @Input() product: Product = {
    id: 0,
    name: '',
    category: '',
    price: 0,
    description: '',
    avatar: '',
  };

  addToCart(product: any) {
    this.service.addtoCart(product);
    console.log('addToCart is working');
  }

  getQuantity(productId: number): number {
    const cartItems = this.service.getItems();
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  }
}
