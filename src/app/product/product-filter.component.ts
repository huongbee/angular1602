import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-product-filter',
    templateUrl: './product-filter.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductFilterComponent {
    filterProduct = 'SHOW_ALL';
    @Output() sendFilterModeEmit = new EventEmitter();

    sendFilterMode(data) {
        this.filterProduct = data.target.value;
        this.sendFilterModeEmit.emit(this.filterProduct);
    }
}

