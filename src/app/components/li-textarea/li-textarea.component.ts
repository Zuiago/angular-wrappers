import {Component, OnInit, Input, Output, EventEmitter, ElementRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServingModule} from '../common/serving.module';

@Component({
  selector: 'app-li-textarea',
  templateUrl: './li-textarea.component.html',
  styleUrls: ['./li-textarea.component.css']
})
export class LiTextareaComponent implements OnInit {

  /*Variáveis recebidas*/
  @Input() colClass: String;
  @Input() label: String;
  @Input() id: String;
  @Input() model: String;
  @Input() obrigatorio: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: String;
  @Input() cols: number;
  @Input() maxlength: number;
  @Input() rows: number;

  /*Funções recebidas*/
  @Output() onEnter = new EventEmitter();

  constructor(private _elementRef: ElementRef) {

  }

  ngOnInit() {
  }

  /**
   * chama função definida na directiva para o botão enter
   */
  fireOnEnterEvent(evt) {
    this.onEnter.next();
  }
}

@NgModule({
  imports: [ServingModule],
  exports: [LiTextareaComponent],
  declarations: [LiTextareaComponent]
})
export class LiTextareaModule { }
