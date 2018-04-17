let basetwo = L.map('mapthree').setView([31, -90], 8);
let lay1 = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(basetwo);
let lay2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
let lay3 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png');
let lays = {
  'basic': lay1,
  'gray': lay2,
  'sat': lay3
}
L.control.layers(lays).addTo(basetwo)
L.geoJSON(mygeojson).addTo(basetwo)
let style = {
  color: 'red',
  weight: 3,
  dashArray: '3',
  fillOpacity: 0.
}
let options = {
 style: style,
 onEachFeature: geopopup
}
L.geoJson(mygeojson, options).addTo(basetwo);
function geopopup (feature, layer) {
 let id = feature.properties.Industrial_Area_No
 layer.bindPopup(id)
}
