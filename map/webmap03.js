let mybase = L.map('maptwo').setView([40, -40], 2);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(mybase);
let mymarkertwo = L.marker([40, -31]).addTo(mybase);
mymarkertwo.bindPopup('this is a maker on the map!');
let myicon = L.icon({
 iconUrl: 'icon.png',
 iconSize: [25, 25],
 iconAnchor: [5, -5],
 popupAnchor: [-10, -100]
});
L.marker([10, -10], {icon: myicon}).addTo(mybase);
let style = {
 color: 'blue',
 weight: 5,
 fillOpacity: 0.5,
 lineJoin: 'bevel'
}
let cord = [
 [40, -14],
 [40, -17],
 [30, -14],
 [30, -17]
];
let poly = L.polygon(cord, style).addTo(mybase)
