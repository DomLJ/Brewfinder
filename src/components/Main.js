import React, { Component } from 'react'
import { debounce } from 'lodash'
import Map from './Map'
import BreweryData from './BreweryData'
import Suggestions from './Suggestions'
import Input from './Input'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            autocompleteResult: [],
            search: '',
            key: 0,
            chosenBrewery: {
                name: 'New York City',
                latitude: '40.730610',
                longitude: '-73.935242'
            },
            isAutocompleteVisible: false
        }
        this.submitAutocomplete = this.submitAutocomplete.bind(this)
        this.pickBrewery = this.pickBrewery.bind(this)
    }

    handleErrors(result) {
        if (!result.ok) {
            throw Error(result.statusText)
        }
        return result
    }

    submitAutocomplete = value => {
        if (value) {
            this.setState({
                search: value,
                isAutocompleteVisible: true
            }, debounce(() => {
                fetch(`https://api.openbrewerydb.org/breweries/autocomplete?query=${this.state.search}`)
                    .then(this.handleErrors)
                    .then(result => result.json())
                    .then(result => {
                        this.setState({
                            autocompleteResult: result
                        })
                    }
                    )
                    .catch(console.log)
            }, 500)
            )
        } else {
            this.setState({
                search: value,
                isAutocompleteVisible: false
            })
        }
    }

    pickBrewery(event) {
        fetch(`https://api.openbrewerydb.org/breweries/${event.target.getAttribute('id')}`)
            .then(result => result.json())
            .then(
                result => {
                    this.setState(prevState => {
                        return {
                            chosenBrewery: result,
                            key: prevState.key + 1,
                            search: result.name,
                            isAutocompleteVisible: false
                        }
                    })
                }
            )
    }

    render() {
        return (
            <main className='main'>
                <Input
                    autocomplete={this.submitAutocomplete}
                    inputValue={this.state.search}
                    isAutocompleteVisible={this.state.isAutocompleteVisible}
                />
                <Suggestions
                    autocomplete={this.submitAutocomplete}
                    autocompleteResult={this.state.autocompleteResult}
                    pickBrewery={this.pickBrewery}
                    isAutocompleteVisible={this.state.isAutocompleteVisible}
                    id={this.state.key}
                />
                <BreweryData
                    chosenBrewery={this.state.chosenBrewery}
                    id={this.state.key}
                />
                <Map
                    chosenBrewery={this.state.chosenBrewery}
                    key={this.state.key}
                />
            </main>
        )
    }
}

export default Main
