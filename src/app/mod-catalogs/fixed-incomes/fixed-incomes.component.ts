import { Component, OnInit } from '@angular/core';
import { modelHeader, buttonHeader } from '../../data-models/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixed-incomes',
  templateUrl: './fixed-incomes.component.html',
  styleUrls: ['./fixed-incomes.component.css']
})
export class FixedIncomesComponent implements OnInit {
  _modelHeader: modelHeader;
  
  constructor(
    private _router: Router
  ){
    this._modelHeader = new modelHeader("Catalogos", "Ingresos Fijos", "Gestión de ingresos fijos personales.", 
                        new buttonHeader(true, "Crear nuevo ingreso fijo", "dark"));
  }
  
  ngOnInit(){
    // this._router.navigate(['main/catalogs/fixed-incomes/list']);
  }

  navigateNew(){
    this._router.navigate(['main/catalogs/fixed-incomes/new']);
  }
}
