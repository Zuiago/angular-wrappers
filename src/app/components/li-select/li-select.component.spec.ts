import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiSelectComponent } from './li-select.component';

describe('LiSelectComponent', () => {
  let component: LiSelectComponent;
  let fixture: ComponentFixture<LiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
