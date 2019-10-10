import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { BingMaps } from 'ol/source';

const roadLayer = new TileLayer({
    source: new BingMaps({
        key: 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5',
        imagerySet: 'RoadOnDemand',
        maxZoom: 19,
    }),
});

const aerialLayer = new TileLayer({
    source: new BingMaps({
        key: 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5',
        imagerySet: 'Aerial',
        maxZoom: 19,
    }),
});

const view = new View({
    center: [-6655.5402445057125, 6709968.258934638],
    zoom: 13,
});

const map1 = new Map({
    target: 'roadMap',
    layers: [roadLayer],
    view,
});

const map2 = new Map({
    target: 'aerialMap',
    layers: [aerialLayer],
    view,
});
