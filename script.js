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
		.bindPopup('<b>Time Square</b><br />Famous for new year celebrations.');

const marker2 = L.marker([40.74214, -73.98807]).addTo(map)
    .bindPopup('<b>Madison Square Park</b><br />A great park to walk around.');

const marker3 = L.marker([56.0014, -3.404]).addTo(map)
		.bindPopup('<b>Forth Bridge</b><br />  The first major structure in Britain to be made of steel.');

const marker4 = L.marker([40.76163,-73.97782]).addTo(map)
		.bindPopup('<b>Museum of Modern Arts</b><br />.').openPopup();
