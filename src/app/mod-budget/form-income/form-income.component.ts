import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'src/app/utilities/util.service';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';
import { Category } from 'src/app/data-models/catalogs';
declare var $:any;

@Component({
  selector: 'app-form-income',
  templateUrl: './form-income.component.html',
  styleUrls: ['./form-income.component.css']
})
export class FormIncomeComponent implements OnInit {

  isNew: boolean = true;
  idIncomed: number;
  formData: FormGroup;
  listAccounts: any[];
  listCategories: Category[];
  
  constructor(
    public _util: UtilService,
    private _fb: FormBuilder,
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.formData = this._fb.group({
      id: [0, ],
      created_at: ['', ],
      update_at: ['', ],
      budget_fk: [0, ],
      category_fk: [1, ],
      account_fk: [0, [ValidationService.selectValidator]],
      name: ['', [ValidationService.requiredValidator]],
      description: ['', ],
      amount: [0, [ValidationService.currencyValidator]],
      user_fk: [0, ]
    });
  }

  ngOnInit(){
    $('._popover').popover({ trigger: 'hover', placement: 'left', animation: true });
    this.isNew = (this._router.url.indexOf("/main/budget/new-income")!=-1);
    this.idIncomed = this.isNew?0:parseInt(this._route.snapshot.paramMap.get("id"));
    if(this.idIncomed > 0){
      this._http.getIncomeById(this.idIncomed).subscribe(
        resp=>{
          let data = resp;
          data.user_fk = 0;
          this.formData.setValue(data);
        }
      )
    }

    this._http.getAllCategoriesByUser(this._util.getDataUser("id")).subscribe(resp=>{ this.listCategories=resp.body; });
    this._http.getAllAccountByUser(this._util.getDataUser("id")).subscribe(resp=>{ this.listAccounts=resp.body; });
  }

  formDataSubmit(){
    if(this.isNew){
      /** New Income */
      this.formData.controls.user_fk.setValue(this._util.getDataUser("id"));
      this._http.newIncome(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Creación Exitosa", "El ingreso fue creado con éxito", "success");
            this._router.navigate(['../balance'], {relativeTo: this._route});
          }
          else{ this._util.budAlert("Error", "El ingreso no pudo ser creado, por favor intenta más tarde.", "error"); }
        },
        err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
      );
    }
    else{
      this._http.updateIncome(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Actualización Exitosa", "La tarjeta de crédito fue actualizada con éxito", "success"); 
            this._router.navigate(['../../balance'], {relativeTo: this._route});
          }
          else{ this._util.budAlert("Error", "El ingreso no pudo ser creado, por favor intenta más tarde.", "error"); }
        },
        err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
      );
    }
  }
}
