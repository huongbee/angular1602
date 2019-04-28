import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h3>Parent component</h3>
        <app-child [productInChild]="product">
        </app-child>
    `,
})
export class ParentComponent {
    // product = {
    //     name: 'Macbook Pro Retina',
    //     price: 45000000
    // };
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
