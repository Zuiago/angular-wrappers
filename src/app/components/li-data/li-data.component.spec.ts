import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiDataComponent } from './li-data.component';

describe('LiDataComponent', () => {
  let component: LiDataComponent;
  let fixture: ComponentFixture<LiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
