import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // listProduct: Product[] = []
  listProduct: Array<Product> = [
    {id: 1, name: 'Iphone X', price: 20000000, wishlist: true},
    {id: 2, name: 'Macbook Pro', price: 40000000, wishlist: false},
    {id: 3, name: 'Apple Watch', price: 30000000, wishlist: true}
  ];
  isShowForm = false;
  productForm: FormGroup;
  filterProduct = 'SHOW_ALL';

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      price: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
    });
  }
  addProduct() {
    const { name, price } = this.productForm.value;
    const id = Math.round(Math.random() * 100);
    const product: Product = { id, name, price, wishlist: false };
    this.listProduct.unshift( product );
    // hide form
    this.toogleForm();
    // clear data on form
    this.productForm.get('name').setValue('');
    this.productForm.get('price').setValue('');
  }
  setWishlist(id) {
    const product = this.listProduct.find(p => p.id === id);
    product.wishlist = !product.wishlist;
  }
  removeProduct(id) {
    const product = this.listProduct.findIndex(p => p.id === id);
    if (product >= 0) {
      this.listProduct.splice(product, 1);
    }
  }
  toogleForm() {
    this.isShowForm = !this.isShowForm;
  }
  get productsFilter(): Array<Product> {
    if (this.filterProduct === 'WISHLIST') {
      return this.listProduct.filter(p => p.wishlist);
    }
    if (this.filterProduct === 'NONE_WISHLIST') {
      return this.listProduct.filter(p => !p.wishlist);
    }
    return this.listProduct;
  }

}
interface Product {
  id: number;
  name: string;
  price: number;
  wishlist?: boolean;
}
