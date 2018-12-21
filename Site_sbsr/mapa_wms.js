window.onload = function() {
  // Variável do Mapa
  var mapa = L.map("mapa_wms", {
    center: [-25.5, -49.3],
    zoom: 11
  });

  // Base cartográfica adicionada ao mapa

  var WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(mapa);


// Adicionando os geojson ao mapa - IDE
  L.geoJSON(ide, {
  pointToLayer: function (feicao, posicao) {
    return L.marker(posicao, {icon: simbolo[2]});
  },
  onEachFeature: function (feicao, camada) {
    camada.bindPopup(feicao.properties.nome + " (" + feicao.properties.sigla + ")" + "</br><b>Link IDE:</b> " + feicao.properties.link_ide);
  }
}).addTo(mapa);

}
