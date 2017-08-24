import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiInteiroComponent } from './li-inteiro.component';

describe('LiInteiroComponent', () => {
  let component: LiInteiroComponent;
  let fixture: ComponentFixture<LiInteiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiInteiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiInteiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
