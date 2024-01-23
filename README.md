# nym

A simple interactive map of NY with points of interest.

## How does it work?

The site uses LeafletJS library to display an interactive map, with markers added to display points of interest using Javascript.

An example marker can be viewed in script.js
```
const marker = L.marker([40.75703,-73.98597]).addTo(map)
		.bindPopup('<b>Time Square</b><br />Famous for new year celebrations.').openPopup();

```

## How to add a marker?

Visit https://www.openstreetmap.org/search?query=times%20square#map=14/40.7550/-73.9763&layers=N

Zoom in and out to find a point of interest.

Right click on the map at a point of interest, and select *Show address*

The latitude and longitide will be displayed in the sidebar.

Make a note of these coordinates

Add a marker to the script.js and ensure it works

## Where can I learn about Leaflet?

You can view the documentation at https://leafletjs.com/reference.html


