import { Component, OnInit } from '@angular/core';
import { creditCard } from 'src/app/data-models/credit-card';
import { HttpService } from 'src/app/services/http-service/http-service.service';
import { UtilService } from 'src/app/utilities/util.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-cc',
  templateUrl: './details-cc.component.html',
  styleUrls: ['./details-cc.component.css']
})
export class DetailsCCComponent implements OnInit {

  idCC: number;
  creditCard: creditCard;
  isLoaded: boolean = false;

  constructor(
    private _http: HttpService,
    public _util: UtilService,
    private _route: ActivatedRoute,
    private _router: Router
  ){ }

  ngOnInit(){
    this.isLoaded = false;
    this.idCC = parseInt(this._route.snapshot.paramMap.get("id"));
    this._http.getCreditCardById(this.idCC).subscribe(
      resp=>{
        this.creditCard = resp;
        this.isLoaded = true;
      }
    );
  }

  return(){
    this._router.navigate(['../../list'], {relativeTo: this._route});
  }

  edit(){
    this._router.navigate(['../../edit', this.idCC], {relativeTo: this._route});
  }  
}
