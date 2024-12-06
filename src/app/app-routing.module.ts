import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsCharactersComponent } from './characters/cards-characters/cards-characters.component';
import { PlanetsComponent } from './planet/planets/planets.component';
<<<<<<< Updated upstream
const routes: Routes = [
  { path: 'characters', component: CardsCharactersComponent },
  { path: 'planets/:planetName', component: PlanetsComponent }, 
  { path: '', redirectTo: '/characters', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/characters' } 
=======
import { TransformationsComponent } from './transformacion/transformaciones/transformaciones.component';

const routes: Routes = [
  { path: 'characters', component: CardsCharactersComponent },
  { path: 'planets', component: PlanetsComponent },
  {path:'transformaciones', component: TransformationsComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/characters' }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }