import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.class';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  public name: string;
  public hero = new Hero('Nguyen Trai', 45);
  constructor() { }

  ngOnInit() {
    this.name = 'Teo';
  }

}
