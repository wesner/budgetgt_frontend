import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  isView: boolean = true;
  totalIncomes: number = 0;
  totalExpenses: number = 0;
  
  totalExpensesEffect: number = 0;
  totalExpensesNotEffect: number = 0;
  listBalance: any[];

  constructor(
    private _http: HttpService,
    public _util: UtilService
  ){}
  ngOnInit(){
    this._http.getBalanceByUser(this._util.getDataUser("id")).subscribe(
      resp=>{
        this.listBalance = resp;
        this.listBalance.map(
          x=>{
            this.totalIncomes = this.totalIncomes + parseFloat(x['income']==''?0:x['income']);
            this.totalExpenses = this.totalExpenses + parseFloat(x['expense']==''?0:x['expense']);
            if(x['effected']!=1){ 
              this.totalExpensesNotEffect = this.totalExpensesNotEffect + parseFloat(x['expense']==''?0:x['expense']); 
            }
            else{
              this.totalExpensesEffect = this.totalExpensesEffect + parseFloat(x['expense']==''?0:x['expense']); 
            }
          }
        );
      }
    );
  }

}
