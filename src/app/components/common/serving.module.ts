import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ValidationComponent} from '../validation/validation';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import {CalendarModule} from 'primeng/components/calendar/calendar';


@NgModule({
  imports: [CommonModule],
  declarations: [ValidationComponent],
  exports: [
    ValidationComponent,
    CommonModule, FormsModule, InputTextModule, ButtonModule, AutoCompleteModule, CalendarModule
  ]
})
export class ServingModule { }
