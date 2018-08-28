import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';
import { HttpService } from '../../services/http-service/http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  viewPassword: false;
  formRegister: FormGroup;
  codeCountry: string;

  constructor(private _formBuild:FormBuilder, public _util:UtilService, private _http: HttpService){
    this.formRegister = _formBuild.group({
      firstName: ['', [ValidationService.requiredValidator]],
      lastName: ['', ],
      email: ['', [ValidationService.requiredValidator, ValidationService.emailValidator]],
      firstPassword: ['', [ValidationService.requiredValidator, Validators.minLength(8)]],
      confimationPassword: ['',],
      country: ['', ],
      agreement: ['', [ValidationService.requiredValidator]]
    });
  }

  ngOnInit(){
    if(screen.height > document.getElementById('divRegister').offsetHeight){
      document.getElementById('divRegister').classList.add("h-100");
    }
    else{ document.getElementById('divRegister').classList.add("vh"); }


    this._http.getCountry().subscribe(
      ret=>{ this.formRegister.controls['country'].setValue(ret.address.country_code); },
      err=>{ this.formRegister.controls['country'].setValue("GT"); }
    );
  }

  vaidationPassword():void{
    if(this.formRegister.controls.confimationPassword.value != this.formRegister.controls.firstPassword.value){
      this.formRegister.controls.confimationPassword.setErrors({"noMach": true});
    }
    else{
      this.formRegister.controls.confimationPassword.valid;
    }
  }




  formRegisterSubmit(){
    console.log(this.formRegister.value)
  }
}
