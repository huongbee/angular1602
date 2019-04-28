import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';
import { Product, listProduct } from './product.class';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  filterProduct = 'SHOW_ALL';

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
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
  get productsFilter(): Array<Product> {
    if (this.filterProduct === 'WISHLIST') {
      return listProduct.filter(p => p.wishlist);
    }
    if (this.filterProduct === 'NONE_WISHLIST') {
      return listProduct.filter(p => !p.wishlist);
    }
    return listProduct;
  }

}
