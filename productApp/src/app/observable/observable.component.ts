import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['observable.component.css']
})
export class ObservableComponent implements OnInit {
  ngOnInit(): void {
    this.productService.getproducts().then(products => this.products = products);
  }
  products: Product[];
  product = new Product();
  constructor(private productService: ProductService) { }

  sendProduct(prodName, prodDescription, prodType): void {
    console.log(prodName);
    console.log(prodDescription);
    console.log(prodType);
    this.product.productName = prodName;
    this.product.productDescription = prodDescription;
    this.product.productType = prodType;
    this.product.id = null;
    this.productService.addProduct(this.product).subscribe(product => this.product = product);
  }
} 