import { Component, OnInit } from '@angular/core';
import { modelHeader, buttonHeader } from 'src/app/data-models/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dbt',
  templateUrl: './main-dbt.component.html',
  styleUrls: ['./main-dbt.component.css']
})
export class MainDBTComponent implements OnInit {
  _modelHeader: modelHeader;
  constructor(
    private _router: Router    
  ){
    this._modelHeader = new modelHeader("Deudas", "Deudas", "Gestión de las deudas personales.", 
                        new buttonHeader(true, "Crear nueva deuda", "dark"));
  }

  ngOnInit(){}

  navigateNew(){
    this._router.navigate(['main/debts/new']);
  }  
}
