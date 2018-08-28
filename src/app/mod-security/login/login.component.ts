import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  viewPassword = false;
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, public _util: UtilService){
    this.loginForm = _formBuilder.group({
      email: ['', [ValidationService.requiredValidator, ValidationService.emailValidator]],
      password: ['', [ValidationService.requiredValidator]],
      remember: [false, ]
    });
  }

  ngOnInit() {
  }


  loginFormSubmit():void{
    console.log(this.loginForm.value);
  }

}
