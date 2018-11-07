import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AESService } from './aes.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
declare var CryptoJS:any;

const keyStorage = {
  user: "10000"
};

@Injectable({ providedIn: 'root' })
export class UtilService {

  constructor(
    private _aes:AESService,
    private _iziToast: Ng2IzitoastService
  ){ }

  /**
   * 
   * @param _control Nombre del control el cual se valida si es válido y si ha sido visitado
   */
  public getError(_control:FormControl):boolean{
    return !_control.valid && (_control.touched || _control.dirty);
  }


  /**
   * 
   * @param _data Recibe como parametro un array o un objeto y lo desencripta
   */
  public decryptJSON(_data:Array<any>| Object):any | Object{
    if(_data instanceof Array){
      for(let obj in _data){
        for(let det of _data[obj]){
          det = this._aes._AESdecrypt(det);
        }
      }
    }
    else{
      for(let obj in _data){
        _data[obj] = this._aes._AESdecrypt(_data[obj]);
      }
    }
    return _data;
  }

  /**
   * retorna el codigo con el cual se guardan los datos en sesión/local storange
   * @param key para
   */
  public getKeyStorange(key:string):string{
    return keyStorage[key];
  }

  /**
 * Busca, desencrypta y retorna el valor indicado
 * @param key 
 */
  public getDataUser(key:string):string{
    let dataUser: any;
    let data: string;
		if(localStorage.getItem(this.getKeyStorange("user")) != null){ //Si existe en localstorage
			try{
        dataUser=JSON.parse(this._aes._AESdecrypt(localStorage.getItem(this.getKeyStorange("user"))));
        data=dataUser[key];
			}
			catch(e){ data=""; }
		}
		else if(sessionStorage.getItem(this.getKeyStorange("user")) != null){ //Si existe en session storange
			try{
        dataUser=JSON.parse(this._aes._AESdecrypt(sessionStorage.getItem(this.getKeyStorange("user"))));
        data=dataUser[key];
			}
			catch(e){ data=""; }
    }
    return data;
  }

  /**
 * 
 * @param title 
 * @param message 
 * @param type info, success, warning, error
 */
  public budAlert(title?:string, message?:string, type?:string){
    if(type){
      switch (type.trim()) {
        case "info":
          this._iziToast.info({
            title: title?title:"",
            message: message?message:"",
            position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            closeOnEscape: true,
            theme: 'light'
          });
        break;

        case "success":
          this._iziToast.success({
            title: title?title:"",
            message: message?message:"",
            position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            closeOnEscape: true,
            theme: 'light'
          });
        break;

        case "warning":
          this._iziToast.warning({
            title: title?title:"",
            message: message?message:"",
            position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            closeOnEscape: true,
            theme: 'light'
          });
        break;

        case "error":
          this._iziToast.error({
            title: title?title:"",
            message: message?message:"",
            position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            closeOnEscape: false,
            theme: 'light'
          });
        break;
      
        default:
          this._iziToast.info({
            title: title?title:"",
            message: message?message:"",
            position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            closeOnEscape: true,
            theme: 'light'
          });
        break;
      }
    }
    else{
      this._iziToast.info({
        title: title?title:"",
        message: message?message:"",
        position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        closeOnEscape: true,
        theme: 'light'
      });
    }
  }

  /**
   * @param obj = objeto a validar si esta vacio
   */
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  
  /**
   * Devuelve el array de días del mes en curso
   */
  getDaysOfMonth():number[]{
    let days = [];
    let today = new Date();
    let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
    for(let i=1; i<lastDayOfMonth.getDate()+1; i++){ days.push(i); }
    return days;
  }
}
