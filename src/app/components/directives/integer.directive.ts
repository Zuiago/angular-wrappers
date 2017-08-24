import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive({
  selector: '[Integer][ngModel],[Integer][formControl],[Integer][formControlName]',
  providers: []
})
export class IntegerDirective implements OnInit {

  private maxLenght: number;

  @Input('minNumber') minNumber: number;
  @Input('maxNumber') maxNumber: number;

  @Output() ngModelChange  = new EventEmitter();

  constructor(private _elementRef: ElementRef, private ngModel: NgModel) {}

  ngOnInit() {

    if (!this.minNumber){
      this.minNumber = 1;
    }
    this.maxLenght = this.maxNumber ? ('' + this.maxNumber).length : null;

    this._applyValueChanges(this._elementRef.nativeElement.value);
  }

  /** Listener for input target of our directive*/
  @HostListener('input')
  onKeydow(): void {
    if (this._elementRef.nativeElement.value){
      this._applyValueChanges(this._elementRef.nativeElement.value);
    }
  }

  /** It applies the mask in the input and updates the control's value. */
  private _applyValueChanges(inputValue): void {

    if (!inputValue){
      return;
    }

    var strInput = '' + inputValue;
    var transformedInput = strInput.replace(/[^0-9]/g, '');

    if (transformedInput.substring(0, 1) == '0'){
      transformedInput = transformedInput.substring(1)
    }

    if (this.maxLenght && (transformedInput.length > this.maxLenght)){
      transformedInput = transformedInput.substring(0, this.maxLenght)
    }

    if (this.maxNumber > 0 && parseInt(transformedInput) > this.maxNumber){
      transformedInput = transformedInput.substring(0, transformedInput.length-1);
    }
    if (transformedInput.length <= this.maxLenght && parseInt(transformedInput) < this.minNumber){
      transformedInput = transformedInput.substring(0, transformedInput.length-1);
    }

    if (transformedInput !== inputValue) {
      this._elementRef.nativeElement.value = transformedInput;
      this.ngModelChange.emit(this._elementRef.nativeElement.value);
    }
  }

}
