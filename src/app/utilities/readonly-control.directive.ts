import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[readonlyControl]'
})
export class readonlycontroldirective{
  @Input() set disableControl(condition: boolean) {
    const action = condition ? 'readonly' : '';
    this.ngControl.control[action]();
  }
  constructor(private ngControl:NgControl) {}
}
