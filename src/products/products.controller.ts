import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Promise<Product[]> {  // Usamos a interface Product em vez do modelo
    return this.productsService.findAll();
  }

  @Post()
  createProduct(@Body() createProductDto: { name: string; price: number }): Promise<Product> {  // Usamos a interface Product aqui também
    return this.productsService.create(createProductDto);
  }
}
