import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiMoneyComponent } from './li-money.component';

describe('LiMoneyComponent', () => {
  let component: LiMoneyComponent;
  let fixture: ComponentFixture<LiMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
