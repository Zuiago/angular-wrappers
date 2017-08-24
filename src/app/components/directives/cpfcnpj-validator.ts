import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import * as BrV from 'br-validations';

/**
 * Returns a function that validates a cpf or cpnf value
 */

export function validateCpfCnpj() {
  return (c: AbstractControl) => {
    //TODO TALVEZ CRIAR CLASSE DE RETORNO PARA VALIDACOES COM ATRIBUTOS PATTERN E VALIDATION
    const err = {
      validator :[
        {
          pattern: '999.999.999-99 ou 99.999.999/9999-99',
        },
        {
          validation: 'Cpf ou Cnpj',
        }
      ]
    };

    if (c.value.length < 11 || (c.value.length > 11 && c.value.length < 14)){
      return err.validator[0];
    }

    if (c.value.length === 11) {
      return !BrV.cpf.validate(c.value) ? err.validator[1] : null;
    }

    if (c.value.length === 14) {
      return !BrV.cnpj.validate(c.value) ? err.validator[1] : null;
    }
  }
}

@Directive({
  selector: '[cpfcnpjvalidator][ngModel],[cpfcnpjvalidator][formControl],[cpfcnpjvalidator][formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CpfCnpjValueValidator), multi: true }
  ]
})

export class CpfCnpjValueValidator {
  validator: Function;

  validateFn: any = () => {
  };

  constructor() {
    this.validator = validateCpfCnpj();
  }

  validate(control: AbstractControl): { [validator: string]: string } {
    if(control.value){
      return this.validator(control);
    }
    return this.validateFn(control);
  }
}
