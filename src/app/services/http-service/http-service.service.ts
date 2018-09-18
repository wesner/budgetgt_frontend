import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Country, Account } from '../../data-models/catalogs';
import { retry, catchError } from 'rxjs/operators';


const attemps = 3; /* Número de intentos para hacer una petición al servidor */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'c@g8?av[R-nSQDv6a&>~;u/&JBDXK-.ty.]Maw>R_~6)THvy3<waN/V/3{4qRvHd}HY{<T:yq$wc(HZsy]Fvw~gzv3@sap59jMbhU#CwbcrX4GE<Ss$X}m]A:Vk*JSM,v)sQBPDqQm]Hur<~[k.X~p$2(7?Vs]:zs:nN(HqeqB/v5.q]j=PFw(C?5s(?rQfF#hK2+7c~t7DG$3LFM$3+}>8]z6r*R:v@QcuB#HqhM9*v:F^5c-~QK3a;)b'
  })
};
const urlBase = "http://192.168.1.61:8080/budgetgt/resources/";

@Injectable()
export class HttpService{
  constructor(private http: HttpClient){}


  /**
   * -----------------------------------------------------------------------------
   * Módulo de seguridad
   * @code 10000
   * -----------------------------------------------------------------------------
   */
  public register(newUser: any):Observable<any>{
    return this.http.post(`${urlBase}10000/10001`, newUser, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public getUserById(idUser:number|string):Observable<any>{
    return this.http.get(`${urlBase}10000/10001/${idUser}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public updateUser(user:any):Observable<any>{
    return this.http.put(`${urlBase}10000/10001/`,user, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public deleteAccountById(value:any):Observable<any>{
    return this.http.post(`${urlBase}10000/10004/`,value, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public login(user: any):Observable<any>{
    return this.http.post(`${urlBase}10000/10002`, user, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public updatePassword(pass: any):Observable<any>{
    return this.http.post(`${urlBase}10000/10003`, pass, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }




  /**
   * -----------------------------------------------------------------------------
   * Catalogs
   * @code 20000
   * -----------------------------------------------------------------------------
   */
  public getAllCountries():Observable<HttpResponse<Country[]>>{
    return this.http.get<Country[]>(`${urlBase}20000/20001`, { observe: 'response', headers:httpOptions.headers}).pipe(retry(attemps));
  }

  /**
   * accounts
   * @code 20011 - 20012
   */
  public newAccount(account: Account):Observable<any>{
    return this.http.post(`${urlBase}20000/20011`, account, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public updateAccount(account: Account):Observable<any>{
    return this.http.put(`${urlBase}20000/20011`, account, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public deleteAccount(idAccount: number|string):Observable<any>{
    return this.http.delete(`${urlBase}20000/20011/${idAccount}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public getAllAccountByUser(idUser: number|string):Observable<HttpResponse<Account[]>>{
    return this.http.get<Account[]>(`${urlBase}20000/20011/${idUser}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public getAccountById(idAccount: number|string):Observable<Account>{
    return this.http.get<Account>(`${urlBase}20000/20012/${idAccount}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }




  /**
   * -----------------------------------------------------------------------------
   * Manejo de errores en las peticiones http
   * -----------------------------------------------------------------------------
   */
  /**
   * @param error 
   */
  private handleError(error: HttpErrorResponse):Observable<any>{
    if(error.error instanceof ErrorEvent){
      //console.error('A ocurrido un error:', error.error.message);
    }
    else{
      // console.error(
      //   `El servidor retorno el codigo: ${error.status}, ` +
      //   `Fue: ${error.error}`);
    }
    return throwError(error);
    // return throwError('Un error sucedio; Por favor, inténtelo de nuevo más tarde.');
  }
}
