import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdoComponent } from './cdo.component';

describe('CdoComponent', () => {
  let component: CdoComponent;
  let fixture: ComponentFixture<CdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
