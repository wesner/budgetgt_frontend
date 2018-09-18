import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { modelModalForm } from '../../../data-models/components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../../../utilities/util.service';
import { ValidationService } from '../../../utilities/message-error/form-validation/service-form-validation';
import { Account } from '../../../data-models/catalogs';
import { HttpService } from '../../../services/http-service/http-service.service';
declare var  $:any;

@Component({
  selector: 'modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.css']
})
export class ModalNewComponent implements OnInit, OnChanges {
  
  @Input("datamodal") _dataModal: modelModalForm;
  @Output("close") _close = new EventEmitter<any>();

  accountForm: FormGroup;
  readonlyInput: boolean = true;
  isLoaded: boolean = false;
  textButton: string = "";
  isNew: boolean = true;

  constructor(
    private _fb: FormBuilder,
    public _util: UtilService,
    private _http: HttpService
  ){
    this.accountForm = _fb.group({
      id: ['', ],
      create_at: ['', ],
      update_at: ['', ],
      user_fk: ['', ],
      name: ['', ValidationService.requiredValidator],
      description: ['', Validators.maxLength(500)],
      type: ['', ValidationService.selectValidator],
      state: [true, ],
      balance: ['', [ValidationService.requiredValidator, ValidationService.currencyValidator]],
      is_erasable: [true, ],
      bank_name: ['', ]
    })
  }

  ngOnInit(){}
  ngOnChanges(){}
  

  /* Modal Options */
  show(){$('#modalNew').modal({ backdrop: 'static', keyboard: false, focus: true, show: true }); }
  close(){ 
    $('#modalNew').modal('hide');
    this._close.emit("close");
  }
  showLoading(){ 
    $('#modalLoading').modal({ 
      backdrop: 'static', 
      keyboard: false, 
      focus: true, 
      show: true 
    });
  }
  closeLoading(){ 
    $('#modalLoading').modal('hide'); 
  }




  /**
   * Crea una nueva cuenta
   */
  newAccount():void{
    this.accountForm.reset(new Account());
    this.textButton = "Crear ";
    this.readonlyInput = false;
    this.isLoaded = false;
    this.isNew = true;
    this.show();
  }

  /**
   * Muestra el modal para editar una cuenta
   * @param id 
   */
  editAccount(id?:number|string):void{
    this.textButton = "Guardar cambios";
    this.isNew = false;
    if(id){
      this.isLoaded = true;
      this._http.getAccountById(id).subscribe(
        (ret: Account)=>{
          this.isLoaded = false;
          this.accountForm.reset(new Account());
          this.accountForm.setValue(ret);
          this.readonlyInput = false;
          this.show();
        },
        err=>{ this.isLoaded = false; }
      );      
    }
    else{
      this._dataModal = new modelModalForm("edit");
      this.readonlyInput = false;
    }
  }

  /**
   * Muestra el modal con los detalles de la cuenta
   * @param id 
   */
  detailsAccount(id:number|string):void{
    this.isLoaded = true;
    this.readonlyInput = true;
    this.show();
    this._http.getAccountById(id).subscribe(
      (ret: Account)=>{
        this.isLoaded = false;
        this.accountForm.reset(new Account());
        this.accountForm.setValue(ret);
      },
      err=>{ this.isLoaded = false; }
    );
  }



  /**
   * creación envío de formulario
   */
  accountFormSubmit():void{
    this.showLoading();

    if(this.isNew){
      this.accountForm.controls.user_fk.setValue(this._util.getDataUser("id"));
      this._http.newAccount(this.accountForm.value).subscribe(
        ret=>{
          this.closeLoading();
          if(ret.success){
            this.close();
            this._util.budAlert("Creación Exitosa", "La cuenta fue creada con éxito", "success");
          }
          else{
            this._util.budAlert("Error", "La cuenta no pudo ser creada, por favor intenta más tarde.", "error");
          }
        },
        err=>{
          this.closeLoading();
          this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error");
        }
      );
    }
    else{
      this._http.updateAccount(this.accountForm.value).subscribe(
        ret=>{
          this.closeLoading();
          if(ret.success){
            this.readonlyInput = true;
            this._dataModal = new modelModalForm("detail");
            this._util.budAlert("Actualización Exitosa", "La cuenta fue actualizada con éxito", "success");
          }
          else{
            this._util.budAlert("Error", "La cuenta no pudo ser creada, por favor intenta más tarde.", "error");
          }          
        },
        err=>{
          this.closeLoading();
          this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error");
        }
      );
    }
  }
}
