import React from 'react';
import MarkerManager from '../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.map.addListener('bounds_changed', () => {
            const boundsObject = this.map.getBounds();
            const bounds = { northEast: { lat: boundsObject.getNorthEast().lat(), lng: boundsObject.getNorthEast().lng() } , southWest: { lat: boundsObject.getSouthWest().lat(), lng: boundsObject.getSouthWest().lng() } };
            this.props.updateFilter("bounds", bounds);
        });

        this.map.addListener('click', (e) => {
            this._handleClick({lat: e.latLng.lat(), lng: e.latLng.lng()});
        });

        this.markerManager = new MarkerManager(this.map);
        console.log(this.props.benches);
        this.markerManager.updateMarkers(this.props.benches);
    }

    componentDidUpdate() {
        this.markerManager.updateMarkers(this.props.benches);
    }

    _handleClick(coords) {
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    render() {
        return (
            <div id='map-container' ref={map => this.mapNode = map}>
            </div>
        );
    }
}

export default withRouter(BenchMap);