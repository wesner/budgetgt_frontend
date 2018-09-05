import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http-service/http-service.service';
import { UtilService } from '../../utilities/util.service';
import { map, tap } from 'rxjs/operators';
import { AESService } from '../../utilities/aes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data$: Observable<any>;
  tmpData: any;

  constructor(private _http: HttpService, public _util:UtilService, private aes:AESService){ }

  ngOnInit() {

    // this.data$ = this._http.getJSON()
    // .pipe(
    //   map(
    //     x=>x=this._util.decryptJSON(x)
    //   )
    // );

    // this._http.getJSON()
    // .subscribe(
    //   dat=>{
    //     for(let element in dat){
    //       dat[element] = this.aes._AESdecrypt(dat[element]);
    //     }
    //   },
    //   err=>{}
    // );
  }

}
