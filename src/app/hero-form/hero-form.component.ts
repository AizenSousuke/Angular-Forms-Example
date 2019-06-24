import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really smart', 'Rich', 'Resourceful'];
  model;
  submitted = false;
  heroSaved = [];

  constructor() { }

  ngOnInit() {
    this.model = new Hero(1, 'Tom Jones', this.powers[1])
  }

  onSubmit() {
    
    console.log(this.model);
    let heroSubmitted = {"id" : this.heroSaved.length + 1, "name" : this.model.name, "power" : this.model.power};
    this.heroSaved.push(heroSubmitted);
    this.submitted = true;
  }

  get Diagnostics() {
    // TODO: Cleanup later
    return JSON.stringify(this.model);
  }  

  newHero() {
    this.model = new Hero(99, "", "");
    this.submitted = false;
  }

  onEdit() {
    this.submitted = false;
  }

}
