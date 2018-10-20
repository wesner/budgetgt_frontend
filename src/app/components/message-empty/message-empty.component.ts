import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message-empty',
  template: `
    <div class="text-center text-bold">  
      <span> <b> No se encontraron datos para este registro. </b> </span> <br>
      <span> <i class="fa fa-unlink"></i> Es probable que la información ya no exista. </span>
    </div>
  `
})
export class MessageEmptyComponent implements OnInit {
  constructor(){}
  ngOnInit() {}
}
