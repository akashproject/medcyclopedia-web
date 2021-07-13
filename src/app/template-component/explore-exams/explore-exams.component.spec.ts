import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreExamsComponent } from './explore-exams.component';

describe('ExploreExamsComponent', () => {
  let component: ExploreExamsComponent;
  let fixture: ComponentFixture<ExploreExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
