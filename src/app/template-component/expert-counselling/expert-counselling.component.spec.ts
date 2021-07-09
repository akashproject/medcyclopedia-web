import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCounsellingComponent } from './expert-counselling.component';

describe('ExpertCounsellingComponent', () => {
  let component: ExpertCounsellingComponent;
  let fixture: ComponentFixture<ExpertCounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertCounsellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
