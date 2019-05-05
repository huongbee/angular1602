import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-products-form',
    templateUrl: './products-form.component.html',
    styleUrls: []
})
export class ProductsFormComponent implements OnInit {
    productForm: FormGroup;
    isShowForm: boolean;
    constructor(private fb: FormBuilder, private store: Store<boolean>) {
        this.store.select('toogleForm').subscribe(f => this.isShowForm = f);
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
