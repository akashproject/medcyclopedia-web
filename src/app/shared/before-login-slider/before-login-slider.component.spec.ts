import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLoginSliderComponent } from './before-login-slider.component';

describe('BeforeLoginSliderComponent', () => {
  let component: BeforeLoginSliderComponent;
  let fixture: ComponentFixture<BeforeLoginSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeLoginSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLoginSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
