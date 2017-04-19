import { Component, Input, Output, OnInit, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


/**
 * ClearableInputComponent
 *
 * Input control with clear button to clear the input value.
 * Implements ControlValueAccessor for compatibility with Angular Forms API
 */
@Component({
  selector: 'supre-clearable-input',
  templateUrl: './clearable-input.component.html',
  styleUrls: ['./clearable-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClearableInputComponent),
      multi: true
    }
  ]
})
export class ClearableInputComponent implements ControlValueAccessor {

  @Input() value = '';
  @Input() search = false;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  private propagateChange = (_: any) => { };

  constructor() { }

  /**
   * onChange
   * Value change handler
   *
   */
  private onChange(value) {
    if(this.value === value)
      return;

    this.value = value;
    this.valueChange.emit(this.value);
    this.propagateChange(this.value);
  }

  /**
   * ControlValueAccessor Implementation for Angular Forms API compatibility
   *
   */
  public writeValue(value: any) {
    console.log("value 1");
    if (value && !this.value === value) {
      console.log("value 2");
      this.value = value;
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  // not used, used for touch input
  public registerOnTouched() { }


}
