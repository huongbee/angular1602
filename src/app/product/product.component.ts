import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // listProduct: Product[] = []
  listProduct: Array<Product> = [
    {id: 1, name: 'Iphone X', price: 20000000, wishlish: true},
    {id: 2, name: 'Macbook Pro', price: 40000000, wishlish: true},
    {id: 3, name: 'Apple Watch', price: 30000000, wishlish: true}
  ];
  constructor() { }

  ngOnInit() {
  }

}
interface Product {
  id: number;
  name: string;
  price: number;
  wishlish: boolean;
}
