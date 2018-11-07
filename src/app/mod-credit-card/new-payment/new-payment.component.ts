import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { creditCard, PaymentCreditCard } from 'src/app/data-models/credit-card';
import { HttpResponse } from '@angular/common/http';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentCCComponent implements OnInit {

  listCC$: Observable<HttpResponse<creditCard[]>>;
  creditCard: creditCard;
  formSearchCC: FormGroup;
  formPaymentCC: FormGroup;
  view: boolean = false;
  isLoaded: boolean = false;

  constructor(
    private _http: HttpService,
    public _util: UtilService,
    private _fb: FormBuilder
  ){
    this.formSearchCC = this._fb.group({
      idCC: [0, [ValidationService.selectValidator]]
    });

    this.formPaymentCC = this._fb.group({
      id: [{value: 0}, ],
      name: [{value: '', disabled: true}, ],
      number: [{value: '', disabled: true}, ],
      amount_owed: [{value: 0, disabled: true}, ],
      amonut_payment: [0, [ValidationService.requiredValidator, ValidationService.currencyValidator]],
      comment: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit(){
    this.listCC$ = this._http.getAllCreditCardsByUser(this._util.getDataUser("id"));
  }


  formSearchCCSubmit(){
    this.view = true;
    this.isLoaded = false;
    this._http.getCreditCardById(this.formSearchCC.controls.idCC.value).subscribe(
      resp=>{
        this.formPaymentCC.controls.id.setValue(resp.id);
        this.formPaymentCC.controls.name.setValue(resp.name);
        this.formPaymentCC.controls.number.setValue(resp.number);
        this.formPaymentCC.controls.amount_owed.setValue(resp.amount_owed);
        this.formPaymentCC.controls.amonut_payment.setValue(null);
        this.formPaymentCC.controls.comment.setValue(null);
        this.isLoaded = true;
      }
    )
  }

  /**
   * Valida que el saldo disponible actual no sea mayor al límite de credito 
   * En caso sea mayor crea un error llamado "moreThat"
   */
  validationMoreThat(){
    if(this.formPaymentCC.controls.amonut_payment.value > this.formPaymentCC.controls.amount_owed.value){
      this.formPaymentCC.controls.amonut_payment.setErrors({"moreThat": true});
    }
    else{
      this.formPaymentCC.controls.amonut_payment.valid;
    }
  }

  formPaymentCCSubmit(){
    let payment = new PaymentCreditCard();
    payment.credit_card_fk = this.formPaymentCC.controls.id.value;
    payment.paid_amount = this.formPaymentCC.controls.amonut_payment.value;
    payment.comment = this.formPaymentCC.controls.comment.value;
    this._http.newPaymentCreditCard(payment).subscribe(
      resp=>{
        if(resp.success){ 
          this._util.budAlert("Actualización Exitosa", "El pago fue realizado con éxito", "success");
          this.formPaymentCC.reset();
          this.formSearchCC.reset();
          this.view = false;
        }
        else{ this._util.budAlert("Error", "El pago no fue realizado, por favor intenta más tarde.", "error"); }
      },
      err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
    );
  }

}