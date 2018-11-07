import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FixedExpense } from 'src/app/data-models/catalogs';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-fe',
  templateUrl: './details-fe.component.html',
  styleUrls: ['./details-fe.component.css']
})
export class DetailsFeComponent implements OnInit {

  idFE: number;
  fixedExpense$: Observable<FixedExpense>;  

  constructor(
    private _http: HttpService,
    public _util: UtilService,
    private _route: ActivatedRoute,
    private _router: Router
  ){ }


  ngOnInit(){
    this.idFE = parseInt(this._route.snapshot.paramMap.get("id"));
    this.fixedExpense$ = this._http.getFixedExpenseById(this.idFE);
  }

  return(){
    this._router.navigate(['../../list'], {relativeTo: this._route});
  }

  edit(){
    this._router.navigate(['../../edit', this.idFE], {relativeTo: this._route});
  }

}
