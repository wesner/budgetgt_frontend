import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const token = "c@g8?av[R-nSQDv6a&>~;u/&JBDXK-.ty.]Maw>R_~6)THvy3<waN/V/3{4qRvHd}HY{<T:yq$wc(HZsy]Fvw~gzv3@sap59jMbhU#CwbcrX4GE<Ss$X}m]A:Vk*JSM,v)sQBPDqQm]Hur<~[k.X~p$2(7?Vs]:zs:nN(HqeqB/v5.q]j=PFw(C?5s(?rQfF#hK2+7c~t7DG$3LFM$3+}>8]z6r*R:v@QcuB#HqhM9*v:F^5c-~QK3a;)b";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
const urlBase = "http://localhost:8080/proyect/";

@Injectable()
export class HttpService{
  constructor(private http: HttpClient){ }

  getCountry():Observable<any>{
    return this.http.get("http://api.wipmania.com/jsonp?callback=?");
  }

  
}
