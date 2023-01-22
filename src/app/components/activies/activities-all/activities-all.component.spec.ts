import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesAllComponent } from './activities-all.component';

describe('ActivitiesAllComponent', () => {
  let component: ActivitiesAllComponent;
  let fixture: ComponentFixture<ActivitiesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
