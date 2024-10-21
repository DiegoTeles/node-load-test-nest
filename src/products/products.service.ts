import { Injectable } from '@nestjs/common';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private idCounter = 1;

  async findAll(): Promise<Product[]> {  // Retorna um array de objetos que seguem a interface Product
    return this.products;
  }

  async create(product: { name: string; price: number }): Promise<Product> {  // Retorna o produto criado
    const newProduct: Product = {
      id: this.idCounter++, 
      name: product.name,
      price: product.price
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
