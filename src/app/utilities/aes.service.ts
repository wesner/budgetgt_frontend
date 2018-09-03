/**
 * 
 * @author Wesner
 * @description Servicio para desencriptar un string en formato AES usando una llave compartida entre le backend y el frontEnd
 * 
 */
import { Injectable } from '@angular/core';
declare var CryptoJS: any;
const base64Key = "OGRPbTZNRDdxOGZ3QlAweQ==";

@Injectable({
  providedIn: 'root'
})
export class AESService {

  constructor(){ }

  /**
   * Return Text Descrypted
   * @param _text text for decrypting
   */
  public _AESdecrypt(_text:any, isNumber?:boolean):typeof _text{
    try {
      switch (typeof _text) {
        case "string":
          let key = CryptoJS.enc.Base64.parse(base64Key);
          let decryptedData = CryptoJS.AES.decrypt(_text, key, {
              mode: CryptoJS.mode.ECB,
              padding: CryptoJS.pad.Pkcs7
          });
          return isNumber ? this.convertTypes(decryptedData.toString(CryptoJS.enc.Utf8), "number") : decryptedData.toString(CryptoJS.enc.Utf8);
      
        case "number":
          return _text;

        case "boolean":
          return _text;

        default: return _text;
      }
    } catch (error) {
      return _text;
    }
  }

  /**
   * Return Text Encrypted
   * @param _text text for encrypting
   */
  public _AESencrypt(_text:any):string{
    try {
      let key = CryptoJS.enc.Base64.parse(base64Key);
      let encryptedData = CryptoJS.AES.encrypt(_text.toString(), key, {
           mode: CryptoJS.mode.ECB,
           padding: CryptoJS.pad.Pkcs7
      });
      return encryptedData.toString();
    } catch (error) {
      return _text;
    }
  }

  /**
   * Convert value to original value
   * @param _val Value for convert
   * @param _type original type
  */
  private convertTypes<T>(_val:T, _type:string){
    switch (_type) {
      case "string":
        return _val.toString();

      case "number":
        return Number(_val);
  
      case "boolean":
        return Boolean(_val);

      default:
        return _val;
    }
  }


  /**
   * Return key in base 64
   */
  public getKey():string{
    return base64Key;
  }
}
