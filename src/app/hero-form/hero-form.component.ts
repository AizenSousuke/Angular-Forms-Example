import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really smart', 'Rich', 'Resourceful'];
  model;
  submitted = false;
  editting = false;
  idEditting : number;
  heroSaved = [];

  constructor(private _heroService : HeroServiceService) { }

  ngOnInit() {
    this.model = new Hero(1, 'Tom Jones', this.powers[1])
  }

  onSubmit() {
    
    console.log(this.model);
    let heroSubmitted;
    if (!this.editting) {
      heroSubmitted = {"id" : this.heroSaved.length + 1, "name" : this.model.name, "power" : this.model.power};
      this.heroSaved.push(heroSubmitted);
      console.log("Added new hero!");
    } else {
      //this.heroSaved[this.idEditting] = {"id" : this.idEditting,"name" : this.model.name, "power" : this.model.power};
      this.heroSaved[this.idEditting - 1].name = this.model.name;
      this.heroSaved[this.idEditting - 1].power = this.model.power;
      console.log("Editted hero!");
    }

    // Use a service to transfer the hero list out
    this._heroService.setHeroes(this.heroSaved);

    this.submitted = true;
  }

  get Diagnostics() {
    // TODO: Cleanup later
    return JSON.stringify(this.model);
  }  

  newHero() {
    this.model = new Hero(this.heroSaved.length + 1, "", "");
    this.submitted = false;
    this.editting = false;
  }

  onEdit(_form) {
    // Transfer the data to the form's field
    //console.log(this.heroSaved[this.heroSaved.length - 1].power);  
    this.idEditting = this.heroSaved.length;
    console.log("Editing ID: " + this.idEditting);  
    _form.form.setValue({ "name" : this.heroSaved[this.heroSaved.length - 1].name, "power" : this.heroSaved[this.heroSaved.length - 1].power });
    this.submitted = false;
    this.editting = true;
  }

}
