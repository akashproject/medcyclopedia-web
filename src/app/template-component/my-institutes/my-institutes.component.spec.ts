import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInstitutesComponent } from './my-institutes.component';

describe('MyInstitutesComponent', () => {
  let component: MyInstitutesComponent;
  let fixture: ComponentFixture<MyInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInstitutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
