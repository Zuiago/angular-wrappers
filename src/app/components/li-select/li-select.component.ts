import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {SelectItem} from 'primeng/components/common/selectitem';
import {ServingModule} from '../common/serving.module';

@Component({
  selector: 'li-select',
  templateUrl: './li-select.component.html',
  styleUrls: ['./li-select.component.css']
})
export class LiSelectComponent implements OnInit {

  /*Variáveis recebidas*/
  @Input() colClass: String;
  @Input() label: String;
  @Input() id: String;
  @Input() model: String;
  @Input() obrigatorio: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: String;
  @Input() autoWidth: boolean;
  @Input() required: boolean;
  @Input() options: SelectItem[];
  @Input() selectedOptions;

  /*Funções recebidas*/
  @Output() onChange = new EventEmitter();
  @Output() onFocus = new EventEmitter();
  @Output() onBlur = new EventEmitter();

  constructor() {  }

  ngOnInit() {  }

  /**
   * chama função definida na directiva para o botão enter
   */
  onInputOnChange(event){
    this.onChange.emit();
  }

  /**
   * chama função definida na directiva quando usuario pressiona enter
   */
  onInputEnter() {
    this.onChange.emit();
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

@NgModule({
  imports: [ServingModule],
  exports: [LiSelectComponent],
  declarations: [LiSelectComponent]
})
export class LiSelectModule { }

