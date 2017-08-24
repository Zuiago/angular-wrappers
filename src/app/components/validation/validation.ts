import {Component, Input} from '@angular/core';

@Component({
  selector: 'validation',
  template: `
    <div class="validation">
      <div *ngFor="let message of messages">{{message}}</div>
    </div>
  `,
  styles: [`
    .validation {
      font-size: 10.5px;
      color: crimson;
      margin-top: 2.5px;
      margin-left: 2px;
    }`
  ]
})
export class ValidationComponent {
  @Input() messages: Array<string>;
}
