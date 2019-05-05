import { Component, Input } from '@angular/core';
import { Product, listProduct } from '../product.class';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-products-item',
    templateUrl: './products-item.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsItemComponent {
    @Input() product: Product;
    constructor(private store: Store<Product[]>) {

    }
    removeProduct(idProduct) {
        this.store.dispatch({
            type: 'REMOVE_PRODUCT',
            id: idProduct
        });
    }
    setWishlist(idProduct) {
        this.store.dispatch({
            type: 'TOOGLE_WISHLIST',
            id: idProduct
        });
    }
}

