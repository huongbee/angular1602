import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h3>Child component</h3>
        <div>
            <p>pipe</p>
            <p>{{productInChild | json }}</p>
        </div>
    `,
})
export class ChildComponent {
    @Input() productInChild;
}
