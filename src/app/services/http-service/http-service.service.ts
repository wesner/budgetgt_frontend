import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Country } from '../../data-models/catalogs';
import { retry, catchError } from 'rxjs/operators';


const attemps = 3;
const token = "c@g8?av[R-nSQDv6a&>~;u/&JBDXK-.ty.]Maw>R_~6)THvy3<waN/V/3{4qRvHd}HY{<T:yq$wc(HZsy]Fvw~gzv3@sap59jMbhU#CwbcrX4GE<Ss$X}m]A:Vk*JSM,v)sQBPDqQm]Hur<~[k.X~p$2(7?Vs]:zs:nN(HqeqB/v5.q]j=PFw(C?5s(?rQfF#hK2+7c~t7DG$3LFM$3+}>8]z6r*R:v@QcuB#HqhM9*v:F^5c-~QK3a;)b";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':token
  })
};
const urlBase = "http://localhost:8080/budgetgt/resources/";

@Injectable()
export class HttpService{
  constructor(private http: HttpClient){ }


  /**
   * -- MODULO DE SEGURIDAD
   */
  public register(newUser: any):Observable<any>{
    return this.http.post(`${urlBase}10000/10001`, newUser, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }




  /**
   * Catalogs
   * @code 20000
   * @api  20001
   */
  public getAllCountries():Observable<Country[]>{
    return this.http.get<Country[]>(`${urlBase}20000/20001`, httpOptions).pipe(retry(attemps));
  }



  /**
   * Manejo de errores en las peticiones http
   * @param error 
   */
  private handleError(error: HttpErrorResponse):Observable<any>{
    if(error.error instanceof ErrorEvent){
      //console.error('A ocurrido un error:', error.error.message);
    }
    else{
      console.error(
        `El servidor retorno el codigo: ${error.status}, ` +
        `Fue: ${error.error}`);
    }
    return throwError('Un error sucedio; Por favor, inténtelo de nuevo más tarde.');
  }
}
