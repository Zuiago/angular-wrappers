import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiTextareaComponent } from './li-textarea.component';

describe('LiTextareaComponent', () => {
  let component: LiTextareaComponent;
  let fixture: ComponentFixture<LiTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
