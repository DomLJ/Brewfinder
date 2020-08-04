import React, { Component } from 'react'
import { debounce, throttle, Cancelable } from 'lodash'
import Map from './Map'
import BreweryData from './BreweryData'
import Suggestions from './Suggestions'
import Input from './Input'

export interface Autocomplete {
    id: string,
    name: string
}

export interface ChosenBrewery {
    name: string,
    latitude: string,
    longitude: string,
    street?: string,
    city?: string,
    state?: string,
    website_url?: string
}

interface MainState {
    autocompleteResult: Autocomplete[],
    search: string,
    key: number,
    chosenBrewery: ChosenBrewery,
    isSuggestionsVisible: boolean
}

class Main extends Component<{}, MainState> {
    debounceAutocomplete: (() => void) & Cancelable

    constructor(props: {}) {
        super(props)

        this.state = {
            autocompleteResult: [],
            search: '',
            key: 0,
            chosenBrewery: {
                name: 'New York City',
                latitude: '40.730610',
                longitude: '-73.935242'
            },
            isSuggestionsVisible: false
        }
        this.submitAutocomplete = this.submitAutocomplete.bind(this)
        this.pickBrewery = this.pickBrewery.bind(this)
        this.debounceAutocomplete = debounce(this.requestAutocomplete, 1500)
    }

    handleErrors(result: any) {
        if (!result.ok) {
            throw Error(result.statusText)
        }
        return result
    }

    submitAutocomplete(value: string) {
        if (value) {
            this.setState({
                search: value,
                isSuggestionsVisible: true
            }, this.debounceAutocomplete)
        } else {
            this.setState({
                search: '',
                isSuggestionsVisible: false
            })
        }
    }

    requestAutocomplete() {
        fetch(`https://api.openbrewerydb.org/breweries/autocomplete?query=${this.state.search}`)
            .then(this.handleErrors)
            .then(result => result.json())
            .then(result => this.setState({ autocompleteResult: result }))
            .catch(() => new Error())    
    }

    pickBrewery(id: string) {
        fetch(`https://api.openbrewerydb.org/breweries/${id}`)
            .then(result => result.json())
            .then(result => this.setState(prevState => ({
                chosenBrewery: result,
                key: prevState.key + 1,
                search: result.name,
                isSuggestionsVisible: false,
                autocompleteResult: []
            })
            ))
    }

    render() {
        return (
            <main className='main'>
                <Input
                    autocomplete={this.submitAutocomplete}
                    inputValue={this.state.search}
                    isSuggestionsVisible={this.state.isSuggestionsVisible}
                />
                <Suggestions
                    autocomplete={this.submitAutocomplete}
                    autocompleteResult={this.state.autocompleteResult}
                    pickBrewery={this.pickBrewery}
                    isSuggestionsVisible={this.state.isSuggestionsVisible}
                />
                <BreweryData
                    chosenBrewery={this.state.chosenBrewery}
                    id={this.state.key}
                />
                <Map
                    chosenBrewery={this.state.chosenBrewery}
                />
            </main>
        )
    }
}

export default Main
