export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log('updating markers...');
    }

    createMarkerFromBench(bench) {
        const marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: { lat: bench.lat, lng: bench.lng }
        });
        if (!(bench.id in this.markers)) {
            this.markers[bench.id] = marker;
        }
    }
}