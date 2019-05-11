import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-request-api',
    template: `
        <h2>Hello</h2>
    `
})
export class RequestApiComponent implements OnInit {
    constructor(private http: HttpClient) {
    }
    ngOnInit() {
        //https://api.openweathermap.org/data/2.5/find?appid=01cc37655736835b0b75f2b395737694&q=Hanoi
        // this.http.get('');
    }

}
