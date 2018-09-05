import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';
import { HttpService } from '../../services/http-service/http-service.service';
import { Observable } from 'rxjs';
import { Country } from '../../data-models/catalogs';
import { AESService } from '../../utilities/aes.service';
import { HttpErrorResponse } from '@angular/common/http';
import { codeErrorMySql } from '../../data-models/code-errors-mysql';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countries$:Observable<Country[]>;
  viewPassword: false;
  formRegister: FormGroup;
  codeCountry: string;


  constructor(private _formBuild:FormBuilder, public _util:UtilService, private _http: HttpService, private _aes: AESService){
    this.formRegister = _formBuild.group({
      first_name: ['', [ValidationService.requiredValidator]],
      last_name: ['', ],
      email: ['', [ValidationService.requiredValidator, ValidationService.emailValidator]],
      password: ['',],
      firstPassword: ['', [ValidationService.requiredValidator, Validators.minLength(8)]],
      confimationPassword: ['',],
      country_code: ['OT', ],
      agreement: [false, [ValidationService.requiredValidator]]
    });
  }

  ngOnInit(){
    this.countries$ = this._http.getAllCountries();
    
    /**
     * Si la pantalla es mayor al div de registro coloca el 100VH en el div de registro
     */
    if(screen.height > document.getElementById('divRegister').offsetHeight){ document.getElementById('divRegister-content').classList.add("vh"); }
    else{ document.getElementById('divRegister-content').classList.add("h-100"); }

    $('._popover').popover({ trigger: 'hover', placement: 'left', animation: true });

    /**
     * Obtiene el pais del usuario
     */
    $.getJSON('http://api.wipmania.com/jsonp?callback=?',
      ret=>{ this.formRegister.controls['country_code'].setValue(ret.address.country_code); },
      err=>{ this.formRegister.controls['country_code'].setValue("OT");}
    );
  }



  /**
   * Valida que ambas claves ingresadas sean iguales
   */
  vaidationPassword():void{
    if(this.formRegister.controls.confimationPassword.value != this.formRegister.controls.firstPassword.value){
      this.formRegister.controls.confimationPassword.setErrors({"noMach": true});
    }
    else{
      this.formRegister.controls.confimationPassword.valid;
    }
  }



  /**
 * Enviío
 */
  formRegisterSubmit(){
    this.formRegister.controls.password.setValue(this._aes._AESencrypt(this.formRegister.controls.firstPassword.value));

    this._http.register(this.formRegister.value).subscribe(
      (ret)=>{
        if(ret.success){
        }
        else{
          // console.log(codeErrorMySql[ret.code]['message'])
        }
      },
      (err: HttpErrorResponse)=>{
        console.log(err);
      }
    )
    
  }
}
