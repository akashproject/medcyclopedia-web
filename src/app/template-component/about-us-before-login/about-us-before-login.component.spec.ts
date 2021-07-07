import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBeforeLoginComponent } from './about-us-before-login.component';

describe('AboutUsBeforeLoginComponent', () => {
  let component: AboutUsBeforeLoginComponent;
  let fixture: ComponentFixture<AboutUsBeforeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsBeforeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsBeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
