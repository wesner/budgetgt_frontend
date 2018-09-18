import { Component, OnInit, Output, EventEmitter } from '@angular/core';
declare var  $:any;

@Component({
  selector: 'confirmation-delete',
  templateUrl: './confirmation-delete.component.html',
  styleUrls: ['./confirmation-delete.component.css']
})
export class ConfirmationDeleteComponent implements OnInit {

  nameItem: string = "";
  idItem: string = "";
  @Output("delete") _delete = new EventEmitter<any>();
  constructor(){ }
  ngOnInit(){ }


  /* Modal Options */
  show(id:number|string, name:string):void{ 
    this.idItem = id.toString();
    this.nameItem = name;
    $('#confirmationDelete').modal({ backdrop: 'static', keyboard: false, focus: true, show: true }); 
  }
  close():void{ 
    $('#confirmationDelete').modal('hide'); 
  }

  /**
   * Envia al componente padre la confirmación
   */
  confirmationDelete():void{
    this._delete.emit(this.idItem);
    this.close();
  }
}
