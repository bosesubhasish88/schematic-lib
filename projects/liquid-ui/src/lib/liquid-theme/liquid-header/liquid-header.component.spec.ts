import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidHeaderComponent } from './liquid-header.component';

describe('LiquidHeaderComponent', () => {
  let component: LiquidHeaderComponent;
  let fixture: ComponentFixture<LiquidHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
