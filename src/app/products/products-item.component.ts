import { Component, Input } from '@angular/core';
import { Product, listProduct } from '../product.class';

@Component({
    selector: 'app-products-item',
    templateUrl: './products-item.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsItemComponent {
    @Input() product: Product;
}

