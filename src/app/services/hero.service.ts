import { Injectable } from '@angular/core';

import { Hero } from '../heroDetail/hero';
import { HEROES } from '../mockData/mock-heroes';

@Injectable()
export class HeroService{
    getHeroes(): Hero[] { return HEROES; }
}