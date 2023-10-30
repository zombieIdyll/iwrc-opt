import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, observable, throwError, from } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
// services //
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
      
  //REST_API_SERVER = "https://iwrcapps.netlify.app/home"; 
    REST_API_SERVER = "http://localhost:3000";

  constructor(private http: HttpClient) { }
GetProducts(): Observable<Product> {
    return this.http.get<Product>(this.REST_API_SERVER + '/products');
  }
}