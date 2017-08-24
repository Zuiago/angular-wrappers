import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCpfComponent } from './li-cpf.component';

describe('LiCpfComponent', () => {
  let component: LiCpfComponent;
  let fixture: ComponentFixture<LiCpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiCpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
