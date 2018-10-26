import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Service imports
import { BackendService } from '../shared/backend.service';
import { DynamicService } from '../../core/shared/dynamic.service';
import { SessionService } from '../../core/shared/session.service';

// Component imports
import { UploadComponent } from '../../media/upload/upload.component';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    // Search form model
    search = new FormControl();

    // data
    resp: any;

    // status
    status: any;

    // ViewChild
    @ViewChild('content', {
        read: ViewContainerRef
    })

    ViewContainerRef: ViewContainerRef;

    // Constructor
    // tslint:disable-next-line:max-line-length
    constructor ( private backend: BackendService, private dynamic: DynamicService, private modal: NgbModal, private session: SessionService ) {
    }

    ngOnInit() {
        // console.log ( JSON.parse(this.session.getToken()) );
    }

    // Open
    open(content) {
        // Open modal with backdrop
        const modalRef = this.modal.open(UploadComponent, { centered: true });
    }
}
