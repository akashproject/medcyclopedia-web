import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadInsListComponent } from './abroad-ins-list.component';

describe('AbroadInsListComponent', () => {
  let component: AbroadInsListComponent;
  let fixture: ComponentFixture<AbroadInsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadInsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadInsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
