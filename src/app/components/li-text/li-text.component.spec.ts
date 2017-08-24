import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiTextComponent } from './li-text.component';

describe('LiTextComponent', () => {
  let component: LiTextComponent;
  let fixture: ComponentFixture<LiTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
