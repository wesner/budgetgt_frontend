/**
 * @author Wesner
 * @version 1.0.0.0
 * @description modelos de datos para las tarjetas de crédito
*/

export class creditCard{
     constructor(
          public id: number = 0,
          public user_fk: number = 0,
          public create_at: string = "",
          public update_at: string = "",
          public name: string = "",
          public number: string = "",
          public issuer: string = "", /* Emisor */
          public credit_limit: number = 0,
          public balance: number = 0,
          public cutoff_day: number = 0,
          public payment_day: number = 0,
          public amount_owed: number = 0
     ){}
}

export class PaymentCreditCard{
     constructor(
          public credit_card_fk: number = 0,
          public paid_amount: number = 0,
          public comment: string = ""
     ){}
}

export class HistoryPaymentCreditCard{
     constructor(
          public created_at: string = "",
          public paid_amount: number = 0,
          public comment: string = ""
     ){}
}