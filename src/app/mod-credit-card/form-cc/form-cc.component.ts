import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'src/app/utilities/util.service';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';
declare var $:any;

@Component({
  selector: 'app-form-cc',
  templateUrl: './form-cc.component.html',
  styleUrls: ['./form-cc.component.css']
})
export class FormCCComponent implements OnInit {

  isNew: boolean = true;
  idCC: number;
  formData: FormGroup;  
  listDays=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  
  constructor(
    public _util: UtilService,
    private _fb: FormBuilder,
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute    
  ){
    this.formData = this._fb.group({
      id: [0, ],
      user_fk: [0, ],
      create_at: ['', ],
      update_at: ['', ],
      name: ['', ],
      number: ['', [ValidationService.requiredValidator]],
      issuer: ['', ],
      credit_limit: [0, [ValidationService.requiredValidator, ValidationService.currencyValidator]],
      balance: [0, [ValidationService.requiredValidator, ValidationService.currencyValidator]],
      amount_owed: [0 ],
      cutoff_day: [0, [ValidationService.selectValidator]],
      payment_day: [0, [ValidationService.selectValidator]],
    });
  }

  ngOnInit(){
    this.isNew = (this._router.url.indexOf("/main/credit-cards/new")!=-1);
    this.idCC = this.isNew?0:parseInt(this._route.snapshot.paramMap.get("id"));

    if(this.idCC > 0){
      this._http.getCreditCardById(this.idCC).subscribe(
        resp=>{ this.formData.setValue(resp);},
        error=>{}
      )
    }
    $('._popover').popover({ trigger: 'hover', placement: 'left', animation: true });
  }

  /**
   * Valida que el saldo disponible actual no sea mayor al límite de credito 
   * En caso sea mayor crea un error llamado "moreThat"
   */
  validationMoreThat(){
    if(this.formData.controls.balance.value > this.formData.controls.credit_limit.value){
      this.formData.controls.balance.setErrors({"moreThat": true});
    }
    else{
      this.formData.controls.balance.valid;
    }
  }

  formDataSubmit(){
    if(this.isNew){
      /** New Fixed Income */
      this.formData.controls.user_fk.setValue(this._util.getDataUser("id"));
      this._http.newCreditCard(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Creación Exitosa", "La tarjeta de crédito fue creada con éxito", "success");
            this.return();
          }
          else{ this._util.budAlert("Error", "La tarjeta de crédito no pudo ser creada, por favor intenta más tarde.", "error"); }
        },
        err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
      );
    }
    else{
      this._http.updateCreditCard(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Actualización Exitosa", "La tarjeta de crédito fue actualizada con éxito", "success"); 
            this._router.navigate(['../../details', this.idCC], {relativeTo: this._route});
          }
          else{ this._util.budAlert("Error", "La tarjeta de crédito no pudo ser creada, por favor intenta más tarde.", "error"); }
        },
        err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
      );
    }
  }


  return(){
    let url = this.isNew?'../list':'../../list';
    this._router.navigate([url], {relativeTo: this._route});
  }
}
