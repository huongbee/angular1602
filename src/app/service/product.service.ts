import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.class';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {
    }
    getAllProducts(): Promise<Product[]> {
        return this.http.get('http://localhost:3000/product')
        .toPromise()
        .then((result: any) => result.products)
        .catch(error => error);
    }
    addProduct() {

    }
}
