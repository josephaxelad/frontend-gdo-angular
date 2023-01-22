import { TestBed } from '@angular/core/testing';

import { ActivitiesCategoriesService } from './activities-categories.service';

describe('ActivitiesCategoriesService', () => {
  let service: ActivitiesCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitiesCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
