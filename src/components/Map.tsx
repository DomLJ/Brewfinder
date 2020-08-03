import React, { Component } from 'react'
import L, { LatLngExpression } from 'leaflet'
import { ChosenBrewery } from './Main'

interface MapProps {
    chosenBrewery : ChosenBrewery
}

interface MapState {
    map: L.Map | null,
    marker: L.Marker | null
}

class Map extends Component<MapProps, MapState> {
    constructor(props: MapProps) {
        super(props)

        this.state = {
            map: null,
            marker: null
        }
    }

    componentDidMount() {
        this.setState({
            map: this.initiateMap()
        }) 
    }

    initiateMap() {
        const map = L.map('map', { zoomControl: false }).setView(this.position, 12)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        this.setMarker(map)

        L.control.zoom({
            position: 'bottomright'
        }).addTo(map)

        setTimeout(map.invalidateSize.bind(map))

        return map
    }

    componentDidUpdate(prevProps: MapProps) {
        if (this.state.map instanceof L.Map && prevProps.chosenBrewery !== this.props.chosenBrewery) {
            this.state.map.setView(this.position, 12)
            this.setMarker(this.state.map)
        }
    }

    setMarker(map: L.Map) {
        this.state.marker?.remove()

        const newMarker = L.marker(this.position)
            .addTo(map)
            .bindPopup(this.name)

        this.setState({
            marker: newMarker
        })
    }

    get position(): LatLngExpression {
        return this.props.chosenBrewery.latitude 
            ? [parseInt(this.props.chosenBrewery.latitude), parseInt(this.props.chosenBrewery.longitude)]
            : [0, 0]
    }

    get name(): string {
        return this.props.chosenBrewery.name ?? ''
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
