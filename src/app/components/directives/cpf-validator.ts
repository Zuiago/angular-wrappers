import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import * as BrV from 'br-validations';

/**
 * Returns a function that validates a cpf or cpnf value
 */

export function validateCpf() {
  return (c: AbstractControl) => {
    //TODO TALVEZ CRIAR CLASSE DE RETORNO PARA VALIDACOES COM ATRIBUTOS PATTERN E VALIDATION
    const err = {
      validator :[
        {
          pattern: '999.999.999-99',
        },
        {
          validation: 'Cpf',
        }
      ]
    };
    if (c.value.length < 11){
      return err.validator[0];
    }
    return !BrV.cpf.validate(c.value) ? err.validator[1] : null;
  }
}

@Directive({
  selector: '[cpfvalidator][ngModel],[cpfvalidator][formControl],[cpfvalidator][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CpfValueValidator), multi: true }
  ]
})

export class CpfValueValidator {
  validator: Function;

  validateFn: any = () => {
  };

  constructor() {
    this.validator = validateCpf();
  }

  validate(control: AbstractControl): { [validator: string]: string } {
    if(control.value){
      return this.validator(control);
    }
    return this.validateFn(control);
  }
}
