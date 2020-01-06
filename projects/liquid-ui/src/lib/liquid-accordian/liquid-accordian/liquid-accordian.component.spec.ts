import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidAccordianComponent } from './liquid-accordian.component';

describe('LiquidAccordianComponent', () => {
  let component: LiquidAccordianComponent;
  let fixture: ComponentFixture<LiquidAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
