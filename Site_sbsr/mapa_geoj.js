// import Map from 'ol/Map.js';
// import View from 'ol/View.js';
import TileLayer from 'src/ol/layer/Tile.js';
import XYZ from 'src/ol/source/XYZ.js';

var urlTpl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

var layerBackground = new TileLayer({
  visible: false,
  preload: Infinity,
  source: new XYZ({
    url: urlTpl,
    attributions: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community '
  })
});

var view = new View({
       center: [-25.5, -49.3],
       zoom: 11
     });

var map = new Map({
  layers: layerBackground,
  target: 'mapa_geoj',
  view: view
});
