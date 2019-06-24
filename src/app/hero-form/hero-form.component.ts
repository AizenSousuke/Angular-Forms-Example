import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { format } from 'url';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really smart', 'Rich', 'Resourceful'];
  model = new Hero(1, 'Tom Jones', this.powers[1]);
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  get Diagnostics() {
    // TODO: Cleanup later
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42, "", "");
  }

  onEdit() {
    this.submitted = false;
  }

}
