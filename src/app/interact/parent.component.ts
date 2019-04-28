import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h3>Parent component</h3>
        <app-child
            *ngFor="let p of products"
            [productInChild]="p"
         >
        </app-child>
    `,
})
export class ParentComponent {
    products = [
        {
            name: 'Macbook Pro Retina',
            price: 45000000
        },
        {
            name: 'Iphone XS',
            price: 25000000
        },
        {
            name: 'Macbook Air',
            price: 15000000
        }
    ];
}
