var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ServiceArea_1 = new ol.format.GeoJSON();
var features_ServiceArea_1 = format_ServiceArea_1.readFeatures(json_ServiceArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_1.addFeatures(features_ServiceArea_1);
var lyr_ServiceArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_1, 
                style: style_ServiceArea_1,
                popuplayertitle: 'Service Area',
                interactive: true,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_1_0.png" /> <br />\
    <img src="styles/legend/ServiceArea_1_1.png" /> 500,0000000<br />\
    <img src="styles/legend/ServiceArea_1_2.png" /> 1000,0000000<br />\
    <img src="styles/legend/ServiceArea_1_3.png" /> 1500,0000000<br />\
    <img src="styles/legend/ServiceArea_1_4.png" /> 2000,0000000<br />\
    <img src="styles/legend/ServiceArea_1_5.png" /> 2500,0000000<br />\
    <img src="styles/legend/ServiceArea_1_6.png" /> 3000,0000000<br />' });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_BusStop_3 = new ol.format.GeoJSON();
var features_BusStop_3 = format_BusStop_3.readFeatures(json_BusStop_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStop_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStop_3.addFeatures(features_BusStop_3);
cluster_BusStop_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BusStop_3
});
var lyr_BusStop_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BusStop_3, 
                style: style_BusStop_3,
                popuplayertitle: 'Bus Stop',
                interactive: true,
    title: 'Bus Stop<br />\
    <img src="styles/legend/BusStop_3_0.png" /> Halte PENS<br />\
    <img src="styles/legend/BusStop_3_1.png" /> SB Galaxy 2<br />\
    <img src="styles/legend/BusStop_3_2.png" /> SB ITS<br />\
    <img src="styles/legend/BusStop_3_3.png" /> SB Kedung Baruk<br />\
    <img src="styles/legend/BusStop_3_4.png" /> SB KONI MERR<br />\
    <img src="styles/legend/BusStop_3_5.png" /> SB RS Haji 1<br />\
    <img src="styles/legend/BusStop_3_6.png" /> SB Semolowaru 2<br />\
    <img src="styles/legend/BusStop_3_7.png" /> SB Sentra UKM MERR<br />\
    <img src="styles/legend/BusStop_3_8.png" /> SB SMPN 19<br />\
    <img src="styles/legend/BusStop_3_9.png" /> SB UNAIR 1<br />\
    <img src="styles/legend/BusStop_3_10.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_ServiceArea_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_BusStop_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_ServiceArea_1,lyr_Roads_2,lyr_BusStop_3];
lyr_ServiceArea_1.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_Roads_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', });
lyr_BusStop_3.set('fieldAliases', {'name': 'name', 'highway': 'highway', 'Photo': 'Photo', });
lyr_ServiceArea_1.set('fieldImages', {'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', });
lyr_BusStop_3.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_ServiceArea_1.set('fieldLabels', {'id': 'header label - visible with data', 'cost_level': 'header label - visible with data', });
lyr_Roads_2.set('fieldLabels', {'full_id': 'header label - visible with data', 'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'highway': 'header label - visible with data', 'name': 'header label - visible with data', });
lyr_BusStop_3.set('fieldLabels', {'name': 'header label - visible with data', 'highway': 'header label - visible with data', 'Photo': 'header label - visible with data', });
lyr_BusStop_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});