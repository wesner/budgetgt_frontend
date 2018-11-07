import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-service/http-service.service';
import { UtilService } from '../../utilities/util.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  canvasIncome: any;
  ctxIncome: any;
  canvasExpense: any;
  ctxExpense: any;
  
  canvasCategories: any;
  ctxCategories: any;

  labelsIncomes: string[];
  dataIncomes: number[];
  labelsExpenses: string[];
  dataExpense: number[];

  indicators={
    total_income:0,
    total_account:0,
    total_expenses_effected:0,
    total_expenses_no_effected:0,
    total_money_available:0,
    categories: []
  };

  constructor(
    private _http: HttpService, 
    public _util:UtilService
  ){ }

  ngOnInit(){
    this.canvasIncome = document.getElementById("chart-incomes");
    this.ctxIncome = this.canvasIncome.getContext("2d");
    
    this.canvasExpense = document.getElementById("chart-expenses");
    this.ctxExpense = this.canvasExpense.getContext("2d");

    this.canvasCategories = document.getElementById("chart-categories");
    this.ctxCategories = this.canvasCategories.getContext("2d");    

    /** 
     * Indicadores
     */
    this._http.getIndicatorsByUser(this._util.getDataUser("id")).subscribe(
      resp=>{
        let cat = resp['categories'];
        let chart3 = new Chart(this.ctxCategories, {
          type: 'bar',
          data: {
              labels: cat.map(x=>{ return x['category_name']; }),
              datasets: [{
                  label:"Listado de Egresos por Categoria",
                  backgroundColor: "#2E86C1",
                  borderColor: "#2E86C1",
                  data: cat.map(x=>{ return x['amount']; }),
                  fill: false
              }]
          },
          options: {
            responsive: true
          }
        });
        
        this.indicators = this.convertNumber(resp);
        this.createChartIncomes();
      }
    );

  }


  /**
   * Convierte todos los elementos de un objeto a tipo number
   * @param ob 
   */
  convertNumber(ob:{}):any{
    let data:any = {};
    for(let x in ob){ 
      try{
        data[x] = parseFloat(ob[x]);
      }
      catch{
        data[x] = data[x];
      }
    }
    console.log(data)
    return data;
  }

  /**
   * Construcción de la gráfica de Ingresos
   */
  createChartIncomes(){
    this._http.getAllIncomesCurrentsByUser(this._util.getDataUser("id")).subscribe(
      resp=>{
        this.labelsIncomes = resp['body'].map(x=>{ return x.name; });
        this.dataIncomes = resp['body'].map(x=>{ return x.amount; });
        let chart1 = new Chart(this.ctxIncome, {
          type: 'line',
          data: {
              labels: this.labelsIncomes,
              datasets: [{
                  label:"Listado de Ingresos",
                  backgroundColor: "#00d97e",
                  borderColor: "#00d97e",
                  data: this.dataIncomes,
                  fill: false
              }]
          },
          options: {
            responsive: true
          }
        });
        this.createChartExpenses();
      }
    );
  }

  /**
   * Construcción de la gráfica de Egresos
  */  
  createChartExpenses(){
    this._http.getAllExpensesCurrentsByUser(this._util.getDataUser("id")).subscribe(
      resp=>{
        this.labelsExpenses = resp['body'].map(x=>{ return x['expense_name']; });
        this.dataExpense = resp['body'].map(x=>{ return x['expense_amount']; });
        let chart2 = new Chart(this.ctxExpense, {
          type: 'line',
          data: {
              labels: this.labelsExpenses,
              datasets: [{
                  label:"Listado de Egresos",
                  backgroundColor: "#e63757",
                  borderColor: "#e63757",
                  data: this.dataExpense,
                  fill: false
              }]
          },
          options: {
            responsive: true
          }
        });
      }
    );
  }
}
