import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';
import { HttpService } from '../../services/http-service/http-service.service';
import { AESService } from '../../utilities/aes.service';
import { Router } from '@angular/router';
import { errorForm } from '../../data-models/errors';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  viewPassword = false;
  loginForm: FormGroup;
  user={email:"", password:""};
  _error: errorForm;

  constructor(
    private _formBuilder: FormBuilder,
    public _util: UtilService,
    private _http: HttpService,
    private _aes: AESService,
    private _router: Router
  ){
    this.loginForm = this._formBuilder.group({
      email: ['', [ValidationService.requiredValidator, ValidationService.emailValidator]],
      password: ['', [ValidationService.requiredValidator]],
      remember: [false, ]
    });
    this._error = new errorForm();
  }

  ngOnInit() {
  }


  loginFormSubmit():void{
    this._error = new errorForm();
    document.getElementById("_sendForm").classList.add("is-loading");
    this.user.email = this.loginForm.controls.email.value;
    this.user.password = this._aes._AESencrypt(this.loginForm.controls.password.value);

    this._http.login(this.user).subscribe(
      ret=>{
        document.getElementById("_sendForm").classList.remove("is-loading");
        if(ret.success){
          sessionStorage.clear();
          localStorage.clear();
          this.loginForm.controls.remember.value?localStorage.setItem(this._util.getKeyStorange("user"), ret.message):sessionStorage.setItem(this._util.getKeyStorange("user"), ret.message);
          this._router.navigate(["/main/dashboard"]);
        }
        else{
          this._error.view = true;
          this._error.title = "Autenticación fallida.";
          this._error.message = "El correo electronico o la clave no se reconocen.";
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
