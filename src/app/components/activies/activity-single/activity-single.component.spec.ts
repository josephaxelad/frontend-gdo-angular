import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySingleComponent } from './activity-single.component';

describe('ActivitySingleComponent', () => {
  let component: ActivitySingleComponent;
  let fixture: ComponentFixture<ActivitySingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
