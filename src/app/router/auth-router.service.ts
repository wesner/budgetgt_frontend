import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilService } from '../utilities/util.service';
import { AESService } from '../utilities/aes.service';

@Injectable()
export class AuthRouterService implements CanActivate {
  
  constructor(private _util: UtilService, private _aes: AESService, private _router: Router){}
  
  /**
   * Valida si existe data del usuario y si no existe existe lo redigide al login
   */
  canActivate(){
    let dataUser: any;
    let access: boolean=false;
		if(localStorage.getItem(this._util.getKeyStorange("user")) != null){ //Si existe en localstorage
			try{
        dataUser=JSON.parse(this._aes._AESdecrypt(localStorage.getItem(this._util.getKeyStorange("user"))));
        access=true;
			}
			catch(e){ access=false; }
		}
		else if(sessionStorage.getItem(this._util.getKeyStorange("user")) != null){ //Si existe en session storange
			try{
        dataUser=JSON.parse(this._aes._AESdecrypt(sessionStorage.getItem(this._util.getKeyStorange("user"))));
        access=true;
			}
			catch(e){ access=false; }
    }
    !access?this._router.navigate(["/login"]):"";
    return access;
  }
}
