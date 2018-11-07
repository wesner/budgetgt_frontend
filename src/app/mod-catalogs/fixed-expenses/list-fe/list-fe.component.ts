import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationDeleteComponent } from 'src/app/components/confirmation-delete/confirmation-delete.component';
import { tableNames, settingsDataTable } from 'src/app/data-models/data-table';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FixedExpense } from 'src/app/data-models/catalogs';

@Component({
  selector: 'app-list-fe',
  templateUrl: './list-fe.component.html',
  styleUrls: ['./list-fe.component.css']
})
export class ListFeComponent implements OnInit {

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
    this._settings = new settingsDataTable("Listado de Egresos fijos", "Se muestran todos las egresos fijos personales.", "danger", "fixedExpense");
    this._nameItems = new Array<tableNames>();
    this._nameItems.push( 
        new tableNames('name', 'Nombre', 'name'), 
        new tableNames('description', 'Descripción', 'description'),
        new tableNames('amount', 'Monto', 'currency'),
        new tableNames('create_at', 'Fecha de creación', 'general'),
        new tableNames('update_at', 'Fecha de actualización', 'general')
    );
  }

  ngOnInit(){
    this.getAllItems();
  }


  detailsFE(id:any){
    this._router.navigate(['../details', id], {relativeTo: this._route});
  }

  editFE(id:number){
    this._router.navigate(['../edit', id], {relativeTo: this._route});
  }

  confirmationBeforeDelete(_item:FixedExpense){
    this._confirmationDelete.show(_item.id, _item.name);
  }

  deleteFE(id:number|string){
    this._confirmationDelete.close();
    this._http.deleteFixedExpense(id).subscribe(
      ret=>{
        if(ret.success){
          this._util.budAlert("Eliminación Exitosa", "El egreso fijo fue borrado con éxito", "success");
          this.getAllItems();
        }
        else{ this._util.budAlert("Error", "El egreso fijo no pudo ser borrado, por favor intenta más tarde.", "error"); }
      },
      err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
    );
  }

  getAllItems(){
    this._http.getAllFixedExpensesByUser(this._util.getDataUser("id")).subscribe(
      resp=>{ this._listItems = resp.body; },
      err=>{ this._listItems = []; }
    );
  }
}