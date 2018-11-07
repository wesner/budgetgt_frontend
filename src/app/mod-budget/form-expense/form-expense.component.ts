import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'src/app/utilities/util.service';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';
import { Category } from 'src/app/data-models/catalogs';
import { creditCard } from 'src/app/data-models/credit-card';
declare var $:any;

@Component({
  selector: 'app-form-expense',
  templateUrl: './form-expense.component.html',
  styleUrls: ['./form-expense.component.css']
})
export class FormExpenseComponent implements OnInit {

  isNew: boolean = true;
  idExpense: number;
  formData: FormGroup;
  listAccounts: any[];
  listCategories: Category[];
  listTypesOfPayments: any[];
  listCreditCards: creditCard[];
  
  constructor(
    public _util: UtilService,
    private _fb: FormBuilder,
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.formData = this._fb.group({
      id: [0, ],
      budget_fk: [0, ],
      name: ['', [ValidationService.requiredValidator]],
      description: ['', ],
      category_fk: [1, ],
      type_payment_fk: [0, ],
      account_fk: [0, ],
      credit_card_fk: [0, ],
      amount: [0, [ValidationService.currencyValidator]],
      payday: [new Date().getDate(), ],
      effected: [true, ],
      no_document: ['', ],
      created_at: ['', ],
      update_at: ['', ],
      user_fk: [0, ]
    });
  }

  ngOnInit(){
    $('._popover').popover({ trigger: 'hover', placement: 'left', animation: true });
    this.isNew = (this._router.url.indexOf("/main/budget/new-expense")!=-1);
    this.idExpense = this.isNew?0:parseInt(this._route.snapshot.paramMap.get("id"));
    if(this.idExpense > 0){
      this._http.getExpenseById(this.idExpense).subscribe(
        resp=>{ 
          let data = resp;
          data.user_fk = 0;
          this.formData.setValue(data);
        }
      )
    }

    this._http.getAllTypesOfPayments().subscribe(resp=>{ this.listTypesOfPayments=resp.body; });
    this._http.getAllCategoriesByUser(this._util.getDataUser("id")).subscribe(resp=>{ this.listCategories=resp.body; });
    this._http.getAllAccountByUser(this._util.getDataUser("id")).subscribe(resp=>{ this.listAccounts=resp.body; });
    this._http.getAllCreditCardsByUser(this._util.getDataUser("id")).subscribe(resp=>{ this.listCreditCards=resp.body; });
  }

  changeTypeOfPayment(){
    this.formData.controls.account_fk.setValue(0);
    this.formData.controls.credit_card_fk.setValue(0);
  }

  clearForm(){
    this.formData.reset();
  }

  formDataSubmit(){
    if(this.isNew){
      /** New Expense */
      this.formData.controls.user_fk.setValue(this._util.getDataUser("id"));
      this._http.newExpense(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Creación Exitosa", "El egreso fue creado con éxito", "success");
            this._router.navigate(['../balance'], {relativeTo: this._route});
          }
          else{ this._util.budAlert("Error", "El egreso no pudo ser creado, por favor intenta más tarde.", "error"); }
        },
        err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
      );
    }
    else{
      this._http.updateExpense(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Actualización Exitosa", "La tarjeta de crédito fue actualizada con éxito", "success"); 
            this._router.navigate(['../../balance'], {relativeTo: this._route});
          }
          else{ this._util.budAlert("Error", "El egreso no pudo ser creado, por favor intenta más tarde.", "error"); }
        },
        err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
      );
    }
  }
}
