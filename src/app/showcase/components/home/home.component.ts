import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectItem} from 'primeng/primeng';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public index;
  public minDate: Date = new Date();
  public data: Date;

  reactiveForm: FormGroup;

  public itens = [
    {id: 1, descricao: 'Primeiro'},
    {id: 2, descricao: 'Segundo'},
    {id: 3, descricao: 'Terceiro'}];

  brands: any[] = [
    {codigo: 0, descricao: 'Audi'},
    {codigo: 1, descricao: 'BMW'},
    {codigo: 2, descricao: 'Fiat'},
    {codigo: 3, descricao: 'Ford'},
    {codigo: 4, descricao: 'Honda'},
    {codigo: 5, descricao: 'Jaguar'},
    {codigo: 6, descricao: 'Mercedes'},
    {codigo: 7, descricao: 'Renaul'},
    {codigo: 8, descricao: 'Volvo'},
    {codigo: 9, descricao: 'VW'},
  ];

  public cities: SelectItem[] = [
    {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
    {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
    {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
    {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
    {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
  ];

  /**
   * Variáveis: DEMO COMPONENTES
   */
  public textvariable = '';
  public integervariable = '';
  public cepvariable = '';
  public cpfvariable = '';
  public cnpjvariable = '';
  public cpfcnpjvariable = '';
  public moneyvariable = '';
  public datevariable = '';
  public autoselectvariable = '';
  public autocompletevariable = '';

  constructor(private fb: FormBuilder) {

    this.reactiveForm = fb.group({
      'textvariable': [this.textvariable, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'integervariable': [this.integervariable, [Validators.required]],
      'cepvariable': [this.cepvariable, [Validators.required]],
      'cpfvariable': [this.cpfvariable, [Validators.required]],
      'cnpjvariable': [this.cnpjvariable, [Validators.required]],
      'cpfcnpjvariable': [this.cpfcnpjvariable, [Validators.required]],
      'moneyvariable': [this.moneyvariable, [Validators.required]],
      'datevariable' : [this.datevariable, [Validators.required]],
      'autoselectvariable' : [this.autoselectvariable, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onTabOpen(event) {
    this.index = event.index;
  }

  /////////////////////////////////////////////////////////////
  testeOnEnter(param) {
    console.log(param);
  }

  testeOnFocus(param) {
    console.log(param);
  }

  testeOnBlur(param) {
    console.log(param);
  }

  testeOnClear(param) {
    console.log(param);
  }

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }

  showModalClienteZoom() {
    alert('teste');
  }
}
