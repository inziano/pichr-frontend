import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Service imports
import { MediaService } from '../shared/media.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html'
})

export class UploadComponent implements OnInit {

    @ViewChild('file') file;
    // Upload form
    uploadForm: FormGroup;

    // Image path
    path: any = 'Upload image';

    // Response
    response;
    responseClass;

    // Images
    images;
    // constructor
    constructor(private fb: FormBuilder, private media: MediaService, private modal: NgbActiveModal ) {}

    // On component initialization
    ngOnInit() {
        // Build upload form
        this.uploadForm = this.fb.group({
            title: ['', Validators.required ],
            description: ['', Validators.required]
        });

        this.images = [];
    }

    // Upload image
    /**
     * Upload
     */
    uploadImage() {
        // Create data and pass it to the service
        // Form details
        const { title,
             description,
             views,
             category,
             user }: { title: any; description: string; views: number; category: number; user: number; } = this.fields();

        // Check if there's a files selected
        if ( this.images.files && this.images.files[0] ) {
            // new formdata
            const formData = new FormData();
            // append uploaded images here
            this.buildForm(formData, title, description, views, category, user);
            // Call upload service and pass the data here.
            this.media.fileUpload(formData);
        } else {
            // Set response class
            this.responseClass = 'warning';
            // Inform user to upload image
            this.response = 'Please upload image';
        }
    }

    // File upload from filesystem
    uploadFile($event) {
        // Get the image
        this.images = $event.target;
        // Get the image name
        this.path = $event.target.files[0].name;

        // console.log($event.target); // outputs the first file

    }

    // close the modal
    close () {
        this.modal.close();
    }

    // Form fields
    private fields() {
        const title = this.uploadForm.value.title;
        const description: string = this.uploadForm.value.description;
        const views = 0;
        const category = 1;
        const user = 1;
        return { title, description, views, category, user };
    }

    // Build the form
    private buildForm(formData: FormData, title: any, description: string, views: number, category: number, user: number) {
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', this.images.files[0]);
        formData.append('number_of_views', views);
        formData.append('categories_id', category);
        formData.append('user_id', user);
    }

   

}
