import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidHeaderComponent } from './liquid-header/liquid-header.component';
import { LiquidFooterComponent } from './liquid-footer/liquid-footer.component';



@NgModule({
  declarations: [LiquidHeaderComponent, LiquidFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LiquidHeaderComponent,
    LiquidFooterComponent
  ]
})
export class LiquidThemeModule { }
