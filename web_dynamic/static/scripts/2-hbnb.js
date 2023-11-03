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
// task 3
  const url = 'http://0.0.0.0:5001/api/v1/status/'
  $.get(url, function (data, textStatus, jqXHR) {
    if (data.status === "OK") {
      $("div#api_status").addClass("available");
    } else {
      $("div#api_status").removeClass("available");
    }
  });
});
