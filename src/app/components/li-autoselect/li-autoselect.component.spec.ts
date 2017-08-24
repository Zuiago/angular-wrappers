import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiAutoselectComponent } from './li-autoselect.component';

describe('LiAutoselectComponent', () => {
  let component: LiAutoselectComponent;
  let fixture: ComponentFixture<LiAutoselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiAutoselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiAutoselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
