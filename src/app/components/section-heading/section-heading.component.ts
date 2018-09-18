import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { modelHeader } from '../../data-models/components';

@Component({
  selector: 'header',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.css']
})
export class SectionHeadingComponent implements OnInit {

  @Input('modelHeader') _modelHeader: modelHeader;
  @Output('clickButton') _clickButton = new EventEmitter<any>();
  
  constructor(){ }
  ngOnInit() { }

  /**
   * Envio de evento al hacer click en el componente
   */
  clickButtonSubmit():void{
    this._clickButton.emit("submit");
  }
}
