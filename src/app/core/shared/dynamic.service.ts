import { ComponentFactoryResolver, Injectable } from '@angular/core';

// Component import
import { UploadComponent } from './../../media/upload/upload.component';

@Injectable()

export class DynamicService {

    // Variables
    rootViewContainer: any;

    // Constructor
    constructor ( private factoryResolver: ComponentFactoryResolver ) {}

    setRootViewContainerRef(viewContainerRef) {

        this.rootViewContainer = viewContainerRef;
    }

    addDynamicComponent (compnt) {

        const factory = this.factoryResolver.resolveComponentFactory(compnt);

        const component = factory.create(this.rootViewContainer.parentInjector);

        this.rootViewContainer.insert(component.hostView);
    }

}