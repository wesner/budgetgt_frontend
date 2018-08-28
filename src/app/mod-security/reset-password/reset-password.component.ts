import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, public _util: UtilService){
    this.resetForm = _formBuilder.group({
      email: ['', [ValidationService.requiredValidator, ValidationService.emailValidator]]
    });
  }

  ngOnInit() {
  }

  resetFormSubmit():void{
    console.log(this.resetForm.value)
  }

}
