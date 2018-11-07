import { Component, OnInit } from '@angular/core';
import { modelHeader, buttonHeader } from 'src/app/data-models/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-cc',
  templateUrl: './main-cc.component.html',
  styleUrls: ['./main-cc.component.css']
})
export class MainCCComponent implements OnInit {
  _modelHeader: modelHeader;
  constructor(
    private _router: Router    
  ){
    this._modelHeader = new modelHeader("Créditos", "Tarjetas de crédito", "Gestión de las tarjeas de crédito personales.", 
                        new buttonHeader(true, "Crear nueva tarjeta de crédito", "dark"));
  }

  ngOnInit(){}

  navigateNew(){
    this._router.navigate(['main/credit-cards/new']);
  }  
}
