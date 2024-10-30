import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(product: any): void {
    this.cartItems.push(product);
  }

  removeFromCart(product: any): void {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
