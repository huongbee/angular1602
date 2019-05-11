import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.class';

@Component({
    selector: 'app-request-api',
    template: `
        <div class="container">
            <h2>Hello</h2>
            <ul>
                <li *ngFor="let p of products"> {{p.name}} - {{p.price | number}}</li>
            </ul>
        </div>
    `
})
export class RequestApiComponent implements OnInit {
    products: Product[];
    constructor(private http: HttpClient) {
    }
    ngOnInit() {
        // this.http.get('https://api.openweathermap.org/data/2.5/find?appid=01cc37655736835b0b75f2b395737694&q=Saigon')
        // .toPromise()
        // .then(result => console.log(result))
        // .catch(error => console.log(error));

        this.http.get('http://localhost:3000/product')
        .toPromise()
        .then((response: any) => {
            console.log(response);
            this.products = response.products;
        })
        .catch(error => console.log(error));
    }
}
