import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
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

}
interface Product {
  id: number;
  name: string;
  price: number;
  wishlist: boolean;
}
