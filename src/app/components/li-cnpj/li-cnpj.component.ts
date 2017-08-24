import {
  Component,
  ElementRef,
  EventEmitter,
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
import {CnpjDirective} from '../directives/cnpj.directive';
import {CnpjValueValidator} from '../directives/cnpj-validator';

@Component({
  selector: 'li-cnpj',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: LiCnpjComponent,
    multi: true,
  }],
  templateUrl: './li-cnpj.component.html',
  styleUrls: ['./li-cnpj.component.css']
})
export class LiCnpjComponent extends ElementFullBase<string> {

  @ViewChild(NgModel) model: NgModel;

  public identifier = `li-cnpj-${identifier++}`;

  /*Variáveis recebidas*/
  @Input() colClass: string;

  @Input() label: string;

  @Input() type= 'text';

  @Input() id: string;

  @Input() name: string;

  @Input() disabled: boolean;

  @Input() readonly: boolean;

  @Input() placeholder: string;

  @Input() showClean: boolean;

  @Input() additionalButton: boolean;

  @Input() additionalButtonIcon: String;

  /*Funções recebidas*/
  @Output() onEnter = new EventEmitter();
  @Output() onCleanClick = new EventEmitter();
  @Output() onAdditionaButtonClick = new EventEmitter();

  constructor(@Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
              @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
              injector: Injector,
              private _elementRef: ElementRef) {
    super(validators, asyncValidators, injector);
  }


  /**
   * chama função definida na directiva para o botão enter
   */
  fireOnEnterEvent(evt) {
    this.onEnter.emit();
  }

  /**
   * chama função definida na directiva para o botão limpar
   */
  fireCleanEvent(evt) {
    this._elementRef.nativeElement.getElementsByTagName('input')[0].value = '';
    if(this.onCleanClick) {
      this.onCleanClick.emit();
    }
  }

  /**
   * chama função definida na directiva para o botão adicional
   */
  fireAdditionalButtonEvent(evt) {
    this.onAdditionaButtonClick.emit();
  }
}

let identifier = 0;

@NgModule({
  imports: [ServingModule],
  exports: [LiCnpjComponent, CnpjDirective, CnpjValueValidator],
  declarations: [LiCnpjComponent, CnpjDirective, CnpjValueValidator]
})
export class LiCnpjModule { }
