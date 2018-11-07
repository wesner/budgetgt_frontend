/**
 * @author Wesner
 * @version 1.0.0.0
 * @description modelos de datos para los presupuestos, ingresos y egresos
*/
export class Income{
     constructor(
          public id:number=0,
          public budget_fk:number=0,
          public category_fk:number=1,
          public account_fk:number=0,
          public name:string="",
          public description:string="",
          public amount:number=0,
          public created_at:string="",
          public update_at:string="",
          public user_fk:number=0
     ){}
}
export class Expense{
     constructor(
          public id:number=0,
          public budget_fk:number=0,
          public name:string="",
          public description:string="",
          public type_payment_fk:number=0,
          public amount:number=0,
          public account_fk:number=0,
          public payday:number=0,
          public category_fk:number=1,
          public effected:boolean=true,
          public no_document:string="",
          public credit_card_fk:number=0,
          public created_at:string="",
          public update_at:string="",
          public user_fk:number=0          
     ){}
}