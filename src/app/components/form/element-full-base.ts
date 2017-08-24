import {NgModel} from '@angular/forms';

import {Observable} from 'rxjs';

import {ValueAccessorBase} from './value-accessor';

import {AsyncValidatorArray, message, validate, ValidationResult, ValidatorArray,} from './validate';
import {Injector} from '@angular/core';

export abstract class ElementFullBase<T> extends ValueAccessorBase<T> {
  protected abstract model: NgModel;

  constructor(
    private validators: ValidatorArray,
    private asyncValidators: AsyncValidatorArray,
    private injector: Injector
  ) {
    super(injector);
  }

  protected validateInnerModel(): Observable<ValidationResult> {
    return validate(this.validators, this.asyncValidators)(this.model.control);
  }

  protected get invalid(): Observable<boolean> {
    return Observable.combineLatest(this.validateInnerModel(), this.getErrorsFromOuterModel())
      .map(v => {
        let errors = Object.assign(v[0] || {}, v[1] || {});
        return Object.keys(errors || {}).length > 0;
      });
  }

  private getErrorsFromOuterModel(): Observable<ValidationResult> {
    if (this.control == null || this.control.errors == null) {
      return Observable.of(null);
    }

    return Observable.of(this.control.errors);
  }

  protected get failures(): Observable<Array<string>> {
    return Observable.combineLatest(this.validateInnerModel(), this.getErrorsFromOuterModel())
      .map(v => {
        let errors = Object.assign(v[0] || {}, v[1] || {});
        return Object.keys(errors || {}).map(k => message(errors, k));
      });
  }
}
