$(document).ready(function(){

    var masonry = new Macy({
        container: '.image-holder',
        trueOrder: false,
        waitForImages: true,
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

});

