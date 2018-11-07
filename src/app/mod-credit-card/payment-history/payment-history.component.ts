import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { creditCard, HistoryPaymentCreditCard } from 'src/app/data-models/credit-card';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryCCComponent implements OnInit {

  listCC$: Observable<HttpResponse<creditCard[]>>;
  listHistoryPaymentCC: HistoryPaymentCreditCard[];
  formSearchCC: FormGroup;
  view: boolean = false;
  isLoaded: boolean = false;  
  
  constructor(
    private _http: HttpService,
    public _util: UtilService,
    private _fb: FormBuilder
  ){
    this.formSearchCC = this._fb.group({
      idCC: [0, [ValidationService.selectValidator]],
      dateStart: ['', [ValidationService.requiredValidator]],
      dateEnd: ['', [ValidationService.requiredValidator]]
    });
  }

  ngOnInit(){
    this.listCC$ = this._http.getAllCreditCardsByUser(this._util.getDataUser("id"));
  }


  formSearchCCSubmit(){
    this.view = true;
    this.isLoaded = false;
    this._http.GetAllPaymentCreditCard(this.formSearchCC.controls.idCC.value, this.formSearchCC.controls.dateStart.value, this.formSearchCC.controls.dateEnd.value).subscribe(
      resp=>{
        this.listHistoryPaymentCC = resp;
        this.isLoaded = true;
      }
    );
  }

}
