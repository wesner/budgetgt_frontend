import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { ValidationService } from 'src/app/utilities/message-error/form-validation/service-form-validation';

@Component({
  selector: 'app-history-expenses',
  templateUrl: './history-expenses.component.html',
  styleUrls: ['./history-expenses.component.css']
})
export class HistoryExpensesComponent implements OnInit {

  listExpenses: Observable<any[]>;
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
    this.listExpenses = this._http.getHistoryExpensesByUser(this._util.getDataUser("id"),this.formData.controls.dateStart.value,this.formData.controls.dateEnd.value);
  }

}
