import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
