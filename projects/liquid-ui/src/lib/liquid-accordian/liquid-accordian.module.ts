import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidAccordianComponent } from './liquid-accordian/liquid-accordian.component';



@NgModule({
  declarations: [LiquidAccordianComponent],
  imports: [
    CommonModule
  ],
  exports: [LiquidAccordianComponent]
})
export class LiquidAccordianModule { }
