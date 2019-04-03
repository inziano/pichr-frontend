import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

// Minio
import * as aws from 'aws-sdk';
// import * as minio from 'minio';

@Injectable()

export class EndpointsService {

    // This service connects the api.
    public baseUrl = 'http://localhost:8000/';
    public apiUrl = 'api/';
    public fullUrl = this.baseUrl + this.apiUrl;

    // Image urls
    // Headers
    public headers = new Headers({ 'Content-Type': 'application/json' });
    // Form data headers
    public header = new Headers({ 'enctype': 'multipart/form-data' });
    // Options
    public options = new RequestOptions({ headers: this.headers });
    // form data option
    public option = new RequestOptions({headers: this.header});

    // AWS endpoint
    public bucket = new aws.S3 ( {
        accessKeyId: 'T3P6VYMYEUG0D9YLOZRY',
        secretAccessKey: 'pkFy5z4FUR0XHaqqS4voJbLXsFtXT884SwD63bkf',
        endpoint: 'http://127.0.0.1:9000',
        s3ForcePathStyle: true, // needed with minio?
        signatureVersion: 'v4'
    });

    // Pusher API key

}
