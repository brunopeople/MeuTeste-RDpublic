import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintCalculatorService } from './paint-calculator.service';
import { CalculadorTintaComponent } from './calculador-tinta.component';


@NgModule({
  declarations: [
    CalculadorTintaComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    CalculadorTintaComponent
  ],

  providers: [
    PaintCalculatorService
  ]
})
export class PaintCalculatorModule { }
