import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

/**
 * Returns a funcation that validates a cep value
 */

export function validateCep() {
  return (c: AbstractControl) => {
    const err = {
      pattern: '99999-999'
    };
    return (c.value.toString().trim().length === 8) ? null : err;
  };
}

@Directive({
  selector: '[cepvalidator][ngModel],[cepvalidator][formControl],[cepvalidator][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CepValueValidator), multi: true }
  ]
})
export class CepValueValidator {
  validator: Function;

  validateFn: any = () => {
  }

  constructor() {
    this.validator = validateCep();
  }

  validate(control: AbstractControl): { [validator: string]: string } {
    if (control.value) {
      return this.validator(control);
    }
    return this.validateFn(control);
  }
}
