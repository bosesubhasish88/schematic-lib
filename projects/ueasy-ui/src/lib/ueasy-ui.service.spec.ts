import { TestBed } from '@angular/core/testing';

import { UeasyUiService } from './ueasy-ui.service';

describe('UeasyUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UeasyUiService = TestBed.get(UeasyUiService);
    expect(service).toBeTruthy();
  });
});
