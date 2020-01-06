import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UeasyUiComponent } from './ueasy-ui.component';

describe('UeasyUiComponent', () => {
  let component: UeasyUiComponent;
  let fixture: ComponentFixture<UeasyUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeasyUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeasyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
