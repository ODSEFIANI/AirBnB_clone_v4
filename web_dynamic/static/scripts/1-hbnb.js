$(document).ready(function () {
  let amenities_checked = [];
  var checkbox = $('.amenity-checkbox');
  checkbox.change(function () {
    $('.amenities h4').text('');
    let amenity_id = checkbox.attr('data-id');
    if (checkbox.is(':checked')) {
      amenities_checked.push(amenity_id);
    } else {
      var index = amenities_checked.indexOf(amenity_id);
      amenities_checked.splice(index, 1);
    }
    for (let i = 0; i < amenities_checked.length; i++) {
      if (i === 0) {
        $('.amenities h4').append(checkbox.attr('data-name'));
      } else {
        $('.amenities h4').append(', ' + checkbox.attr('data-name'));
      }
    }
  });
});