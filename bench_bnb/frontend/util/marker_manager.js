export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log('updating markers...');
        benches.map((bench) => this.createMarkerFromBench(bench));
        let benchesObject = {};
        benches.forEach( (bench) => benchesObject[bench.id] = bench);
        for (let marker in this.markers) {
            if (!(marker in benchesObject)) {
                this.removeMarker(marker);
            }
        }
        console.log(this.markers);
    }

    removeMarker(marker) {
        this.markers[marker].setMap(null);
        delete this.markers[marker];
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