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
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgForm, NgModel} from '@angular/forms';
import {ElementFullBase} from '../form/element-full-base';
import {CpfDirective} from '../directives/cpf.directive';
import {ServingModule} from '../common/serving.module';
import {CpfValueValidator} from '../directives/cpf-validator';

@Component({
  selector: 'li-cpf',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: LiCpfComponent,
    multi: true,
  }],
  templateUrl: './li-cpf.component.html',
  styleUrls: ['./li-cpf.component.css']
})
export class LiCpfComponent extends ElementFullBase<string>{

  @ViewChild(NgModel) model: NgModel;

  public identifier = `li-cpf-${identifier++}`;

  /*Variáveis recebidas*/
  @Input() colClass: string;

  @Input() label: string;

  @Input() type = 'text';

  @Input() id: string;

  @Input() name: string;

  @Input() disabled: boolean;

  @Input() readonly: boolean;

  @Input() placeholder: string;

  @Input() showClean: boolean;

  @Input() additionalButton: boolean;

  @Input() additionalButtonIcon: string;

  /*Funções recebidas*/
  @Output() onEnter = new EventEmitter();
  @Output() onCleanClick = new EventEmitter();
  @Output() onAdditionaButtonClick = new EventEmitter();

  @ViewChild('formText') public formText: NgForm;

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
  exports: [LiCpfComponent, CpfDirective, CpfValueValidator],
  declarations: [LiCpfComponent, CpfDirective, CpfValueValidator]
})
export class LiCpfModule { }
