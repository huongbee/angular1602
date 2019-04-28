export interface Product {
    id: number;
    name: string;
    price: number;
    wishlist?: boolean;
}

  // listProduct: Product[] = []
export const listProduct: Array<Product> = [
    {id: 1, name: 'Iphone X', price: 20000000, wishlist: true},
    {id: 2, name: 'Macbook Pro', price: 40000000, wishlist: false},
    {id: 3, name: 'Apple Watch', price: 30000000, wishlist: true}
];
