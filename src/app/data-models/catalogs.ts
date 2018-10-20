import { User } from "./user";

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


export class Category{
  constructor(
    public id: number = 0,
    public name: string = "",
    public description: string = "",
    public icon: string = "",
    public user_fk: number = 0,
    public type: string = "",
    public create_at: string = "",
    public update_at: string = ""
  ){}
}

export class FixedIncome{
  constructor(
    public id: number=0,
    public user_fk: number=0,
    public name: string="",
    public description: string="",
    public amount: number=0,
    public payday: number=0,
    public account_fk: number=0,
    public category_fk: number=0,
    public periodicity_fk: number=0,
    public create_at: string="",
    public update_at: string="",
    public periodicity?:Periodicity,
    public account?:Account,
    public category?:Category,
    public user?:User
  ){}
}

export class Periodicity{
  constructor(
    public id:number = 0,
    public january:boolean=false,
    public february:boolean=false,
    public march:boolean=false,
    public april:boolean=false,
    public may:boolean=false,
    public june:boolean=false,
    public july:boolean=false,
    public august:boolean=false,
    public september:boolean=false,
    public october:boolean=false,
    public november:boolean=false,
    public december:boolean=false    
  ){}
}