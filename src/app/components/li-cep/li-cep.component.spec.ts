import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCepComponent } from './li-cep.component';

describe('LiCepComponent', () => {
  let component: LiCepComponent;
  let fixture: ComponentFixture<LiCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
