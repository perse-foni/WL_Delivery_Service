import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  http = inject(HttpClient);
  endpointUrl = 'assets/json-data/stores.json';

  private items: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  addtoCart(product: any) {
    this.items.push({ ...product, quantity: 1 });
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  increaseQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  decreaseQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item && item.quantity > 0) {
      item.quantity--;
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }

  getTotal() {
    const total = this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  }
}