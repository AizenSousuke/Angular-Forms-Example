import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  heroes = [];
  private messageSource = new BehaviorSubject(this.heroes);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  getHeroes() {
    return this.heroes;
  }

  setHeroes(heroesList) {
    // Update the heroes[] with heroesList
    this.heroes = heroesList;
    this.messageSource.next(this.heroes);
  }
}
