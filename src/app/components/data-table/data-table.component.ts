import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { tableNames, typeDataTable, settingsDataTable } from '../../data-models/data-table';
import { UtilService } from '../../utilities/util.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input('array') array: any[];
  @Input('names') names: tableNames[];
  @Input('settings') _settings: settingsDataTable;  
  @Output('details') _details = new EventEmitter<any>();
  @Output('edit') _edit = new EventEmitter<any>();
  @Output('delete') _delete = new EventEmitter<any>();

  tmpArray: any[];
  pagArray: any[];
  sortColumn: sortColumn;
  _typeDataTable: typeDataTable;
  _countNames: number;
  _countArray: number;

  _pagination: Pagintation;
  _pager: any = {}; /* pager object */
  _pageSize: string = '10';

  constructor(public _util: UtilService){
    this.sortColumn = new sortColumn();
    this._typeDataTable = new typeDataTable();
    this._pagination = new Pagintation();
  }

  ngOnInit(){ }

  ngOnChanges(){
    if(this.names && this.array){
      let _id = 0;
      for(let nm of this.names){
        nm.id = _id.toString();
        _id = _id + 1;
      }
      this.tmpArray = [].concat(this.array); /**Se clona el array de datos para realizar la busqueda */
      this.pagArray = [].concat(this.array);
      this._countNames = this.names.length;
      this._countArray = this.tmpArray.length;
      this.setPagination(1);
    }
  }

  searchInTable(){
    this.pagArray = this.array.filter(
      arr=>{
        let _isCorrect = true;
        for(let x of this.names.map( nm=>{ return arr[nm.nameArray].toString().toLowerCase().indexOf(nm.search.toLowerCase()) > -1; })){
          if(!x){ _isCorrect = false; }
        }
        if(_isCorrect){ return arr; }
      }
    );
    this._countArray = this.pagArray.length;
  }

	/* Funciones para ordenar las tablas al hacer click sobre los encabezados */
  orderTable(field:string, _id:string){
    this.names.map( a=>{  document.getElementById(`sort-${a.id}`).className = ""; });

    if(this.sortColumn.name == _id && this.sortColumn.type == 0 || this.sortColumn.name != _id){ /** Asendente */
      document.getElementById(`sort-${_id}`).className = "fa fa-sort-alpha-down";
      this.pagArray.sort((a: any, b: any) => {
        if (a[field] < b[field]) { return -1;}
        else if (a[field] > b[field]) { return 1; }
        else { return 0; }
      });
      this.sortColumn.type = 1;
    }
    else{ /** Desendente */
      document.getElementById(`sort-${_id}`).className = "fa fa-sort-alpha-up";
      this.pagArray.sort((a: any, b: any) => {
        if (a[field] > b[field]) { return -1;}
        else if (a[field] < b[field]) { return 1; }
        else { return 0; }
      });
      this.sortColumn.type = 0;
    }
    this.sortColumn.name = _id;
  }

  /**Envia el elemento selecionado al contenedor padre */
  sendDetails(id:number|string):void{
    this._details.emit(id);
  }
  sendEdit(id:number|string):void{
    this._edit.emit(id);
  }
  sendDelete(item:any):void{
    this._delete.emit(item);
  }



  /** Paginación de  */
  setPagination(page:number){
    this._pager = this._pagination.getPager(this.tmpArray.length, page, parseInt(this._pageSize));
    this.pagArray = this.tmpArray.slice(this._pager.startIndex, this._pager.endIndex + 1);
  }
}


/**
 * Modelo de datos para ordenar el array
 */
class sortColumn{
  name:string = "";
  type:number = 0;
}


/**
 * Clase que retorna las propiedades de paginación
 */
class Pagintation {
  getPager(totalItems:number, currentPage:number=1, pageSize:number) {
      // calculate total pages
      let totalPages = Math.ceil(totalItems / pageSize);

      // ensure current page isn't out of range
      if (currentPage < 1) { 
          currentPage = 1; 
      } else if (currentPage > totalPages) { 
          currentPage = totalPages; 
      }
      
      let startPage: number, endPage: number;
      if (totalPages <= 10) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
      } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage <= 6) {
              startPage = 1;
              endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
              startPage = totalPages - 9;
              endPage = totalPages;
          } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
          }
      }

      // calculate start and end item indexes
      let startIndex = (currentPage - 1) * pageSize;
      let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // create an array of pages to ng-repeat in the pager control
      let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

      // return object with all pager properties required by the view
      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
      };
  }
}