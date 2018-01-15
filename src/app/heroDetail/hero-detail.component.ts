import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router/src/router_state';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
        <button (click)="save()">save</button>
        <button (click)="goBack()">go back</button>
        </div>
  `
})

export class HeroDetailComponent {
    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) { }
    @Input() hero: Hero;
    ngOnInit(): void {
        this.getHero();
    }

    idFetched = '';

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        // this.route.params.subscribe(id=>{ this.idFetched  = id.id; });
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    save(): void {
        this.heroService.updateHero(this.hero)
          .subscribe(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

}