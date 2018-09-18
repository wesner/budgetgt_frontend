import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';
import { HttpService } from '../../services/http-service/http-service.service';
import { Observable } from 'rxjs';
import { Country } from '../../data-models/catalogs';
import { AESService } from '../../utilities/aes.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { errorForm } from '../../data-models/errors';
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countries$:Observable<HttpResponse<Country[]>>;
  viewPassword: boolean = false;
  formRegister: FormGroup;
  codeCountry: string;
  _error: errorForm;
  

  constructor(
    private _formBuild:FormBuilder, 
    public _util:UtilService, 
    private _http: HttpService, 
    private _aes: AESService,
    private _router: Router
  ){
    this.formRegister = this._formBuild.group({
      first_name: ['', [ValidationService.requiredValidator]],
      last_name: ['', ],
      email: ['', [ValidationService.requiredValidator, ValidationService.emailValidator]],
      password: ['',],
      firstPassword: ['', [ValidationService.requiredValidator, Validators.minLength(8)]],
      confimationPassword: ['',],
      country_code: ['OT', ],
      agreement: [false, [ValidationService.requiredValidator]]
    });
    this._error = new errorForm();
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
    document.getElementById("_sendForm").classList.add("is-loading");

    this._http.register(this.formRegister.value).subscribe(
      (ret)=>{
        document.getElementById("_sendForm").classList.remove("is-loading");
        if(ret.success){
          localStorage.clear();
          sessionStorage.clear();
          sessionStorage.setItem(this._util.getKeyStorange("user"), ret.message);
          this._router.navigate(["/main/dashboard"]);
        }
        else{
          this._error.view = true;
          this._error.title = "Correo Inválido.";
          this._error.message = "Esté correo ya ha sido utilizado para crear una cuenta en BudgetGT.";
        }
      },
      (err: HttpErrorResponse)=>{
        document.getElementById("_sendForm").classList.remove("is-loading");
        this._error.view = true;
        this._error.title = "Error de comunicación.";
        this._error.message = "Lo sentimos mucho pero ocurrio un error inesperado, por favor intenta luego.";
      }
    )
  }
}
