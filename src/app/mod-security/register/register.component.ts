import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  viewPassword: false;
  formRegister: FormGroup;
  codeCountry: string;

  constructor(private _formBuild:FormBuilder, public _util:UtilService){
    this.formRegister = _formBuild.group({
      firstName: ['', [ValidationService.requiredValidator]],
      lastName: ['', ],
      email: ['', [ValidationService.requiredValidator, ValidationService.emailValidator]],
      firstPassword: ['', [ValidationService.requiredValidator, Validators.minLength(8)]],
      confimationPassword: ['', [ValidationService.requiredValidator, Validators.minLength(8)] ],
      country: ['', ],
      agreement: ['', [ValidationService.requiredValidator]]
    });
  }

  ngOnInit(){
    $.getJSON('http://api.wipmania.com/jsonp?callback=?', 
    data=>{ 
      this.formRegister.controls['country'].setValue(data.address.country_code);
    });
  }





  formRegisterSubmit(){
  }
}
