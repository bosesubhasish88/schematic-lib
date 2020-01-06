import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidGridComponent } from './liquid-grid.component';

describe('LiquidGridComponent', () => {
  let component: LiquidGridComponent;
  let fixture: ComponentFixture<LiquidGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
