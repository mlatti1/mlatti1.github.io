let basetwo = L.map('mapthree').setView([11, 69], 4);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(basetwo);
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
