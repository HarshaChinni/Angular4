import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { InMemoryDataService} from './in-memory-data.service';

@Injectable()
export class ProductService {

  // private productsUrl = 'http://localhost:3000/products';  // URL to web api
  // imwa : InMemoryDataService;
  constructor(private http: HttpClient) { }

  getproducts(): Promise<Product[]> {
    return this.http.get('http://localhost:3000/products')
      .toPromise()
      .then(response => response as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  addProduct(singleProduct: Product): Observable<Product> {
    console.log("Add product() frm product.service.ts is called");
    console.log(singleProduct);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers:headers });
    // let body = JSON.stringify(singleProduct);
    return this.http.post('http://localhost:3000/products', singleProduct).map(response => response as  Product);
    // .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
}   

updateProduct(data : Product) : Observable<Product>{
  // let headers = new Headers({ 'Content-Type': 'application/json' });
  const header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  const url =`http://localhost:3000/products/${data.id}`;
  console.log("Inside update in service");
  console.log(data);
 
  return this.http.put(url,data, {headers: header}).map(response => {
    alert('PUT Called');
    return response as  Product;
  });
};

deleteProduct(id:number):Promise<void>{
  const url =`http://localhost:3000/products/${id}`;
 
  console.log("The cntrl is in delete method");
  console.log(id);
 return this.http.delete(url).toPromise().then(()=>null);
}

  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || {};
  //   // console.log("extract data method");
  // }
  // private handleErrorObservable(error: Response | any) {
  //   console.error(error.message || error);
  //   return Observable.throw(error.message || error);
  // }


}
