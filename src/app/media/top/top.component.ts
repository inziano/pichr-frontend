import { Component, OnInit } from '@angular/core';

// Service imports
import { MediaService } from '../shared/media.service';

declare var macy: any;
// Component imports

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.css'],
})

export class TopComponent implements OnInit {

    images: any[];
    // constructor
    constructor ( private media: MediaService ) {

    }
    // On component init
    ngOnInit() {

        // Populate the images
        this.images = this.media.fetchImage();
        // Macy js
        macy({
            container: '.image-holder',
            trueOrder: false,
            waitForImages: false,
            useOwnImageLoader: false,
            debug: true,
            mobileFirst: true,
            columns: 1,
            margin: 2,
            breakAt: {
                1200: 3,
                940: 3,
                520: 2,
                400: 2
            }
        });

       
    }
}
