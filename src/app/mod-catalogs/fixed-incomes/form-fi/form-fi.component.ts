import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../utilities/util.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/data-models/catalogs';

@Component({
  selector: 'form-fi',
  templateUrl: './form-fi.component.html',
  styleUrls: ['./form-fi.component.css']
})
export class FormFiComponent implements OnInit {

  isNew: boolean = true;
  idFI: number;
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
      payday: [0, [ValidationService.selectValidator]],
      account_fk: [0, [ValidationService.selectValidator]],
      category_fk: [0, [ValidationService.selectValidator]],
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
    this.isNew = (this._router.url.indexOf("/main/catalogs/fixed-incomes/new")!=-1);
    this.idFI = this.isNew?0:parseInt(this._route.snapshot.paramMap.get("id"));

    if(this.idFI > 0){
      this._http.getFixedIncomeByIdForUpdate(this.idFI).subscribe(
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
      this._http.newFixedIncome(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Creación Exitosa", "El ingreso fijo fue creada con éxito", "success");
            this.return();
          }
          else{ this._util.budAlert("Error", "El ingreso fijo no pudo ser creado, por favor intenta más tarde.", "error"); }
        },
        err=>{ this._util.budAlert("Error en comunicación", "Ocurrio un error en la comnicación, por favor intenta más tarde.", "error"); }
      );
    }
    else{
      this._http.updateFixedIncome(this.formData.value).subscribe(
        resp=>{
          if(resp.success){ 
            this._util.budAlert("Actualización Exitosa", "El ingreso fijo fue actualizado con éxito", "success"); 
            this._router.navigate(['../../details', this.idFI], {relativeTo: this._route});
          }
          else{ this._util.budAlert("Error", "El ingreso fijo no pudo ser creado, por favor intenta más tarde.", "error"); }
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
