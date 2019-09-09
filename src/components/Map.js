import React, { Component } from 'react'
import L from 'leaflet'

class Map extends Component {
    mapCreating() {
        const position = this.props.chosenBrewery.latitude
            ? [this.props.chosenBrewery.latitude, this.props.chosenBrewery.longitude]
            : [0, 0]

        const name = (this.props.chosenBrewery.name) ?
            this.props.chosenBrewery.name : ' '

        const map = L.map('map', { zoomControl: false }).setView(position, 12)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        L.marker(position)
            .addTo(map)
            .bindPopup(name)

        L.control.zoom({
            position: 'bottomright'
        }).addTo(map)

        setTimeout(map.invalidateSize.bind(map))
    }

    componentDidMount() {
        this.mapCreating()
    }

    render() {
        return (
            <div className='map'>
                <div id='map' className='map__content'></div>
                <div className={`map__curtain ${this.props.chosenBrewery.latitude ? 'invisible' : ' '}`}>
                    <p className='map__explanation'>Sorry, geographical coordinates are unknown</p>
                </div>
            </div>
        )
    }
}

export default Map
