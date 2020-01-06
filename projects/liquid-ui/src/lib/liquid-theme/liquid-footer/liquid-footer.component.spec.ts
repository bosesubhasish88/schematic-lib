import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidFooterComponent } from './liquid-footer.component';

describe('LiquidFooterComponent', () => {
  let component: LiquidFooterComponent;
  let fixture: ComponentFixture<LiquidFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
