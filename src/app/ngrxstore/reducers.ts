import { Action } from '@ngrx/store';
import { Product, listProduct } from '../product.class';

const initCounter = 0;
export function counterReducer(state: number = initCounter, action: Action) {
    if (action.type === 'INCREASE') {
        return state + 1;
    }
    if (action.type === 'DECREASE') {
        return state - 1;
    }
    if (action.type === 'RESET') {
        return initCounter;
    }
    return state;
}

// listProduct: pure
export function productReducer(state: Product[] = listProduct, action: any): Product[] {
    if (action.type === 'REMOVE_PRODUCT') {
        return state.filter(p => p.id !== action.id);
    }
    if (action.type === 'TOOGLE_WISHLIST') {
        return state.map(product => {
            if (product.id !== action.id) {return product; }
            product.wishlist = !product.wishlist;
            return product;
        });
    }
    return state;
}
export function formAddProductReducer(state: boolean = false, action): boolean {
    if (action.type === 'TOOGLE') { return action.status; }
    return state;
}
export function filterReducer(state: string = 'SHOW_ALL', action: Action): string {
    return state;
}

/**
 * 1. dinh nghia 1 reducer
 * 2. khai bao reducer cho AppComponent
 * 3. Goi state default ở component bat ki
 * 4. Thay doi state cua reducer ở component khac
 */
