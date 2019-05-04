import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h3>Child component</h3>
        <button (click)="send()">Send</button>
    `,
})
export class ChildComponent {
    @Output() sendToParent = new EventEmitter();

    send() {
        this.sendToParent.emit('KPT');
    }
}
