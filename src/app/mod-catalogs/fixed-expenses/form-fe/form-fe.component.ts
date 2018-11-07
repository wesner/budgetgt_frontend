import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/data-models/catalogs';
import { UtilService } from 'src/app/utilities/util.service';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';

@Component({
  selector: 'app-form-fe',
  templateUrl: './form-fe.component.html',
  styleUrls: ['./form-fe.component.css']
})
export class FormFeComponent implements OnInit {

  isNew: boolean = true;
  idFE: number;
  formData: FormGroup;
  readonlyInput: Boolean=false;
  listDayPay=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  listAccounts: any[]=[];
  listCategories: Category[]=[];
    
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
      name: ['', [ValidationService.requiredValidator]],
      description: ['', ],
      amount: [0, [ValidationService.requiredValidator, ValidationService.currencyValidator] ],
      automatic_payment: [false, ],
      automatic_payday: [0, ],
      account_fk: [0, [ValidationService.selectValidator]],
      category_fk: [1, [ValidationService.selectValidator]],
      periodicity_fk: [0, ],
      periodicity: this._fb.group({
        id: [0, ],
        january: [true, ],
        february: [true, ],
        march: [true, ],
        april: [true, ],
        may: [true, ],
        june: [true, ],
        july: [true, ],
        august: [true, ],
        september: [true, ],
        october: [true, ],
        november: [true, ],
        december: [true, ]
      })
    });    
  }

  ngOnInit(){
    this.isNew = (this._router.url.indexOf("/main/catalogs/fixed-expenses/new")!=-1);
    this.idFE = this.isNew?0:parseInt(this._route.snapshot.paramMap.get("id"));

    if(this.idFE > 0){
      this._http.getFixedExpenseByIdForUpdate(this.idFE).subscribe(
        resp=>{ this.formData.setValue(resp);},
        error=>{}
      )
    }

    this._http.getAllCategoriesByUser(this._util.getDataUser("id")).subscribe(
      resp=>{
        this.listCategories = resp.body;
        this._http.getAllAccountByUser(this._util.getDataUser("id")).subscribe(
          resp=>{ this.listAccounts = resp.body; },
          err=>{ this.listAccounts = []; }
        )
      },
      err=>{
        this.listAccounts = [];
        this.listCategories = [];
      }
    );
  }


  changeAutomaticPayment(){
    if(this.formData.controls.automatic_payment.value){
      this.formData.controls.automatic_payday.setValidators(ValidationService.selectValidator);
    }
    else{
      this.formData.get('automatic_payday').clearValidators();
      this.formData.get('automatic_payday').clearAsyncValidators();
      this.formData.get('automatic_payday').reset();
      this.formData.controls.automatic_payday.setValue(0);
    }
  }

  selectCheckAll():void{
    let months=["january","february","march","april","may","june","july","august","september","october","november","december"];
    months.map( m=>{ this.formData.get("periodicity").get(m).setValue(true) } );
  }

  deselectCheckAll():void{
    let months=["january","february","march","april","may","june","july","august","september","october","november","december"];
    months.map( m=>{ this.formData.get("periodicity").get(m).setValue(false) } );
  }

  formDataSubmit(){
    if(this.isNew){
      /** New Fixed Income */
      this.formData.controls.user_fk.setValue(this._util.getDataUser("id"));
      this._http.newFixedExpense(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Creación Exitosa", "El egreso fijo fue creado con éxito", "success");
            this.return();
          }
          else{ this._util.budAlert("Error", "El egreso fijo no pudo ser creado, por favor intenta más tarde.", "error"); }
        },
        err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
      );
    }
    else{
      this._http.updateFixedExpense(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Actualización Exitosa", "El egreso fijo fue actualizado con éxito", "success"); 
            this._router.navigate(['../../details', this.idFE], {relativeTo: this._route});
          }
          else{ this._util.budAlert("Error", "El egreso fijo no pudo ser creado, por favor intenta más tarde.", "error"); }
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
