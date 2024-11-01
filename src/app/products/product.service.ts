import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Produto 1', price: 100, description: 'Descrição do produto 1', image: 'https://acdn.mitiendanube.com/stores/002/103/994/products/91a8bb338ae4afec3cbf1492c9df0e19-5558f654bf5d52d7ad17184702250186-640-0.png' },
    { id: 2, name: 'Produto 2', price: 200, description: 'Descrição do produto 2', image: 'https://images-americanas.b2w.io/produtos/01/00/img/132450/2/132450206_1GG.jpg' },
    { id: 3, name: 'Produto 3', price: 150, description: 'Descrição do produto 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42KqO4kZorgTygtijL2qcTXj-6uj5v6rRtw&s' },
    { id: 4, name: 'Produto 4', price: 320, description: 'Descrição do produto 4', image: 'https://m.media-amazon.com/images/I/71BtQsBUQlL._AC_UF1000,1000_QL80_.jpg' },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.products$;
  }
}

