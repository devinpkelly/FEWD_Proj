//Adds pertinent information to pull images from my flickr using API key, and a designated photoset ID//

$.ajax({
    url: (window.location.protocol === 'https:' ? 'https://secure' : 'http://api') + '.flickr.com/services/rest/',
    data: {
        format: 'json',
        method: 'flickr.photosets.getPhotos',
        api_key: '3adcf8bb0b80436dfde9f78c5958d441',
        photoset_id: '72157691328964952'
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
}).done(function (result) {
    var linksContainer = $('#links'),
    baseUrl;

// Add Flickr Photos from FEWD set...
    $.each(result.photoset.photo, function (index, photo) {
        baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret;
       $('<a/>').append($('<img></img>').prop("src", baseUrl + "_s.jpg"))
        .prop('href', baseUrl + '_b.jpg')
        .prop('title', photo.title)
        .attr('data-gallery', '')
        .appendTo(linksContainer);
    });
});
