import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { modelModalForm } from '../../../data-models/components';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilService } from '../../../utilities/util.service';
import { HttpService } from '../../../services/http-service/http-service.service';
import { ValidationService } from '../../../utilities/message-error/form-validation/service-form-validation';
import { Category } from '../../../data-models/catalogs';
declare var $:any;

@Component({
  selector: 'data-modal-category',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.css']
})
export class DataModalComponent implements OnInit {
  
  @Input("datamodal") _dataModal: modelModalForm;
  @Output("close") _close = new EventEmitter<any>();

  categoryForm: FormGroup;
  readonlyInput: boolean = true;
  isLoaded: boolean = false;
  textButton: string = "";
  isNew: boolean = true;

  constructor(
    private _fb: FormBuilder,
    public _util: UtilService,
    private _http: HttpService
  ){
    this.categoryForm = _fb.group({
      id: [0, ],
      create_at: ['', ],
      update_at: ['', ],
      user_fk: [0, ],
      name: ['', ValidationService.requiredValidator],
      description: ['', Validators.maxLength(500)],
      icon: ['', ],
      type: ['', ValidationService.selectValidator],
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
  newCategory():void{
    this.categoryForm.reset(new Category());
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
  editCategory(id?:number|string):void{
    this.textButton = "Guardar cambios";
    this.isNew = false;
    if(id){
      this.isLoaded = true;
      this._http.getCategoryById(id).subscribe(
        (ret: Category)=>{
          this.isLoaded = false;
          this.categoryForm.reset(new Category());
          this.categoryForm.setValue(ret);
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
  detailsCategory(id:number|string):void{
    this.isLoaded = true;
    this.readonlyInput = true;
    this.show();
    this._http.getCategoryById(id).subscribe(
      (ret: Category)=>{
        this.isLoaded = false;
        this.categoryForm.reset(new Category());
        this.categoryForm.setValue(ret);
      },
      err=>{ this.isLoaded = false; }
    );
  }



  /**
   * creación envío de formulario
   */
  categoryFormSubmit():void{
    this.showLoading();

    if(this.isNew){
      this.categoryForm.controls.user_fk.setValue(this._util.getDataUser("id"));
      this._http.newCategory(this.categoryForm.value).subscribe(
        ret=>{
          this.closeLoading();
          if(ret.success){
            this.close();
            this._util.budAlert("Creación Exitosa", "La categoria fue creada con éxito", "success");
          }
          else{
            this._util.budAlert("Error", "La categoria no pudo ser creada, por favor intenta más tarde.", "error");
          }
        },
        err=>{
          this.closeLoading();
          this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error");
        }
      );
    }
    else{
      this._http.updateCategory(this.categoryForm.value).subscribe(
        ret=>{
          this.closeLoading();
          if(ret.success){
            this.readonlyInput = true;
            this._dataModal = new modelModalForm("detail");
            this._util.budAlert("Actualización Exitosa", "La categoria fue actualizada con éxito", "success");
          }
          else{
            this._util.budAlert("Error", "La categoria no pudo ser creada, por favor intenta más tarde.", "error");
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
