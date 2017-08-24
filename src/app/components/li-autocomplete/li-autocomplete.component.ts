import {
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Injector,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild
} from '@angular/core';
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';
import {ElementFullBase} from '../form/element-full-base';
import {ServingModule} from '../common/serving.module';

// creates an ngModel accessor to be used in components providers
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LiAutocompleteComponent),
  multi: true
};

@Component({
  selector: 'li-autocomplete',
  providers: [ CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR ],
  templateUrl: './li-autocomplete.component.html',
  styleUrls: ['./li-autocomplete.component.css']
})
export class LiAutocompleteComponent extends ElementFullBase<string> {

  @ViewChild(NgModel) model: NgModel;

  public identifier = `li-autocomplete-${identifier++}`;

  /*Variáveis recebidas*/
  @Input() dropdownProperties: string[] = ['codigo'];

  @Input() sugestoes: any[] = [];

  @Input() colClass: string;

  @Input() label: string;

  @Input() id: string;

  @Input() name: string;

  @Input() field: string;

  @Input() disabled: boolean;

  @Input() readonly: boolean;

  @Input() placeholder: string;

  @Input() minlenght = 1;

  @Input() size: number;

  @Input() options: any[];

  /*Funções recebidas*/
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  constructor(@Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
              @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
              injector: Injector) {
    super(validators, asyncValidators, injector);
  }

  fireOnSelectEvent($event) {
    this.onSelect.emit();
  }

  fireOnCompleteEvent($event) {
    this.onComplete.emit($event);
  }

  dropdownDescription(item) {

    if (item && this.dropdownProperties.length > 0) {
      let retorno = '';

      for (let i = 0; i < this.dropdownProperties.length; i++) {

        if (i === 0) {

          retorno = retorno.concat(item[this.dropdownProperties[i]]);
        } else {

          retorno = retorno.concat(' - ' + item[this.dropdownProperties[i]]);
        }
      }
      return retorno;
    }
  }
}

let identifier = 0;

@NgModule({
  imports: [ServingModule],
  exports: [LiAutocompleteComponent],
  declarations: [LiAutocompleteComponent]
})
export class LiAutocompleteModule { }
