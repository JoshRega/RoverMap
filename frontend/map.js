import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const map = L.map('map').setView([38.4375, -110.8125], 17);
export const pathLayer = L.layerGroup();
export const pointLayer = L.layerGroup();
export const circleLayer = L.layerGroup();
const tileLayer = L.tileLayer('/utah-tiles-2/{z}/{x}/{y}.png', {
    attribution: 'GE Satellite Data',
    maxZoom: 19,
    minZoom: 10,
    tileSize: 256,
    noWrap: true,
});

tileLayer.on('tileerror', function (e) {
    const img = e.tile;
    img.src = '../map-placeholder.png'; // placeholder image for if tiles don't load
});

tileLayer.addTo(map);

/*Why  multiple layers? Super easy to hide markers based on what type if wanted to
 Just decided not to unless asked because I dont want to clutter the RoverMap UI -Josh 12/14/25
*/
pathLayer.addTo(map);
pointLayer.addTo(map);
circleLayer.addTo(map);


console.log(new URL('/utah-tiles-2/17/25188/50355.png', window.location.href).href);
