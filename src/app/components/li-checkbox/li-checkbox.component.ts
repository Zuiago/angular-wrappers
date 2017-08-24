import {Component, NgModule, OnInit} from '@angular/core';
import {ServingModule} from '../common/serving.module';

@Component({
  selector: 'li-checkbox',
  templateUrl: './li-checkbox.component.html',
  styleUrls: ['./li-checkbox.component.css']
})
export class LiCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [ServingModule],
  exports: [LiCheckboxComponent],
  declarations: [LiCheckboxComponent]
})
export class LiCheckboxModule { }
