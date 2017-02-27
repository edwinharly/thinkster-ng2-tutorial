import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
* This class provides the Api service with methods to read names and add names.
*/
@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    return new Headers(headersConfig);
  }

  private formatErrors(error) {
    return Observable.throw(error.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body), {headers: this.setHeaders() })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

/**
* Handle HTTP error
*/
/*
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `error.status - error.statusText` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
*/
}
