///<reference path="../../../components/li-select/li-select.component.ts"/>
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {ButtonModule} from 'primeng/components/button/button';
import {LiCepModule} from '../../../components/li-cep/li-cep.component';
import {LiCheckboxModule} from '../../../components/li-checkbox/li-checkbox.component';
import {LiCpfModule} from '../../../components/li-cpf/li-cpf.component';
import {LiCnpjModule} from '../../../components/li-cnpj/li-cnpj.component';
import {LiCpfCnpjModule} from '../../../components/li-cpf-cnpj/li-cpf-cnpj.component';
import {LiDataModule} from '../../../components/li-data/li-data.component';
import {LiRadioModule} from '../../../components/li-radio/li-radio.component';
import {LiSelectModule} from '../../../components/li-select/li-select.component';
import {LiTextModule} from '../../../components/li-text/li-text.component';
import {LiInteiroModule} from '../../../components/li-inteiro/li-inteiro.component';
import {LiTextareaModule} from '../../../components/li-textarea/li-textarea.component';
import {LiMoneyModule} from '../../../components/li-money/li-money.component';
import {LiAutoselectModule} from '../../../components/li-autoselect/li-autoselect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    AccordionModule,
    ButtonModule,
    LiCepModule,
    LiCheckboxModule,
    LiCpfModule,
    LiCnpjModule,
    LiCpfCnpjModule,
    LiDataModule,
    LiRadioModule,
    LiSelectModule,
    LiTextModule,
    LiTextareaModule,
    LiInteiroModule,
    LiMoneyModule,
    LiAutoselectModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
