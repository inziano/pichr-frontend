import { Component, OnInit, AfterViewInit } from '@angular/core';

// rxjs
import { map } from 'rxjs/operators';

// Service imports
import { MediaService } from '../shared/media.service';

// Other
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Component
import { DownloadComponent } from './../download/download.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css', './util.css']
})

export class ListComponent implements OnInit, AfterViewInit {
    // Data
    images: any[];
    details: any[];
    // Path
    // path: any = this.endpoint.imageUrl;

    constructor ( private media: MediaService, private modal: NgbModal ) {}

    ngOnInit () {

        this.images = this.media.fetchImage();
    }

    ngAfterViewInit () {
    }

    // Open
    open(content) {
        // Open modal with backdrop
        const modalRef = this.modal.open(DownloadComponent, { centered: true });
    }

}
