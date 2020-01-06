import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidImageGalleryComponent } from './liquid-image-gallery/liquid-image-gallery.component';



@NgModule({
  declarations: [LiquidImageGalleryComponent],
  imports: [
    CommonModule
  ],
  exports: [LiquidImageGalleryComponent]
})
export class LiquidImageGalleryModule { }
