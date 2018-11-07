import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';

@Component({
  selector: 'app-history-incomes',
  templateUrl: './history-incomes.component.html',
  styleUrls: ['./history-incomes.component.css']
})
export class HistoryIncomesComponent implements OnInit {

  listIncomes: Observable<any[]>;
  formData: FormGroup;
  isView: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _http: HttpService,
    public _util: UtilService
  ){
    this.formData = this._fb.group({
      dateStart:['', ValidationService.requiredValidator],
      dateEnd:['', ValidationService.requiredValidator]
    });
  }

  ngOnInit(){
  }

  formDataSubmit(){
    this.isView = true;
    this.listIncomes = this._http.getHistoryIncomesByUser(this._util.getDataUser("id"),this.formData.controls.dateStart.value,this.formData.controls.dateEnd.value);
  }

}
