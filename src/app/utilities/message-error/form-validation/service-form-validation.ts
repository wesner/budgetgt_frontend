/*
     @author:  Wesner 
     @date:    2 de enero 2017
     @description:  Servicio para validar los campos de los formularios
*/

export class ValidationService {

     /* --------------------------------------------------------------
          Devuelve los mensajes
     -------------------------------------------------------------- */
     static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
          let config = {
               'requiredValidator':   'El campo es requerido.',
               'invalidCreditCard':   'El número de tarjeta de crédito es inválido',
               'invalidEmailAddress': 'El valor ingresado no parece una dirección de correo.',
               'invalidPassword':     'Contraseña inválida. La contraseña debe tener al menos 8 caracteres y contener un número.',
               'invalidURL':          'El valor ingresado no parece una URL válida',
               'invalidCUI':          'Solo se permiten números y debe tener una longitud miníma de 13 números',
               'minlength':           `La longitud miníma es: ${validatorValue.requiredLength} caracteres`,
               'noCeroValidator':     `El valor no puede estar vacio o ser cero.`,
               'selectValidator':     `Debe selecionar una opción`,
               'currencyValidator':   `Solo se permiten números positivos con un máximo de 5 decimales`,
               'numberNoCeroValidator': `El valor debe ser un número entero mayor a cero`,
               'invalidNit':            'El valor ingresado no coincide con el formato (0000000-0)',
               'invalidPhone':          'El valor ingresado no coincide con el formato (0000-0000)'
          };
          return config[validatorName];
     }

     /* --------------------------------------------------------------
          Valida las tarjetas de credito 
     -------------------------------------------------------------- */
     static creditCardValidator(control) {
          // Visa, MasterCard, American Express, Diners Club, Discover, JCB
          if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
               return null;
          } 
          else {
               return { 'invalidCreditCard': true };
          }
     }
   


     /* --------------------------------------------------------------
          Valida los campos de tipo correo electronico
     -------------------------------------------------------------- */     
     static emailValidator(control) {
          // RFC 2822 compliant regex
          if(control.value == '' || control.value == null || control.value == "" ){
            return null;
          }
          else if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
               return null;
          } 
          else {
               return { 'invalidEmailAddress': true };
          }
     }
   

     /* --------------------------------------------------------------
          Valida las contraseñas
     -------------------------------------------------------------- */
     static passwordValidator(control) {
          // {8,100}           - Assert password is between 8 and 100 characters
          // (?=.*[0-9])       - Assert a string has at least one number
          if(control.value == '' || control.value == null || control.value == ""){
              return null;
          }
          else if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&.:-_,;*]{8,100}$/)) { 
               return null; 
          } 
          else { 
               return { 'invalidPassword': true };
          }
     }



    /* --------------------------------------------------------------
        Valida las URL's
    -------------------------------------------------------------- */
    static urlValidator(control) {
      if(control.value == '' || control.value == null || control.value == ""){
          return null;
      }
      else if (control.value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) { 
            return null; 
      } 
      else { 
            return { 'invalidURL': true };
      }
    }
  

    /* --------------------------------------------------------------
        Valida los números hexadecimales
    -------------------------------------------------------------- */
    static hexadecimalValidator(control) {
        if(control.value == '' || control.value == null || control.value == ""){
            return null;
        }
        else if (control.value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) { 
                return null; 
        } 
        else { 
                return { 'invalidURL': true };
        }      
    }


    /* --------------------------------------------------------------
        Valida el minimo de largo de un CUI
    -------------------------------------------------------------- */    
    static cuiValidator(control) {
        if(control.value == null || control.value == "" || control.value == ''){
            return null;
        }
        else if (control.value.match(/^[0-9]{13,20}$/)) { 
              return null; 
        } 
        else { 
              return { 'invalidCUI': true };
        }     
    }
    
    /* --------------------------------------------------------------
        Valida que el valor sea igual o mayor al parametro establecido
    -------------------------------------------------------------- */    
    static noCeroValidator(control) {
        if(control.value == "0" || control.value == null || control.value == "" ){
            return { 'noCeroValidator': true };
        }
        else { 
            return null;
        }     
    }
    
    
    /* --------------------------------------------------------------
        Valida que el valor sea un número y tenga como máximo 
        5 decimales
    -------------------------------------------------------------- */    
    static currencyValidator(control) {
        if(control.value != null){
            let number: string = control.value.toString();
            if(number.match(/^[0-9]+([.][0-9]{1,5})?$/)){
                return null;
            }
            else{
                return { 'currencyValidator': true };
            }
        }
        else{
            return { 'currencyValidator': true };
        }
    }

    /* --------------------------------------------------------------
        Valida que el valor sea un número y no sea cero
    -------------------------------------------------------------- */    
    static numberNoCeroValidator(control) {
        if(control.value != null){
            let number: string = control.value.toString();
            if(number.match(/^[1-9]+([0-9]*)?$/)){
                return null;
            }
            else{
                return { 'numberNoCeroValidator': true };
            }
        }
        else{
            return { 'numberNoCeroValidator': true };
        }
    }    

    
    
    /* --------------------------------------------------------------
        Valida cuando el campo es requerido
    -------------------------------------------------------------- */    
    static requiredValidator(control) {
        if(control.value == null || control.value == "" ){
            return { 'requiredValidator': true };
        }
        else { 
            return null;
        }     
    }  
    
    
    /* --------------------------------------------------------------
        Valida un select
    -------------------------------------------------------------- */    
    static selectValidator(control) {
        if(control.value == "0" || control.value == null || control.value == "" ){
            return { 'selectValidator': true };
        }
        else { 
            return null;
        }     
    } 
    
    
    /* --------------------------------------------------------------
        Valida un NIT = 8047575-2
    -------------------------------------------------------------- */    
    static nitValidator(control) {
        if(control.value == "" || control.value == null || control.value.match(/^[a-zA-Z0-9]+[-][a-zA-Z0-9]{1}$/) ){
            return null;
        }
        else { 
            return { 'invalidNit': true };
        }     
    }
    
    /* --------------------------------------------------------------
        Valida un Número de telefono = 4265-8916
    -------------------------------------------------------------- */    
    static phoneNumberValidator(control) {
        if(control.value == "" || control.value == null || control.value.match(/^[0-9]{4}[-][0-9]{4}$/) ){
            return null;
        }
        else{
            return { 'invalidPhone': true };
        }
    }
  }
