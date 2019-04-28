import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Product, listProduct } from './product.class';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductFormComponent implements OnInit {
    isShowForm = false;
    productForm: FormGroup;

    toogleForm() {
        this.isShowForm = !this.isShowForm;
    }
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
    addProduct() {
        const { name, price } = this.productForm.value;
        const id = Math.round(Math.random() * 100);
        const product: Product = { id, name, price, wishlist: false };
        listProduct.unshift( product );
        // hide form
        this.toogleForm();
        // clear data on form
        this.productForm.get('name').setValue('');
        this.productForm.get('price').setValue('');
    }
}
