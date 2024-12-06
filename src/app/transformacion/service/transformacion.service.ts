import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  // Lista predefinida de transformaciones
 private predefinedTransformations = [
  // Transformaciones de Goku
  { id: 1, name: 'Goku SSJ', image: 'https://dragonball-api.com/transformaciones/goku_ssj.webp', ki: '3 Billion' },
  { id: 2, name: 'Goku SSJ2', image: 'https://dragonball-api.com/transformaciones/goku_ssj2.webp', ki: '6 Billion' },
  { id: 3, name: 'Goku SSJ3', image: 'https://dragonball-api.com/transformaciones/goku_ssj3.webp', ki: '24 Billion' },
  { id: 4, name: 'Goku SSJ4', image: 'https://dragonball-api.com/transformaciones/goku_ssj4.webp', ki: '2 Quadrillion' },
  { id: 5, name: 'Goku Ultra Instinct', image: 'https://dragonball-api.com/transformaciones/goku_ultra.webp', ki: '90 Septillion' },

  // Transformaciones de Vegeta
  { id: 6, name: 'Vegeta SSJ', image: 'https://dragonball-api.com/transformaciones/vegeta SSJ (2).webp', ki: '3 Billion' },
  { id: 7, name: 'Vegeta SSJ2', image: 'https://dragonball-api.com/transformaciones/vegeta SSJ2.webp', ki: '6 Billion' },
  { id: 8, name: 'Vegeta SSJ Blue', image: 'https://dragonball-api.com/transformaciones/vegeta SSJB.webp', ki: '10 Trillion' },
  { id: 9, name: 'Vegeta Ultra Ego', image: 'https://dragonball-api.com/transformaciones/vegeta mega instinto.webp', ki: '80 Septillion' },

  // Transformaciones de Freezer
 
    { id: 11, name: 'Freezer Segunda Forma', image: 'https://dragonball-api.com/transformaciones/freezer 2nd forma.webp', ki: '1 Million' },
  { id: 12, name: 'Freezer Tercera Forma', image: 'https://dragonball-api.com/transformaciones/Freezer_3.webp', ki: '2 Million' },
  { id: 13, name: 'Freezer Forma Final', image: 'https://dragonball-api.com/transformaciones/render_freezer_perfect_form_by_poh2000-d4n0ewd.webp', ki: '120 Million' },
  { id: 14, name: 'Freezer Dorado', image: 'https://dragonball-api.com/transformaciones/freezer_gold.webp', ki: '10 Billion' },
  

  // Transformaciones de Gohan
  { id: 16, name: 'Gohan SSJ', image: 'https://dragonball-api.com/transformaciones/gohan_ssj-removebg-preview.webp', ki: '5 Billion' },
  { id: 17, name: 'Gohan SSJ2', image: 'https://dragonball-api.com/transformaciones/Gohan_joven_ssj2.webp', ki: '10 Billion' },
  { id: 18, name: 'Gohan Definitivo', image: 'https://dragonball-api.com/transformaciones/gohan_ultimate.webp', ki: '100 Trillion' },
  { id: 19, name: 'Gohan Beast', image: 'https://dragonball-api.com/transformaciones/beast_gohan___dragon_ball_super_super_hero_by_rmrlr2020_dfbqvta-pre.webp', ki: '120 Septillion' },

  // Transformaciones de Piccolo
  { id: 20, name: 'Piccolo Base', image: 'https://dragonball-api.com/transformaciones/Piccolo super namekiano.webp', ki: '200,000' },
  
  { id: 23, name: 'Piccolo Orange', image: 'https://dragonball-api.com/transformaciones/picolo orange.webp', ki: '80 Quadrillion' }
];

  // BehaviorSubject para emitir transformaciones
  private transformationsSource = new BehaviorSubject<any[]>(this.predefinedTransformations);
  transformations$ = this.transformationsSource.asObservable();

  constructor() {}

  // Método opcional para obtener transformaciones (en este caso ya predefinidas)
  getTransformations(): void {
    this.transformationsSource.next(this.predefinedTransformations);
  }
}
