import { Component, OnInit } from '@angular/core';

// Service imports
import { MediaService } from '../shared/media.service';

// Component imports

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.css'],
})

export class TopComponent implements OnInit {

    images: any[];
    // constructor
    constructor ( private media: MediaService ) { }
    // On component init
    ngOnInit() {

        // Populate the images
        this.images = this.media.fetchImage();
    }
}
