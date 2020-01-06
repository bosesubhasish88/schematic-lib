import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidGridComponent } from './liquid-grid/liquid-grid.component';



@NgModule({
  declarations: [LiquidGridComponent],
  imports: [
    CommonModule
  ],
  exports: [LiquidGridComponent]
})
export class LiquidGridModule { }
