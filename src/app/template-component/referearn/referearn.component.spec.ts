import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferearnComponent } from './referearn.component';

describe('ReferearnComponent', () => {
  let component: ReferearnComponent;
  let fixture: ComponentFixture<ReferearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
