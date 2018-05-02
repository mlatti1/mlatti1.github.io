function initMap() {
  var mycenter = {lat: 29.757952, lng: -95.355600};
  var mymap = new google.maps.Map(document.getElementById('bonus'), {
    zoom: 17,
    center: mycenter,
    mapTypeId: 'satellite'
  });
  var mark = new google.maps.Marker({
    position: mycenter,
    map: bonus
  });
}
