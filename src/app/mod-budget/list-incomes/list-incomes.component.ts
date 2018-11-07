import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { Observable } from 'rxjs';
import { ConfirmationDeleteComponent } from 'src/app/components/confirmation-delete/confirmation-delete.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-incomes',
  templateUrl: './list-incomes.component.html',
  styleUrls: ['./list-incomes.component.css']
})
export class ListIncomesComponent implements OnInit {


  @ViewChild('confirmationDelete') _confirmationDelete: ConfirmationDeleteComponent;
  listIncomes: Observable<any[]>;
  constructor(
    private _http: HttpService,
    public _util: UtilService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this.getAllItems();
  }

  editIncome(id:number){
    this._router.navigate(['../edit-income', id], {relativeTo: this._route});
  }

  confirmationBeforeDelete(_item:any){
    this._confirmationDelete.show(_item.id, _item.name);
  }

  deleteIncome(id:number|string){
    this._confirmationDelete.close();
    this._http.deleteIncome(id).subscribe(
      ret=>{
        if(ret.success){
          this._util.budAlert("Eliminación Exitosa", "El ingreso fue borrado con éxito", "success");
          this.getAllItems();
        }
        else{ this._util.budAlert("Error", "El ingreso no pudo ser borrado, por favor intenta más tarde.", "error"); }
      },
      err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
    );
  }

  getAllItems(){
    this.listIncomes = this._http.getAllIncomesCurrentsByUser(this._util.getDataUser("id"));
  }


}
