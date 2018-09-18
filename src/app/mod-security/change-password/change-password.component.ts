import { Component, OnInit } from '@angular/core';
import { modelHeader } from '../../data-models/components';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { errorForm } from '../../data-models/errors';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';
import { HttpService } from '../../services/http-service/http-service.service';
import { AESService } from '../../utilities/aes.service';
declare var $:any;
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  viewPassword0: boolean = false;
  viewPassword: boolean = false;
  _modelHeader: modelHeader;
  formChangePass: FormGroup;
  _error: errorForm;

  constructor(
    private _formBuild:FormBuilder,
    public _util: UtilService,
    private _http: HttpService,
    private _aes: AESService  
  ){
    this._modelHeader = new modelHeader("Seguridad", "Cambio de contraseña", "Cambio de la contraseña del usuario.");
    this._error = new errorForm({view: false, title: "", message: ""});
    this.formChangePass = this._formBuild.group({
      old_password: ['', ValidationService.requiredValidator],
      new_password: ['', [ValidationService.requiredValidator, Validators.minLength(8)]],
      confirmation_new_password: ['', ValidationService.requiredValidator]
    });
  }
  
  
  ngOnInit(){
    $('._popover').popover({ trigger: 'hover', placement: 'left', animation: true });
  }


  /**
   * Valida que la clave anterior y la nueva no sean iguales
   */
  validationEqualsPassword():void{
    if(this.formChangePass.controls.new_password.value == this.formChangePass.controls.old_password.value){
      this.formChangePass.controls.new_password.setErrors({"invalidEquals": true});
    }
    else{
      this.formChangePass.controls.new_password.valid;
    }
  }
  /**
   * Valida que ambas claves ingresadas sean iguales
   */
  vaidationPassword():void{
    if(this.formChangePass.controls.confirmation_new_password.value != this.formChangePass.controls.new_password.value){
      this.formChangePass.controls.confirmation_new_password.setErrors({"noMach": true});
    }
    else{
      this.formChangePass.controls.confirmation_new_password.valid;
    }
  }

  /**
   * Envio de los datos al servidor para su actualización.
   */
  formChangePassSubmit(){
    document.getElementById("_sendForm").classList.add("is-loading");
    let changePass = new modelChangePass(
      parseInt(this._util.getDataUser("id")),
      this._aes._AESencrypt(this.formChangePass.controls.old_password.value),
      this._aes._AESencrypt(this.formChangePass.controls.new_password.value)
    );

    this._http.updatePassword(changePass).subscribe(
      ret=>{
        document.getElementById("_sendForm").classList.remove("is-loading");
        if(ret.success){
          this._error = new errorForm({view: false, title: "", message: ""});
          this._util.budAlert("Actualización Exitosa", "El contraseña fue actualizado con éxito", "success");
        }
        else{
          this._error = new errorForm({
            view: true,
            title: "Contraseña inválida",
            message: ret.code==0?"La clave actual no coincide.":"Ocurrio un error inesperado, por favor intenta más tarde."
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

class modelChangePass{
  constructor(
    public id: number = 0,
    public old_password: string = "",
    public new_password: string = ""
  ){}
} 