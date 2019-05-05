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
  constructor(private store: Store<Array<Product>>) {
      this.store.select('products').subscribe(p => this.products = p);
  }

  ngOnInit() {
  }

}
