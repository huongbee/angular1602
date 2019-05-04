import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h3>Child component</h3>
        <button (click)="increase()">Increase</button>
        <button (click)="decrease()">Decrease</button>
        <button (click)="reset()">Reset</button>
    `,
})
export class ChildComponent {
    @Output() sendToParent = new EventEmitter();
    @Input() dataFromParent;

    increase() {
        this.sendToParent.emit(this.dataFromParent + 1);
    }
    decrease() {
        this.sendToParent.emit(this.dataFromParent - 1);
    }
    reset() {
        this.sendToParent.emit(0);
    }

}
