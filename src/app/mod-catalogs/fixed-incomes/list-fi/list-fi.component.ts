import { Component, OnInit, ViewChild } from '@angular/core';
import { tableNames, settingsDataTable } from 'src/app/data-models/data-table';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FixedIncome } from 'src/app/data-models/catalogs';
import { ConfirmationDeleteComponent } from 'src/app/components/confirmation-delete/confirmation-delete.component';

@Component({
  selector: 'app-list-fi',
  templateUrl: './list-fi.component.html',
  styleUrls: ['./list-fi.component.css']
})
export class ListFIComponent implements OnInit {

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
    this._settings = new settingsDataTable("Listado de ingresos fijos", "Se muestran todos las ingresos fijos personales.", "success");
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


  detailsFI(id:number){
    this._router.navigate(['../details', id], {relativeTo: this._route});
  }

  editFI(id:number){
    this._router.navigate(['../edit', id], {relativeTo: this._route});
  }

  confirmationBeforeDelete(_item:FixedIncome){
    this._confirmationDelete.show(_item.id, _item.name);
  }

  deleteFI(id:number|string){
    this._confirmationDelete.close();
    this._http.deleteFixedIncome(id).subscribe(
      ret=>{
        if(ret.success){
          this._util.budAlert("Eliminación Exitosa", "El ingreso fijo fue borrado con éxito", "success");
          this.getAllItems();
        }
        else{ this._util.budAlert("Error", "El ingreso fijo no pudo ser borrado, por favor intenta más tarde.", "error"); }
      },
      err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
    );
  }

  getAllItems(){
    this._http.getAllFixedIncomesByUser(this._util.getDataUser("id")).subscribe(
      resp=>{ this._listItems = resp.body; },
      err=>{ this._listItems = []; }
    );
  }
}
