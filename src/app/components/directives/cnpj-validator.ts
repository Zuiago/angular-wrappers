import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import * as BrV from 'br-validations';

/**
 * Returns a function that validates a cpf or cpnf value
 */

export function validateCnpj() {
  return (c: AbstractControl) => {
    //TODO TALVEZ CRIAR CLASSE DE RETORNO PARA VALIDACOES COM ATRIBUTOS PATTERN E VALIDATION
    const err = {
      validator :[
        {
          pattern: '99.999.999/9999-99',
        },
        {
          validation: 'Cnpj',
        }
      ]
    };

    if (c.value.length < 14){
      return err.validator[0];
    }

    if (c.value.length === 14) {
      return !BrV.cnpj.validate(c.value) ? err.validator[1] : null;
    }
  }
}

@Directive({
  selector: '[cnpjvalidator][ngModel],[cnpjvalidator][formControl],[cnpjvalidator][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CnpjValueValidator), multi: true }
  ]
})

export class CnpjValueValidator {
  validator: Function;

  validateFn: any = () => {
  };

  constructor() {
    this.validator = validateCnpj();
  }

  validate(control: AbstractControl): { [validator: string]: string } {
    if(control.value){
      return this.validator(control);
    }
    return this.validateFn(control);
  }
}
