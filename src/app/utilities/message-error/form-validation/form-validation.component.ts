import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './service-form-validation';

@Component({
  selector: 'message-error',
  template: `<div *ngIf="errorMessage !== null" class="invalid-feedback">{{errorMessage}}</div>`
})
export class FormValidationComponent{
  @Input() control: FormControl;  
  constructor(){ }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
