import React, { Component } from 'react';
import L from 'leaflet';



class Mapp extends Component {
    constructor() {
        super()
        this.mapCreating = this.mapCreating.bind(this)
    }

    mapCreating() {
        const position = (this.props.chosenBrewery.latitude) ?
            [this.props.chosenBrewery.latitude, this.props.chosenBrewery.longitude] : [0, 0]

        const name = (this.props.chosenBrewery.name) ?
            this.props.chosenBrewery.name : " "

        const map = L.map('map', { zoomControl: false }).setView(position, 12)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map)

        L.marker(position)
            .addTo(map)
            .bindPopup(name)

        L.control.zoom({
            position: "bottomright"
        }).addTo(map);

        setTimeout(map.invalidateSize.bind(map))
    }

    componentDidMount() {
        this.mapCreating()
    }

    render() {
        return (
            <div className="map-container">
                <div id="map"></div>
                <div className={`map-curtain ${this.props.chosenBrewery.latitude ? "invisible" : " "}`}>
                    <h1>Sorry, localization is unknown</h1>
                </div>
            </div>
        )
    }
}

export default Mapp;