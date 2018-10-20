import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { FixedIncome } from 'src/app/data-models/catalogs';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/utilities/util.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'details-fi',
  templateUrl: './details-fi.component.html',
  styleUrls: ['./details-fi.component.css']
})
export class DetailsFiComponent implements OnInit {

  idFI: number;
  fixedIncome$: Observable<FixedIncome>;

  constructor(
    private _http: HttpService,
    public _util: UtilService,
    private _route: ActivatedRoute,
    private _router: Router    
  ){}

  ngOnInit(){
    this.idFI = parseInt(this._route.snapshot.paramMap.get("id"));
    this.fixedIncome$ = this._http.getFixedIncomeById(this.idFI);
  }

  return(){
    this._router.navigate(['../../list'], {relativeTo: this._route});
  }

  edit(){
    this._router.navigate(['../../edit', this.idFI], {relativeTo: this._route});
  }
}
