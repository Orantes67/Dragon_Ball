import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from "./characters/characters.module";
import { PlanetsModule } from "./planet/planets.module";
import { TransformacionModule } from './transformacion/transformacion.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    HttpClientModule,
    PlanetsModule,
    TransformacionModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }