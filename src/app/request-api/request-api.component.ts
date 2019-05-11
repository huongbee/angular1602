import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-request-api',
    // providers: [],
    template: `
        <div class="container">
            <h2>List Products</h2>
            <ul>
                <li *ngFor="let p of products"> {{p.name}} - {{p.price | number}}</li>
            </ul>
            <h3>Add product</h3>
            <form [formGroup]="productForm"
            (ngSubmit)="addProduct()">
                Name: <input formControlName="name" placaholder="Enter name">
                <br><br>
                Price: <input formControlName="price" placaholder="Enter price">
                <br><br>
                <button class="btn btn-success">Add</button>
            </form>
        </div>
    `
})
export class RequestApiComponent implements OnInit {
    products: Product[];
    productForm: FormGroup;
    constructor(private fb: FormBuilder, private productService: ProductService, private store: Store<Product[]>) {
        this.productForm = this.fb.group({
            name: ['', Validators.required],
            price: ['0', Validators.required]
        });
    }
    ngOnInit() {
        this.productService.getAllProducts()
        .then(listProduct => {
            // this.products = listProduct;
            this.store.dispatch({type: 'INIT', products: listProduct});
            this.store.select('products')
            .subscribe(p => this.products = p);
        })
        .catch(err => console.error(err));
    }
    addProduct() {
        const { name, price } = this.productForm.value;
        this.productService.addProduct(name, price)
        .then(result => {
            this.store.dispatch({type: 'ADD_PRODUCT', product: result});
        })
        .catch(err => console.error(err.message));
    }
}
