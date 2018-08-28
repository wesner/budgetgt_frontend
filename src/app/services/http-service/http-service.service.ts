import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlBase = "http://localhost:8080/proyect/";

@Injectable()
export class HttpService{
  constructor(private http: HttpClient){ }

  getCountry():Observable<any>{
    return this.http.get("http://api.wipmania.com/jsonp?callback=?");
  }


}
