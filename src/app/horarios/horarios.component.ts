import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Horario } from './horario.model';

@Component({
  selector: 'tes-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HorariosComponent),
      multi: true
    }
  ]
})
export class HorariosComponent implements OnInit, ControlValueAccessor {

  @Input() horarios: Horario[]

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void{
    this.onChange = fn
  }

  registerOnTouched(fn: any): void{}

  setDisabledState?(isDisabled: boolean): void {}

}
