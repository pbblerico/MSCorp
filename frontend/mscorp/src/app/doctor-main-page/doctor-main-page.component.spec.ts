import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMainPageComponent } from './doctor-main-page.component';

describe('DoctorMainPageComponent', () => {
  let component: DoctorMainPageComponent;
  let fixture: ComponentFixture<DoctorMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
