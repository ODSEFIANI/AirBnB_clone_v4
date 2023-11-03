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
});