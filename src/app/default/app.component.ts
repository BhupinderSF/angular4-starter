import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroDetail/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {

  heroes: Hero[];
  title = 'Tour of Heroes';
  // heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

  // selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
