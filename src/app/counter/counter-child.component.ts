import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  template: `
  <button>Increment</button>
  <button>Decrement</button>
  <button>Reset</button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterChildComponent {
    constructor() {

    }
}
