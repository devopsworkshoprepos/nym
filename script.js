let mapOptions = {
    center:[40.75703,-73.98597],
    zoom:12
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

// let marker = new L.Marker([40.75703,-73.98597]);
// marker.addTo(map);


const marker = L.marker([40.75703,-73.98597]).addTo(map)
		.bindPopup('<b>Time Square</b><br />Famous for new year celebrations.').openPopup();

