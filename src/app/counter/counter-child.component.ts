import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  template: `
  <button (click)="increase()">Increment</button>
  <button (click)="decrease()">Decrement</button>
  <button (click)="reset()">Reset</button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterChildComponent {
    constructor(private store: Store<any>) {
    }
    increase() {
        this.store.dispatch({type: 'INCREASE'});
    }
    decrease() {
        this.store.dispatch({type: 'DECREASE'});
    }
    reset() {
        this.store.dispatch({type: 'RESET'});
    }
}
