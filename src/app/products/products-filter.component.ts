import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-products-filter',
    templateUrl: './products-filter.component.html',
    styleUrls: []
})
export class ProductsFilterComponent {
    filterMode: Observable<string>;

    constructor(private store: Store<string>) {
        this.filterMode = this.store.pipe(select('filterMode'));
    }
    changeFilterMode(data) {
        this.store.dispatch({
            type: 'SET_FILTER_MODE',
            mode: data.target.value
        });
    }
}

