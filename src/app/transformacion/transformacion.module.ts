import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformationsComponent } from './transformaciones/transformaciones.component';

@NgModule({
  declarations: [
    TransformationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TransformationsComponent
  ]
})
export class TransformacionModule { }
