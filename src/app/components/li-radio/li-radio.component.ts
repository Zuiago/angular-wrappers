import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'li-radio',
  templateUrl: './li-radio.component.html',
  styleUrls: ['./li-radio.component.css']
})
export class LiRadioComponent implements OnInit {

  @Input() options;
  @Input() colClass: String;
  @Input() label: String;
  @Input() id: String;
  @Input() text: String;
  @Input() value: String;
  @Input() item: String;
  @Input() model: String;
  @Input() obrigatorio: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: String;

  /*Funções recebidas*/
  @Output() onChange = new EventEmitter();

  constructor() {  }

  ngOnInit() {
  }
  /**
   * chama função definida na directiva para o botão enter
   */
  choose(event) {
    this.onChange.emit(event);
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [LiRadioComponent],
  declarations: [LiRadioComponent]
})
export class LiRadioModule { }

