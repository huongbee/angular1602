import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '.app-root',
  selector: '[app-root]',
  templateUrl: './app.component.html',
  // template: `
  //     <h2>Hello Angular</h2>
  //     <app-hero></app-hero>
  // `,
  styles: [
    `h2{
      color:red
    }
    `,
    'h2{color:blue}'
  ]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1602';
}

// ng generate component hero : ng g c hero