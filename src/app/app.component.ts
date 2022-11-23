import { Component } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent {
  products: Product[];

  selectedProduct1: Product;

  selectedProduct2: Product;

  selectedProduct3: Product;

  selectedProducts1: Product[];

  selectedProducts2: Product[];

  selectedProducts3: Product[];

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
  }

  selectProduct(product: Product) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: product.name,
    });
  }

  onRowSelect(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: event.data.name,
    });
    console.log('Product Selected', event.data.name);
  }

  onRowUnselect(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Unselected',
      detail: event.data.name,
    });
  }
}
