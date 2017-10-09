import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  array: Product[];

  constructor(private user: UserService, private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.getproducts().then(array => this.array = array);
    console.log(this.array);
  }

  rowSelected(ev) {
    console.log(ev.selectedItems);
  }

  update(editedProduct) {
    this.productservice
      .updateProduct(editedProduct)
      .subscribe(
      product => editedProduct = product
      );
  }

  delete(data) {
    console.log(data);
    this.productservice.deleteProduct(data.id);
  }

}