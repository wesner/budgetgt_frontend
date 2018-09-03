import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AESService } from './aes.service';

declare var CryptoJS:any;

@Injectable({ providedIn: 'root' })
export class UtilService {

  constructor(private aes:AESService) { }

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
  public decryptJSON(_data:Array<any>| Object):[] | Object{
    if(_data instanceof Array){
      for(let obj in _data){
        for(let det of _data[obj]){
          det = this.aes._AESdecrypt(det);
        }
      }
    }
    else{
      for(let obj in _data){
        _data[obj] = this.aes._AESdecrypt(_data[obj]);
      }
    }
    return _data;
  }
}
