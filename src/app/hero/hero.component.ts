import { Component, OnInit } from '@angular/core';
import { Hero, listHero } from '../hero.class';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  public name: string;
  public hero = new Hero('Nguyen Trai', 34);
  public heroes = [];

  myID = 'my-id';
  isDisabled = false;

  colorRed = '2312';

  constructor() { }

  ngOnInit() {
    this.name = 'Teo';
    this.heroes = listHero;
  }

}
