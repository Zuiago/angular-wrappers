import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCnpjComponent } from './li-cnpj.component';

describe('LiCnpjComponent', () => {
  let component: LiCnpjComponent;
  let fixture: ComponentFixture<LiCnpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiCnpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
