import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product, listProduct } from './product.class';

@Component({
    selector: 'app-products-form',
    templateUrl: './products-form.component.html',
    styleUrls: []
})
export class ProductsFormComponent implements OnInit {
    productForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }
    ngOnInit(): void {
        this.productForm = this.fb.group({
            name: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
            price: ['', [
                Validators.required,
                Validators.pattern('^[0-9]+$')
            ]],
        });
    }
}
