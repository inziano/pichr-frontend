import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()

export class EndpointsService {

    // This service connects the api.
    public baseUrl = 'http://localhost:8000/';
    public apiUrl = 'api/';
    public fullUrl = this.baseUrl + this.apiUrl;
    // Headers
    public headers = new Headers({ 'Content-Type': 'application/json' });
    // Form data headers
    public header = new Headers({ 'enctype': 'multipart/form-data' });
    // Options
    public options = new RequestOptions({ headers: this.headers });
    // form data option
    public option = new RequestOptions({headers: this.header});

}