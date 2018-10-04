import { Component, Input } from '@angular/core';

// Service imports
import { MediaService } from '../shared/media.service';

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html'
})

export class DownloadComponent {

    @Input('title') title: string;
    // Constructor
    constructor ( private media: MediaService ) { }

    public downloadImage () {
        // Pass title to service for download
        this.media.download(this.title);
        // console.log(this.title);
    }
}
