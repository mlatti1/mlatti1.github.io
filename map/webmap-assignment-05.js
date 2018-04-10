let mymap = L.map('map5').setView([39, -98], 4)

let grayBasemapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
let grayBasemap = L.titleLayer(grayBasemapUrl)
grayBasemap.addTo(mymap)

let satelliteUrl = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
let satelliteBasemap = L.titleLayer(satelliteUrl)


let myBasemaps = {
  'Light basemap' : grayBasemap,
  'Satellite' : satelliteBasemap
}

let myControlOptions = {
  collapsed: false
}

let opLayers = {}

L.control.layers(myBasemaps, opLayers, myControlOptions).addTo(mymap)
