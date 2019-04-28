import { Component, Input } from '@angular/core';
import { Product } from './product.class';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductItemComponent {
    @Input() product: Product;
}

