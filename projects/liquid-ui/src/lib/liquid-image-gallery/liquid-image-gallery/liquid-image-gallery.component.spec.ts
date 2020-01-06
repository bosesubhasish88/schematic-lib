import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidImageGalleryComponent } from './liquid-image-gallery.component';

describe('LiquidImageGalleryComponent', () => {
  let component: LiquidImageGalleryComponent;
  let fixture: ComponentFixture<LiquidImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidImageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
