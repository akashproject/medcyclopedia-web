import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDiscussionComponent } from './panel-discussion.component';

describe('PanelDiscussionComponent', () => {
  let component: PanelDiscussionComponent;
  let fixture: ComponentFixture<PanelDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
