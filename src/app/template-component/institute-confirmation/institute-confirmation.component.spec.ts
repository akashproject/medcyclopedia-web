import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteConfirmationComponent } from './institute-confirmation.component';

describe('InstituteConfirmationComponent', () => {
  let component: InstituteConfirmationComponent;
  let fixture: ComponentFixture<InstituteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
