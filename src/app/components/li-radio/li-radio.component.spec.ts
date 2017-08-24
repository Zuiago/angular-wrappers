import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiRadioComponent } from './li-radio.component';

describe('LiRadioComponent', () => {
  let component: LiRadioComponent;
  let fixture: ComponentFixture<LiRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
