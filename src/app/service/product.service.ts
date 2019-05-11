import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.class';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {
    }

        // this.http.get('https://api.openweathermap.org/data/2.5/find?appid=01cc37655736835b0b75f2b395737694&q=Saigon')
        // .toPromise()
        // .then(result => console.log(result))
        // .catch(error => console.log(error));
    getAllProducts(): Promise<Product[]> {
        return this.http.get('http://localhost:3000/product')
        .toPromise()
        .then((result: any) => result.products)
        .catch(error => error);
    }
    addProduct( name: string, price: number): Promise<Product> | any {
        return this.http.post('http://localhost:3000/add-product', { name, price } )
        .toPromise()
        .then((result: any) => {
            if (result.success) {return result.product; }
            return Promise.reject(result.message);
        })
        .catch(error => error);
    }
}
