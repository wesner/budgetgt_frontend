/**
 * @author Wesner
 * @version 1.0.0.0
 * @description modelos de datos para los catálogos de la aplicación 
 */

 export class Country{
      public id: number = 0;
      public country_name: string = "";
      public country_code: string = "";
      public currency_name: string = "";
      public currency_code: string = "";
      public currency_symbol: string = "";

      constructor(_c?: Country){
          if(_c){
            this.id=_c.id;
            this.country_name=_c.country_name;
            this.country_code=_c.country_code;
            this.currency_name=_c.currency_name;
            this.currency_code=_c.currency_code;
            this.currency_symbol=_c.currency_symbol;
          }
      }
 }