import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  template: `
    {{ numberInit }}
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  numberInit: Observable<number>; // get from default state counterReducer = 0
  constructor(private store: Store<number>) {
    // this.numberInit = store.pipe(select('counter'));
    // {{ numberInit | async }}
    this.store.select('counter').subscribe(n => this.numberInit = n);
  }

  ngOnInit() {
  }

}
