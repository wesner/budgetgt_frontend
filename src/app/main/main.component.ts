import { Component, OnInit } from '@angular/core';
import { UtilService } from '../utilities/util.service';
import { Router } from '@angular/router';
import { modules } from '../data-models/navigation';
declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  userName: string;
  _modules: any[]=[];

  constructor(
    private _util: UtilService,
    private _router: Router
  ){
    this.userName = this._util.getDataUser("name");
    this._modules = modules;
  }

  ngOnInit(){ }

  
  signOut(){
    sessionStorage.clear();
    localStorage.clear();
    this._router.navigate(["/login"]);
  }
}
