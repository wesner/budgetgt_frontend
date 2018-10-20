import { Component, OnInit } from '@angular/core';
import { modelHeader, buttonHeader } from '../../data-models/components';

@Component({
  selector: 'app-fixed-expenses',
  templateUrl: './fixed-expenses.component.html',
  styleUrls: ['./fixed-expenses.component.css']
})
export class FixedExpensesComponent implements OnInit {

  _modelHeader: modelHeader;

  
  constructor(){
    this._modelHeader = new modelHeader("Catalogos", "Ingresos Fijos", "Listado de ingresos fijos personales.", 
                        new buttonHeader(true, "Crear nuevo ingreso fijo", "dark"));
  }

  ngOnInit() {
  }

}
