$(document).ready(function () {
    let amenities_checked = [];
    var checkbox = $('input[type=checkbox]');
    let amenities_names = [];
    checkbox.change(function () {
      $('.amenities h4').text('');
      let amenity_id = $(this).attr('data-id');
      let name = $(this).attr('data-name');
      if ($(this).is(':checked')) {
          amenities_checked.push(amenity_id);
          amenities_names.push(name);
      } else {
          var index = amenities_checked.indexOf(amenity_id);
          amenities_checked.splice(index, 1);
          amenities_names.splice(index, 1);
      }
      $('.amenities h4').text(amenities_names.join(', '));
    });
  
    const url = 'http://0.0.0.0:5001/api/v1/status/';
    $.get(url, function (data, textStatus, jqXHR) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
    
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5002/api/v1/places_search/',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function (data) {
            console.log(data);
            for (let i = 0; i < data.length; ++i) {
            let html = '<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="user"></div><div class="description">' + data[i].description + '</div></article>';
            $('.places').append(html);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        }
    });

    $('#apply-filters').click(function () {
        const amenitiesIds = amenities_checked;
        const postData = { amenities: amenitiesIds };

        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function (data) {
                // Clear existing places and add new filtered places
                $('.places').empty();
                for (let i = 0; i < data.length; ++i) {
                    // Create and append the HTML for filtered places
                    // (similar to what you did in the existing code)
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    });
    
});
