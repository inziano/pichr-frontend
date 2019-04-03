import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EndpointsService } from '../../core/shared/endpoint.service';

// Rx imports
import { map } from 'rxjs/internal/operators';
import { from, Observable } from 'rxjs';

// Other
import { saveAs} from 'file-saver';

@Injectable()

export class MediaService {

    // Upload path
    upload: string;
    items: Observable<object[]>;

    // constructor
    constructor ( private http: Http, private endpoint: EndpointsService ) {
        // Upload endpoint path
        this.upload = this.endpoint.fullUrl + 'posts/create';
    }

    /*
     * File upload
     */
    public fileUpload(formData: FormData) {
        // Body
        const body = formData;
        // upload
        return this.http.post(this.upload, body, this.endpoint.option).pipe( map ( response => {
            return response.json();
        })).subscribe();
    }

    /**
     *
     * Image fetch
     */
    public fetchImage(): Array<object[]> {

      // Get image endpoint
        // return 'sth';
        const items: any[] = [];
        const params = {
            Bucket: 'pichr'
        };

       this.endpoint.bucket.listObjects(params, (err, data) => {
            const raw = data.Contents;

            // console.log(raw);

            raw.forEach( (item) => {
                items.push ({
                    id: item.ETag,
                    title: item.Key,
                    url: 'http://127.0.0.1:9000/pichr/' + item.Key
                });
            });
        });

        return items;
    }

    /**
     * 
     * Image download
     */

    public download(title) {
        // Params
        const params = {
            Bucket: 'pichr',
            Key: title
        };

        // Download
        this.endpoint.bucket.getObject( params, ( err, data ) => {
            // error
            if ( err ) {
                console.log(err.stack);
            }

            // console.log(data.Body.valueOf());

            const image = data.Body.toString();

            const pichr = new Blob([image], {type: 'data.ContentType'});

            // console.log(data.ContentType);

            saveAs(pichr, title);

        });
    }

}
