import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Produto 1', price: 100, description: 'Descrição do produto 1' },
    { id: 2, name: 'Produto 2', price: 200, description: 'Descrição do produto 2' },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.products$;
  }
}
