let map = L.map('mlbmap').setView([39.3, -96.63], 4);
let lay1 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png');
let lay2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
let lay3 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png');
let lays = {
  'basic': lay1,
  'gray': lay2,
  'sat': lay3
}
L.control.layers(lays).addTo(map)
function getColor(d) {
  return d === "National League East" ? 'Red' :
         d === "American League East" ? 'Blue':
         d === "National League Central" ? 'Yellow':
         d === "American League Central" ? 'Green':
         d === "National League West" ? 'Purple':
         d === "American League West" ? 'Orange':
         'Black';
}
function style (feature) {
  return {
    fillColor: getColor(feature.properties.League),
    weight: 1,
    opacity: 0.5,
    radius: 10,
    color: 'Orange',
    dashArray: '3',
    fillOpacity: 0.8
    };
}
function createCircles (feature, latlng) {
  return L.circleMarker(latlng, style)
}
let mapoptions = {
  style: style,
  pointToLayer: createCircles,
  onEachFeature: geopopup
}
L.geoJSON(baseball, mapoptions).addTo(map)
function geopopup (feature, layer) {
 let id = feature.properties.Team
 let name = feature.properties.Ballpark
 layer.bindPopup(id + "<br>" + name)
}
