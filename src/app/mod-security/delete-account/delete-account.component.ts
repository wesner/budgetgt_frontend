import { Component, OnInit } from '@angular/core';
import { modelHeader } from '../../data-models/components';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { errorForm } from '../../data-models/errors';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';
import { HttpService } from '../../services/http-service/http-service.service';
import { AESService } from '../../utilities/aes.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  viewPassword: boolean = false;
  _modelHeader: modelHeader;
  deleteAccountForm: FormGroup;
  _error: errorForm;

  constructor(
    private _formBuild:FormBuilder,
    public _util: UtilService,
    private _http: HttpService,
    private _aes: AESService,
    private _router: Router
  ){
    this._modelHeader = new modelHeader("Seguridad", "Borrar cuenta", "Eliminación permanente de la cuenta.");
    this._error = new errorForm({view: false, title: "", message: ""});
    this.deleteAccountForm = this._formBuild.group({
      password: ['', [ValidationService.requiredValidator]]
    });
  }

  ngOnInit() {
  }


  deleteAccountFormSubmit():void{
    document.getElementById("_sendForm").classList.add("is-loading");
    this._http.deleteAccountById({
        id: this._aes._AESencrypt(this._util.getDataUser("id")), 
        password: this._aes._AESencrypt(this.deleteAccountForm.controls.password.value)
      }).subscribe(
      ret=>{
        document.getElementById("_sendForm").classList.remove("is-loading");
        if(ret.success){
          localStorage.clear();
          sessionStorage.clear();
          this._router.navigate(["/login"]);
        }
        else{
          this._error = new errorForm({
            view: true,
            title: "Error",
            message: "Ocurrio un error inesperado, la cuenta no pudo ser eleminada, por favor intenta más tarde."
          });
        }
      },
      err=>{
        document.getElementById("_sendForm").classList.remove("is-loading");
        this._error = new errorForm({
          view: true,
          title: "Error de comunicación",
          message: "Ocurrio un error inesperado, por favor intenta más tarde."
        });
      }
    )
  }
}
