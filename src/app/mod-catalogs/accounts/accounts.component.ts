import { Component, OnInit, ViewChild } from '@angular/core';
import { modelHeader, buttonHeader, modelModalForm } from '../../data-models/components';
import { FormBuilder } from '@angular/forms';
import { UtilService } from '../../utilities/util.service';
import { HttpService } from '../../services/http-service/http-service.service';
import { ModalNewComponent } from './modal-new/modal-new.component';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfirmationDeleteComponent } from '../../components/confirmation-delete/confirmation-delete.component';
import { tableNames, settingsDataTable } from '../../data-models/data-table';
const DATA = {NAME: "Cuenta", COLOR: "dark"};

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  @ViewChild('modalNew') _modalNew: ModalNewComponent;
  @ViewChild('confirmationDelete') _confirmationDelete: ConfirmationDeleteComponent;
  
  _modelHeader: modelHeader;
  _dataModal: modelModalForm;
  _listAccounts: Observable<HttpResponse<Account[]>>;

  // Lista de items
  _nameItems: tableNames[];
  _listItems: any[];
  _settings: settingsDataTable;

  constructor(
    public _util: UtilService,
    private _http: HttpService,
  ){
    this._modelHeader = new modelHeader("Catalogos", "Cuentas", "Listado de cuentas donde se almacena el dinero.", 
                        new buttonHeader(true, "Crear nueva cuenta", "dark"));
    this._dataModal = new modelModalForm("new");

    this._settings = new settingsDataTable("Listado de cuentas", "Se muestran todas las cuentas activas/inactivas", "dark");
    this._nameItems = new Array<tableNames>();
    this._nameItems.push( 
        new tableNames('name', 'Nombre', 'name'), 
        new tableNames('description', 'Descripción', 'description'), 
        new tableNames('type', 'Tipo', 'general'),
        new tableNames('state', 'Estado', 'state'),
        new tableNames('balance', 'Saldo', 'currency'),
        new tableNames('bank_name', 'Banco', 'general')
    );
  }

  ngOnInit(){
    this.getAllItems();
  }

  /**
   * Crea una nueva cuenta
   */
  newAccount():void{
    this._dataModal = new modelModalForm("new");
    this._modalNew.newAccount();
  }

  editAccount(id:number|string):void{
    this._dataModal = new modelModalForm("edit");
    this._modalNew.editAccount(id);
  }

  detailsAccount(id:number|string):void{
    this._dataModal = new modelModalForm("detail");
    this._modalNew.detailsAccount(id);
  }
  confirmationBeforeDelete(_item:Account):void{
    this._confirmationDelete.show(_item.id, _item.name);
  }

  getAllItems():void{
    this._http.getAllAccountByUser(this._util.getDataUser("id")).subscribe(
      resp=>{
        this._listItems = resp.body;
      },
      err=>{ this._listItems = []; }
    )
  }


  /**
   * Borra permanente una cuenta
   * @param id 
   */
  deleteAccount(id:string|number):void{
    this._confirmationDelete.close();
    this._modalNew.showLoading();
    this._http.deleteAccount(id).subscribe(
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
    );
  }


}