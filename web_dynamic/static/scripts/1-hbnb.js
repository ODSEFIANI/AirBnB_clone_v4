$(document).ready(function () {
  let amenities_checked = [];
  var checkbox = $('.amenity-checkbox');
  checkbox.change(function () {
    let amenity_id = checkbox.attr('data-id');
    if (checkbox.is(':checked')) {
      amenities_checked.push(amenity_id);
    } else {
      var index = amenities_checked.indexOf(amenity_id);
      amenities_checked.splice(index, 1);
    }
    amenities_checked.forEach(id => {
      $('.amenities h4').text(id);
    });
  });
});