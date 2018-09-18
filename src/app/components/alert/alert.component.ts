import { Component, OnInit, Input } from '@angular/core';
import { errorForm } from '../../data-models/errors';

@Component({
  selector: 'bud-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input('data') _data: errorForm;
  constructor(){}
  ngOnInit(){}

}
