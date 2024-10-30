import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service'; // Importar o serviço do carrinho

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Inicializa a lista de itens do carrinho

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); // Busca os itens do carrinho ao inicializar
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item); // Método para remover item do carrinho
    this.cartItems = this.cartService.getCartItems(); // Atualiza a lista após remover
  }

  totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0); // Calcula o preço total
  }
}
