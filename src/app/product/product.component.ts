import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';
import { Product, listProduct } from './product.class';
import { ProductFilterComponent } from './product-filter.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // @ViewChild(ProductFilterComponent) productFilterComponent: ProductFilterComponent;
  filterMode: string;
  constructor() { }
  ngOnInit() {
  }

  // get productsFilter(): Array<Product> {
  //   if (this.productFilterComponent.filterProduct === 'WISHLIST') {
  //     return listProduct.filter(p => p.wishlist);
  //   }
  //   if (this.productFilterComponent.filterProduct === 'NONE_WISHLIST') {
  //     return listProduct.filter(p => !p.wishlist);
  //   }
  //   return listProduct;
  // }
  getFilterMode(mode) {
    this.filterMode = mode;
  }

  get productsFilter() {
    if (this.filterMode === 'WISHLIST') {
      return listProduct.filter(p => p.wishlist);
    }
    if (this.filterMode === 'NONE_WISHLIST') {
      return listProduct.filter(p => !p.wishlist);
    }
    return listProduct;
  }

}
