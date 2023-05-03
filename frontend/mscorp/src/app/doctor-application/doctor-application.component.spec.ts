import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorApplicationComponent } from './doctor-application.component';

describe('DoctorApplicationComponent', () => {
  let component: DoctorApplicationComponent;
  let fixture: ComponentFixture<DoctorApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
