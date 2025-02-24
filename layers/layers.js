var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://sat04.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZuevLab1lab1_2 = new ol.format.GeoJSON();
var features_ZuevLab1lab1_2 = format_ZuevLab1lab1_2.readFeatures(json_ZuevLab1lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZuevLab1lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZuevLab1lab1_2.addFeatures(features_ZuevLab1lab1_2);
var lyr_ZuevLab1lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZuevLab1lab1_2, 
                style: style_ZuevLab1lab1_2,
                popuplayertitle: 'Zuev Lab.1 — lab1',
                interactive: true,
                title: '<img src="styles/legend/ZuevLab1lab1_2.png" /> Zuev Lab.1 — lab1'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });
var format_building_house_5 = new ol.format.GeoJSON();
var features_building_house_5 = format_building_house_5.readFeatures(json_building_house_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_5.addFeatures(features_building_house_5);
var lyr_building_house_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_5, 
                style: style_building_house_5,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_5.png" /> building_house'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ZuevLab1lab1_2.setVisible(true);lyr_highway_3.setVisible(true);lyr_highway_4.setVisible(true);lyr_building_house_5.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_ZuevLab1lab1_2,lyr_highway_3,lyr_highway_4,lyr_building_house_5];
lyr_ZuevLab1lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'historic': 'historic', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'bin': 'bin', 'bench': 'bench', 'ref': 'ref', 'operator': 'operator', 'name': 'name', 'fire_hydrant:type': 'fire_hydrant:type', 'emergency': 'emergency', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'footway': 'footway', 'toll': 'toll', 'short_name': 'short_name', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'embankment': 'embankment', 'tracktype': 'tracktype', 'layer': 'layer', 'bridge': 'bridge', 'check_date:surface': 'check_date:surface', 'name:uk': 'name:uk', 'int_name': 'int_name', 'name:de': 'name:de', 'service': 'service', 'name:etymology:wikidata': 'name:etymology:wikidata', 'lane_markings': 'lane_markings', 'addr:postcode': 'addr:postcode', 'postal_code': 'postal_code', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'lanes': 'lanes', });
lyr_building_house_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:city': 'addr:city', 'addr:postcode': 'addr:postcode', 'building:levels': 'building:levels', 'source:addr': 'source:addr', 'height': 'height', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'type': 'type', 'address': 'address', });
lyr_ZuevLab1lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_highway_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'historic': '', 'tactile_paving': '', 'shelter': '', 'bin': '', 'bench': '', 'ref': '', 'operator': '', 'name': '', 'fire_hydrant:type': '', 'emergency': '', });
lyr_highway_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'footway': '', 'toll': '', 'short_name': '', 'oneway': '', 'maxspeed': '', 'embankment': '', 'tracktype': '', 'layer': '', 'bridge': '', 'check_date:surface': '', 'name:uk': '', 'int_name': '', 'name:de': '', 'service': '', 'name:etymology:wikidata': '', 'lane_markings': '', 'addr:postcode': '', 'postal_code': '', 'name:ru': '', 'name:en': '', 'name': '', 'surface': '', 'ref': '', 'lanes': '', });
lyr_building_house_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:city': 'TextEdit', 'addr:postcode': 'TextEdit', 'building:levels': 'TextEdit', 'source:addr': 'TextEdit', 'height': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'type': 'TextEdit', 'address': '', });
lyr_ZuevLab1lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'historic': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'bin': 'no label', 'bench': 'no label', 'ref': 'no label', 'operator': 'no label', 'name': 'no label', 'fire_hydrant:type': 'no label', 'emergency': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'footway': 'no label', 'toll': 'no label', 'short_name': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'embankment': 'no label', 'tracktype': 'no label', 'layer': 'no label', 'bridge': 'no label', 'check_date:surface': 'no label', 'name:uk': 'no label', 'int_name': 'no label', 'name:de': 'no label', 'service': 'no label', 'name:etymology:wikidata': 'no label', 'lane_markings': 'no label', 'addr:postcode': 'no label', 'postal_code': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'surface': 'no label', 'ref': 'no label', 'lanes': 'no label', });
lyr_building_house_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:city': 'no label', 'addr:postcode': 'no label', 'building:levels': 'no label', 'source:addr': 'no label', 'height': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'type': 'no label', 'address': 'no label', });
lyr_building_house_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});