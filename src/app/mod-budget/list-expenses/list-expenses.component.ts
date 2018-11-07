import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { Observable } from 'rxjs';
import { ConfirmationDeleteComponent } from 'src/app/components/confirmation-delete/confirmation-delete.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {


  @ViewChild('confirmationDelete') _confirmationDelete: ConfirmationDeleteComponent;
  listExpenses: Observable<any[]>;
  constructor(
    private _http: HttpService,
    public _util: UtilService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this.getAllItems();
  }

  editExpense(id:number){
    this._router.navigate(['../edit-expense', id], {relativeTo: this._route});
  }

  confirmationBeforeDelete(_item:any){
    this._confirmationDelete.show(_item.id, _item.expense_name);
  }

  deleteExpense(id:number|string){
    this._confirmationDelete.close();
    this._http.deleteExpense(id).subscribe(
      ret=>{
        if(ret.success){
          this._util.budAlert("Eliminación Exitosa", "El egreso fue borrado con éxito", "success");
          this.getAllItems();
        }
        else{ this._util.budAlert("Error", "El egreso no pudo ser borrado, por favor intenta más tarde.", "error"); }
      },
      err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
    );
  }

  getAllItems(){
    this.listExpenses = this._http.getAllExpensesCurrentsByUser(this._util.getDataUser("id"));
  }

}
