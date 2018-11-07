import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Country, Account, Category, FixedIncome, FixedExpense } from '../../data-models/catalogs';
import { retry, catchError } from 'rxjs/operators';
import { creditCard, PaymentCreditCard, HistoryPaymentCreditCard } from 'src/app/data-models/credit-card';
import { Income, Expense } from 'src/app/data-models/budgets';


const attemps = 3; /* Número de intentos para hacer una petición al servidor */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'c@g8?av[R-nSQDv6a&>~;u/&JBDXK-.ty.]Maw>R_~6)THvy3<waN/V/3{4qRvHd}HY{<T:yq$wc(HZsy]Fvw~gzv3@sap59jMbhU#CwbcrX4GE<Ss$X}m]A:Vk*JSM,v)sQBPDqQm]Hur<~[k.X~p$2(7?Vs]:zs:nN(HqeqB/v5.q]j=PFw(C?5s(?rQfF#hK2+7c~t7DG$3LFM$3+}>8]z6r*R:v@QcuB#HqhM9*v:F^5c-~QK3a;)b'
  })
};
const urlBase = "http://localhost:8080/budgetgt/resources/";

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
  public getAllTypesOfPayments():Observable<HttpResponse<any[]>>{
    return this.http.get<any[]>(`${urlBase}20000/20002`, { observe: 'response', headers:httpOptions.headers}).pipe(retry(attemps));
  }  

  /**
   * accounts
   * @code 20011 - 20013
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
  public getAccountByIds(idAccount: number|string):Observable<Account>{
    return this.http.get<Account>(`${urlBase}20000/20012/${idAccount}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  } 
  /**
   * categories
   * @code 20020 - 20022
  */
  public newCategory(item: Category):Observable<any>{
    return this.http.post(`${urlBase}20000/20020`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public updateCategory(item: Category):Observable<any>{
    return this.http.put(`${urlBase}20000/20020`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public deleteCategory(id: number|string):Observable<any>{
    return this.http.delete(`${urlBase}20000/20020/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getAllCategoriesByUser(id: number|string):Observable<HttpResponse<Category[]>>{
    return this.http.get<Category[]>(`${urlBase}20000/20020/${id}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getCategoryById(id: number|string):Observable<Category>{
    return this.http.get<Category>(`${urlBase}20000/20021/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public GetCategoriesByIds(ids: string):Observable<Category>{
    return this.http.get<Account>(`${urlBase}20000/20022/${ids}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  /**
   * fixed incomes
   * @code 20030 - 20033
  */
  public newFixedIncome(item: FixedIncome):Observable<any>{
    return this.http.post(`${urlBase}20000/20030`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public updateFixedIncome(item: FixedIncome):Observable<any>{
    return this.http.put(`${urlBase}20000/20030`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public deleteFixedIncome(id: number|string):Observable<any>{
    return this.http.delete(`${urlBase}20000/20030/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getAllFixedIncomesByUser(id: number|string):Observable<HttpResponse<FixedIncome[]>>{
    return this.http.get<FixedIncome[]>(`${urlBase}20000/20030/${id}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getFixedIncomeById(id: number|string):Observable<FixedIncome>{
    return this.http.get<FixedIncome>(`${urlBase}20000/20031/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public GetFixedIncomesByIds(ids: string):Observable<FixedIncome>{
    return this.http.get<Account>(`${urlBase}20000/20032/${ids}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getFixedIncomeByIdForUpdate(id: number|string):Observable<FixedIncome>{
    return this.http.get<FixedIncome>(`${urlBase}20000/20033/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  /**
   * fixed expenses
   * @code 20040 - 20043
  */
  public newFixedExpense(item: FixedExpense):Observable<any>{
    return this.http.post(`${urlBase}20000/20040`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public updateFixedExpense(item: FixedExpense):Observable<any>{
    return this.http.put(`${urlBase}20000/20040`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public deleteFixedExpense(id: number|string):Observable<any>{
    return this.http.delete(`${urlBase}20000/20040/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getAllFixedExpensesByUser(id: number|string):Observable<HttpResponse<FixedExpense[]>>{
    return this.http.get<FixedExpense[]>(`${urlBase}20000/20040/${id}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getFixedExpenseById(id: number|string):Observable<FixedExpense>{
    return this.http.get<FixedExpense>(`${urlBase}20000/20041/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public GetFixedExpensesByIds(ids: string):Observable<FixedExpense>{
    return this.http.get<Account>(`${urlBase}20000/20042/${ids}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getFixedExpenseByIdForUpdate(id: number|string):Observable<FixedExpense>{
    return this.http.get<FixedIncome>(`${urlBase}20000/20043/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  /**
   * -----------------------------------------------------------------------------
   * Credit Cards
   * @code 40000
   * -----------------------------------------------------------------------------
   */
  public newCreditCard(item: creditCard):Observable<any>{
    return this.http.post(`${urlBase}40000/40010`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public updateCreditCard(item: creditCard):Observable<any>{
    return this.http.put(`${urlBase}40000/40010`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public deleteCreditCard(id: number|string):Observable<any>{
    return this.http.delete(`${urlBase}40000/40010/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getAllCreditCardsByUser(id: number|string):Observable<HttpResponse<creditCard[]>>{
    return this.http.get<creditCard[]>(`${urlBase}40000/40010/${id}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getCreditCardById(id: number|string):Observable<creditCard>{
    return this.http.get<creditCard>(`${urlBase}40000/40011/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public GetCreditCardsByIds(ids: string):Observable<creditCard>{
    return this.http.get<Account>(`${urlBase}40000/40012/${ids}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public newPaymentCreditCard(item: PaymentCreditCard):Observable<any>{
    return this.http.post(`${urlBase}40000/40020`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public GetAllPaymentCreditCard(id:string, dateStat:string, dateEnd:string):Observable<HistoryPaymentCreditCard[]>{
    return this.http.get<HistoryPaymentCreditCard>(`${urlBase}40000/40021/${id}/${dateStat}/${dateEnd}/`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  /**
   * -----------------------------------------------------------------------------
   * Budgets
   * @code 40000
   * -----------------------------------------------------------------------------
   */

  /**
   * incomes
   * @code 50010 - 50011
  */
  public newIncome(item: Income):Observable<any>{
    return this.http.post(`${urlBase}50000/50010`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public updateIncome(item: Income):Observable<any>{
    return this.http.put(`${urlBase}50000/50010`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public deleteIncome(id: number|string):Observable<any>{
    return this.http.delete(`${urlBase}50000/50010/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  // public getAllIncomesCurrentsByUser(id: number|string):Observable<HttpResponse<Income[]>>{
  //   return this.http.get<Income[]>(`${urlBase}50000/50010/${id}`, {observe:'response', headers: httpOptions.headers})
  //   .pipe(
  //     retry(attemps),
  //     catchError(this.handleError)
  //   );
  // }
  public getIncomeById(id: number|string):Observable<Income>{
    return this.http.get<Income>(`${urlBase}50000/50011/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  /**
   * expenses
   * @code 50020 - 50021
  */
  public newExpense(item: Expense):Observable<any>{
    return this.http.post(`${urlBase}50000/50020`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public updateExpense(item: Expense):Observable<any>{
    return this.http.put(`${urlBase}50000/50020`, item, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public deleteExpense(id: number|string):Observable<any>{
    return this.http.delete(`${urlBase}50000/50020/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getExpenseById(id: number|string):Observable<Expense>{
    return this.http.get<Expense>(`${urlBase}50000/50021/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
      );
  }
  
  
  public getAllExpensesCurrentsByUser(id: number|string):Observable<any[]>{
    return this.http.get<any[]>(`${urlBase}50000/50022/${id}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getHistoryExpensesByUser(id: number|string, dateStart:string, dateEnd:string):Observable<any[]>{
    return this.http.get<any[]>(`${urlBase}50000/50023/${id}/${dateStart}/${dateEnd}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }


  public getAllIncomesCurrentsByUser(id: number|string):Observable<any[]>{
    return this.http.get<any[]>(`${urlBase}50000/50024/${id}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  public getHistoryIncomesByUser(id: number|string, dateStart:string, dateEnd:string):Observable<any[]>{
    return this.http.get<any[]>(`${urlBase}50000/50025/${id}/${dateStart}/${dateEnd}`, {observe:'response', headers: httpOptions.headers})
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }
  
  public getIndicatorsByUser(id: number|string):Observable<any>{
    return this.http.get<any>(`${urlBase}50000/50026/${id}`, httpOptions)
    .pipe(
      retry(attemps),
      catchError(this.handleError)
    );
  }

  public getBalanceByUser(id: number|string):Observable<any>{
    return this.http.get<any>(`${urlBase}50000/50027/${id}`, httpOptions)
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
