import { Component, OnInit, Input } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes = [];

  constructor(private _heroService : HeroServiceService) { }

  ngOnInit() {
    this._heroService.currentMessage.subscribe(heroes => this.heroes = heroes);
  }

}
