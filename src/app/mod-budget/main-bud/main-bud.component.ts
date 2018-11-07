import { Component, OnInit } from '@angular/core';
import { modelHeader, buttonHeader } from 'src/app/data-models/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-bud',
  templateUrl: './main-bud.component.html',
  styleUrls: ['./main-bud.component.css']
})
export class MainBudComponent implements OnInit {
  _modelHeader: modelHeader;
  _date: Date;
  _months: any[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  constructor(
    private _router: Router
  ){
    this._date = new Date();
    this._modelHeader = new modelHeader("Presupuestos", `${this._months[this._date.getMonth()]} del ${this._date.getFullYear()}`, "Gestión del presupuesto mensual.");
  }

  ngOnInit(){}

  // navigateNew(){
  //   this._router.navigate(['main/debts/new']);
  // }  
}
