$(function() {
    $.ajax({
        url: (window.location.protocol === 'https:' ? 'https://secure' : 'http://api') + '.flickr.com/services/rest/',
        data: {
          //All flickr info to pull data in json format//
            format: 'json',
            method: 'flickr.photosets.getPhotos',
            api_key: '3adcf8bb0b80436dfde9f78c5958d441',
            photoset_id: '72157694293065414'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var linksContainer = document.getElementById("flickr-gallery");
        var baseUrl;

    // Add Flickr Photos from FEWD set...
        $.each(result.photoset.photo, function (index, photo) {
            baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret;

            // build the div to put everything in
            var div = document.createElement("div");

            // build the image element
            var img = document.createElement("img");
            img.src = baseUrl + "_z.jpg";

            // add the link to the div as a child
            div.appendChild(img);

            // add the div into the links container
            linksContainer.appendChild(div);
        });
    });
});


//test//
