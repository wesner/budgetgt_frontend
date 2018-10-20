import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http-service/http-service.service';
import { modelHeader, buttonHeader, modelModalForm } from '../../data-models/components';
import { tableNames, settingsDataTable } from '../../data-models/data-table';
import { ConfirmationDeleteComponent } from '../../components/confirmation-delete/confirmation-delete.component';
import { UtilService } from '../../utilities/util.service';
import { Category } from '../../data-models/catalogs';
import { DataModalComponent } from './data-modal/data-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @ViewChild('dataModal') _modalNew: DataModalComponent;
  @ViewChild('confirmationDelete') _confirmationDelete: ConfirmationDeleteComponent;  
  
  _modelHeader: modelHeader;
  _dataModal: modelModalForm;

  // Lista de items
  _nameItems: tableNames[];
  _listItems: any[];
  _settings: settingsDataTable;


  constructor(
    private _http: HttpService,
    public _util: UtilService
  ){
    this._modelHeader = new modelHeader("Catalogos", "Categorias", "Listado de categorias personales.", 
                        new buttonHeader(true, "Crear nueva categoria", "dark"));

    this._settings = new settingsDataTable("Listado de categorias", "Se muestran todas las categorias personales.", "dark");
    this._nameItems = new Array<tableNames>();
    this._nameItems.push( 
        new tableNames('name', 'Nombre', 'name'), 
        new tableNames('description', 'Descripción', 'description'),
        new tableNames('type', 'Tipo', 'general')
    );

    this._dataModal = new modelModalForm("new");
  }

  ngOnInit(){
    this.getAllItems();
  }

  newCategory():void{
    this._dataModal = new modelModalForm("new");
    this._modalNew.newCategory();    
  }

  editCategory(id:number|string):void{
    this._dataModal = new modelModalForm("edit");
    this._modalNew.editCategory(id);    
  }  

  detailsCategory(id:number|string):void{
    this._dataModal = new modelModalForm("detail");
    this._modalNew.detailsCategory(id);    
  }

  getAllItems():void{
    this._http.getAllCategoriesByUser(this._util.getDataUser("id")).subscribe(
      resp=>{ this._listItems = resp.body; },
      err=>{ this._listItems = []; }
    )
  }

  /**
   * Borra permanente una cuenta
   * @param id 
   */
  confirmationBeforeDelete(_item:Category):void{
    this._confirmationDelete.show(_item.id, _item.name);
  }  
  deleteCategory(id:string|number):void{
    this._confirmationDelete.close();
    this._modalNew.showLoading();
    this._http.deleteCategory(id).subscribe(
      ret=>{
        this._modalNew.closeLoading();
        if(ret.success){
          this._util.budAlert("Eliminación Exitosa", "La cuenta fue borrada con éxito", "success");
          this.getAllItems();
        }
        else{
          this._util.budAlert("Error", "La cuenta no pudo ser borrada, por favor intenta más tarde.", "error");
        }
      },
      err=>{
        this._modalNew.closeLoading();
        this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error");
      }
    )
  }  
}
