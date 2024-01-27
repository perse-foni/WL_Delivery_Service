import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {


  private items: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  addtoCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++; 
    } else {
      this.items.push({ ...product, quantity: 1 }); 
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cartItems');
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
      if (item.quantity === 0) {
        this.delete(item);
      }
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