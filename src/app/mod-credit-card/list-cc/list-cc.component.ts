import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationDeleteComponent } from 'src/app/components/confirmation-delete/confirmation-delete.component';
import { tableNames, settingsDataTable } from 'src/app/data-models/data-table';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { ActivatedRoute, Router } from '@angular/router';
import { creditCard } from 'src/app/data-models/credit-card';

@Component({
  selector: 'app-list-cc',
  templateUrl: './list-cc.component.html',
  styleUrls: ['./list-cc.component.css']
})
export class ListCCComponent implements OnInit {
  
  @ViewChild('confirmationDelete') _confirmationDelete: ConfirmationDeleteComponent;
  _nameItems: tableNames[];
  _listItems: any[];
  data$: Observable<HttpResponse<any[]>>;
  _settings: settingsDataTable;
  
  constructor(
    private _http: HttpService,
    public _util: UtilService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this._settings = new settingsDataTable("Listado de tarjetas de crédito", "Se muestran todos las tarjetas de crédito personales.", "dark", "creditCard");
    this._nameItems = new Array<tableNames>();
    this._nameItems.push( 
      new tableNames('number', 'Número', 'name'),
      new tableNames('name', 'Nombre', 'general'), 
      new tableNames('issuer', 'Emisor', 'general'),
      // new tableNames('credit_limit', 'Límite de crédito', 'currency'),
      new tableNames('balance', 'Saldo disponible', 'currency'),
      // new tableNames('create_at', 'Fecha de creación', 'general'),
      // new tableNames('update_at', 'Fecha de última actualización', 'general')
    );
  }

  ngOnInit(){
    this.getAllItems();
  }

  detailsCC(id:number){
    this._router.navigate(['../details', id], {relativeTo: this._route});
  }

  editCC(id:number){
    this._router.navigate(['../edit', id], {relativeTo: this._route});
  }
  
  confirmationBeforeDelete(_item:creditCard){
    this._confirmationDelete.show(_item.id, _item.number);
  }

  deleteCC(id:number|string){
    this._confirmationDelete.close();
    this._http.deleteCreditCard(id).subscribe(
      ret=>{
        if(ret.success){
          this._util.budAlert("Eliminación Exitosa", "La tarjeta de crédito fue borrada con éxito", "success");
          this.getAllItems();
        }
        else{ this._util.budAlert("Error", "La tarjeta de crédito fue borrada, por favor intenta más tarde.", "error"); }
      },
      err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
    );
  }

  getAllItems(){
    this._http.getAllCreditCardsByUser(this._util.getDataUser("id")).subscribe(
      resp=>{ this._listItems = resp.body; },
      err=>{ this._listItems = []; }
    );
  }  
}
