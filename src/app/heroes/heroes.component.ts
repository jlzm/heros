import { Component, OnInit } from '@angular/core';

import { Hero } from  '../hero';

import {HEROES} from '../mock.hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;
  seleteHero: Hero;
  constructor() { };

  onSeleteHero(hero: Hero):void {
    this.seleteHero = hero;
  };

  ngOnInit() {
  };

}
