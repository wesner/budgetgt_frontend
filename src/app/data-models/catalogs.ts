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


 export class Account{
   public id: number = 0;
   public user_fk: number = 0;
   public name: string = "";
   public description: string = "";
   public type: string = "";
   public balance: number = 0;
   public state: boolean = true;
   public is_erasable: boolean = false;
   public create_at: string = "";
   public update_at: string = "";
   public bank_name: string = "";

   constructor(_dat?:Account){
     if(_dat){
      this.id = _dat.id;
      this.user_fk = _dat.user_fk;
      this.name = _dat.name;
      this.description = _dat.description;
      this.type = _dat.type;
      this.balance = _dat.balance;
      this.is_erasable = _dat.is_erasable;
      this.create_at = _dat.create_at;
      this.update_at = _dat.update_at;
      this.state = _dat.state;
      this.bank_name = _dat.bank_name;
     }
   }
 }