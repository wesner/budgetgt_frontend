import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { modelHeader } from '../../data-models/components';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../utilities/message-error/form-validation/service-form-validation';
import { UtilService } from '../../utilities/util.service';
import { HttpService } from '../../services/http-service/http-service.service';
import { AESService } from '../../utilities/aes.service';
import { Country } from '../../data-models/catalogs';
import { Observable } from 'rxjs';
import { errorForm } from '../../data-models/errors';
declare var $:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoaded: boolean = false;
  countries$:Observable<HttpResponse<Country[]>>;
  _modelHeader: modelHeader;
  formUser: FormGroup;
  _error: errorForm;
  _days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  
  constructor(
    private _formBuild:FormBuilder,
    public _util: UtilService,
    private _http: HttpService,
    private _aes: AESService
  ){
    this._modelHeader = new modelHeader("Seguridad", "Perfil", "Configuraciones en el perfil del usuario.");
    this._error = new errorForm({view: false, title: "", message: ""});
    this.formUser = this._formBuild.group({
      id: ['', ],
      create_at: [{value: '', disabled: true}, ],
      update_at: [{value: '', disabled: true}, ],
      first_name: ['', [ValidationService.requiredValidator]],
      last_name: ['', ],
      email: ['', [ValidationService.requiredValidator, ValidationService.emailValidator]],
      country_fk: [0, ValidationService.selectValidator],
      restart_day: [0, ValidationService.selectValidator]
    });    
  }

  ngOnInit() {
    $('._popover').popover({ trigger: 'hover', placement: 'left', animation: true });
    this.countries$ = this._http.getAllCountries();
    this.getDataForUser();
  }


  getDataForUser(){
    this.isLoaded = false;
    this._http.getUserById(this._util.getDataUser("id")).subscribe(
      ret=>{
        if(ret.success){
          this.formUser.setValue(ret.message);
          this.isLoaded = true;
        }
      },
      err=>{ }
    )
  }

  formUserSubmit(){
    document.getElementById("_sendForm").classList.add("is-loading");
    this._http.updateUser(this.formUser.value).subscribe(
      ret=>{
        document.getElementById("_sendForm").classList.remove("is-loading");
        if(ret.success){
          this._error = new errorForm({view: false, title: "", message: ""});
          this._util.budAlert("Actualización Exitosa", "El perfil fue actualizado con éxito", "success");
        }
        else{
          this._error = new errorForm({
            view: true,
            title: "Error",
            message: ret.code==1062?"Esté correo ya existe en el sistema":"Ocurrio un error inesperado, por favor intenta más tarde."
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
    );
  }

}