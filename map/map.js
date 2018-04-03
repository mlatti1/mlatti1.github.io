let mapone = L.map('mapone').setView([13, -.01], 9);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(mapone);
let markerone = L.marker([14, 14]).addTo(mapone);
let polygonone = L.polygon([
  [14, -14],
  [30, -30],
  [71, -12]
]).addTo(mapone);
polygonone.bindPopup('my polygon');
markerone.bindPopup('my marker');
function logCurser (event) {
  console.log('where you at yooo' + event.latlng)
};
baseMap.on('Click.', logCurser);
var polylineone = [
    [14, -21],
    [1, 2],
    [4, 5]
];
var polylineone = L.polyline(polylineone, {color: 'red'}).addTo(mapone);
mapone.fitBounds(polylineone.getBounds());
