import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduAssistanceComponent } from './edu-assistance.component';

describe('EduAssistanceComponent', () => {
  let component: EduAssistanceComponent;
  let fixture: ComponentFixture<EduAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduAssistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
