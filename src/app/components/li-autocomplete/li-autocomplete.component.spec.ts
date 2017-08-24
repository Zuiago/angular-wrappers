import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiAutocompleteComponent } from './li-autocomplete.component';

describe('LiAutocompleteComponent', () => {
  let component: LiAutocompleteComponent;
  let fixture: ComponentFixture<LiAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
