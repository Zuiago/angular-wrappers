import {Component, EventEmitter, Inject, Injector, Input, NgModule, Optional, Output, ViewChild} from '@angular/core';
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';
import {ElementFullBase} from '../form/element-full-base';
import {ServingModule} from '../common/serving.module';

@Component({
  selector: 'li-data',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: LiDataComponent,
    multi: true,
  }],
  templateUrl: './li-data.component.html',
  styleUrls: ['./li-data.component.css']
})
export class LiDataComponent extends ElementFullBase<Date>{

  @ViewChild(NgModel) model: NgModel;

  public identifier = `li-data-${identifier++}`;

  /*Variáveis recebidas*/
  @Input() colClass: string;

  @Input() label: string;

  @Input() type = 'text';

  @Input() id: string;

  @Input() name: string;

  @Input() disabled: boolean;

  @Input() readonly: boolean;

  @Input() placeholder: string;

  @Input() minDate: Date;

  @Input() maxDate: Date;

  @Input() dateFormat: string;

  @Input() showIcon: boolean;

  @Input() showOnFocus: boolean;

  // exibir campos: mês e ano para pesquisa
  @Input() yearNavigator: boolean;
  @Input() monthNavigator: boolean;
  @Input() yearRange: string;

  /**
   * Para utilização do Locale, formatação do calendário em português.
   */
  ptBr: any;

  /*Funções recebidas*/
  @Output() onFocus = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onSelect = new EventEmitter();

  constructor(@Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
              @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
              injector: Injector) {
    super(validators, asyncValidators, injector);
  }

  ngOnInit() {
    this.ptBr = {
      firstDayOfWeek: 1,
      dayNames: [ 'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado' ],
      dayNamesShort: [ 'dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb' ],
      dayNamesMin: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
      monthNames: [ 'janeiro', 'fevereiro', 'março', 'abril',
        'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ],
      monthNamesShort: [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez' ]
    };
  }

  onInputSelect(event) {
    this.onSelect.next(event);
    console.log(event);
  }
  /**
   * chama função definida na directiva quando obtém foco
   */
  onInputFocus(event) {
    this.onFocus.emit(event);
  }

  /**
   * chama função definida na directiva quando perde o foco
   */
  onInputBlur(event) {
    this.onBlur.emit(event);
  }
}

let identifier = 0;

@NgModule({
  imports: [ServingModule],
  exports: [LiDataComponent],
  declarations: [LiDataComponent]
})
export class LiDataModule { }


