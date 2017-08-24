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


@Component({
  selector: 'li-autoselect',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: LiAutoselectComponent,
    multi: true,
  }],
  templateUrl: './li-autoselect.component.html',
  styleUrls: ['./li-autoselect.component.css']
})
export class LiAutoselectComponent extends ElementFullBase<string>{

  @ViewChild(NgModel) model: NgModel;

  public identifier = `li-autoselect-${identifier++}`;

  public sugestoes: any[];

  /*Variáveis recebidas*/
  @Input() dropdownProperties: string[] = ['codigo'];

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

  constructor(@Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
              @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
              injector: Injector,
              private _elementRef: ElementRef) {
    super(validators, asyncValidators, injector);
  }

  fireOnSelectEvent(evt) {
    this.onSelect.emit();
  }

  dropdownClick(event) {
    this.sugestoes = [];

    // mimic remote call
    setTimeout(() => {
      this.sugestoes = this.options;
    }, 100);
  }

  filterOptions(event) {
    this.sugestoes = [];
    this.sugestoes = this.searchOptions(this.options, event.query.toLowerCase());
  }

  searchOptions(options: any[], query: string): any[] {
    return options.filter(item => {
      return Object.keys(item).some(
        k => {
          if (item[k] != null && item[k] != undefined && typeof item[k] == 'string')
            return item[k].toLowerCase().includes(query.toLowerCase());
          if (item[k] != null && item[k] != undefined && typeof item[k] == 'number')
            return item[k].toString().includes(query);
        }
      );
    });
  }


  dropdownDescription(item) {

    if (item && this.dropdownProperties.length > 0) {
      var retorno = '';

      for (var i = 0; i < this.dropdownProperties.length; i++) {

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
  exports: [LiAutoselectComponent],
  declarations: [LiAutoselectComponent]
})
export class LiAutoselectModule { }
