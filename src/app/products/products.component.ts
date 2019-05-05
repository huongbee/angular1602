import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;
  filterMode: string;
  constructor(private store: Store<Array<Product>>) {
      this.store.select('products').subscribe(p => this.products = p);
      this.store.select('filterMode').subscribe(m => this.filterMode = m);
  }

  ngOnInit() {
  }
  get productFilter() {
    if (this.filterMode === 'WISHLIST') {
      return this.products.filter(p => p.wishlist === true);
    }
    if (this.filterMode === 'NONE_WISHLIST') {
      return this.products.filter(p => p.wishlist === false);
    }
    return this.products;
  }

}
