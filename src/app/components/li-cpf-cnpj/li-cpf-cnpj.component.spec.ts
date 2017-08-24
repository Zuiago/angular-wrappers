import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCpfCnpjComponent } from './li-cpf-cnpj.component';

describe('LiCpfCnpjComponent', () => {
  let component: LiCpfCnpjComponent;
  let fixture: ComponentFixture<LiCpfCnpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiCpfCnpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCpfCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
