import { Component, Input } from '@angular/core';
import { Product, listProduct } from './product.class';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductItemComponent {
    @Input() product: Product;
    setWishlist(id) {
        const product = listProduct.find(p => p.id === id);
        product.wishlist = !product.wishlist;
    }
    removeProduct(id) {
        const product = listProduct.findIndex(p => p.id === id);
        if (product >= 0) {
            listProduct.splice(product, 1);
        }
    }
}

