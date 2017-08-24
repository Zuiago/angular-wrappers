import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCheckboxComponent } from './li-checkbox.component';

describe('LiCheckboxComponent', () => {
  let component: LiCheckboxComponent;
  let fixture: ComponentFixture<LiCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
