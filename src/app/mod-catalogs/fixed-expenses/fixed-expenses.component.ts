import { Component, OnInit } from '@angular/core';
import { modelHeader, buttonHeader } from '../../data-models/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.component.html',
  styleUrls: ['./fixed-expenses.component.css']
})
export class FixedExpensesComponent implements OnInit {
  _modelHeader: modelHeader;
  constructor(private _router: Router){
    this._modelHeader = new modelHeader("Catalogos", "Egresos Fijos", "Gestión de egresos fijos personales.", 
                        new buttonHeader(true, "Crear nuevo egreso fijo", "dark"));
  }
  ngOnInit(){ }

  navigateNew(){
    this._router.navigate(['main/catalogs/fixed-expenses/new']);
  }  
}
