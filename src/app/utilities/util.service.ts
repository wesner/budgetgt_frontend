import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class UtilService {

  constructor() { }

  /**
   * 
   * @param _control Nombre del control el cual se valida si es válido y si ha sido visitado
   */
  getError(_control:FormControl):boolean{
    return !_control.valid && (_control.touched || _control.dirty);
  }
}
