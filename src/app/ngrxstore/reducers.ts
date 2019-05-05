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

export function productReducer(state: Product[] = listProduct, action: Action) {
    return state;
}


/**
 * 1. dinh nghia 1 reducer
 * 2. khai bao reducer cho AppComponent
 * 3. Goi state default ở component bat ki
 * 4. Thay doi state cua reducer ở component khac
 */
