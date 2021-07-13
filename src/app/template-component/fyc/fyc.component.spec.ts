import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FycComponent } from './fyc.component';

describe('FycComponent', () => {
  let component: FycComponent;
  let fixture: ComponentFixture<FycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
