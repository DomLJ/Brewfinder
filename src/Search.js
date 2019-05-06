import React, { Component } from 'react';
import Mapp from './Mapp';
import BrewInput from './BrewInput';


class Search extends Component {
    constructor() {
        super();
        this.state = {
            autocompleteResult: [],
            search: "",
            key: 0,
            chosenBrewery: {
                name: "New York City",
                latitude: "40.730610",
                longitude: "-73.935242"
            },
            isAutocompleteVisible: false,

        }
    }

    handleErrors(result) {
        if (!result.ok) {
            throw Error(result.statusText);
        }
        return result;
    }

    submitAutocomplete(event) {
        this.setState({
            search: event.target.value,
            isAutocompleteVisible: true
        }, () => fetch(`https://api.openbrewerydb.org/breweries/autocomplete?query=${this.state.search}`)
            .then(this.handleErrors)
            .then(result => result.json())
            .then(
                result => {
                    this.setState({
                        autocompleteResult: result
                    })
                }
            )
            .catch(error => console.log(error))
        )
    }

    pickBrewery(event) {
        fetch(`https://api.openbrewerydb.org/breweries/${event.target.getAttribute("id")}`)
            .then(result => result.json())
            .then(
                result => {
                    this.setState((prevState) => {
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
            <div className="search">
                <BrewInput
                    autocomplete={this.submitAutocomplete.bind(this)}
                    autocompleteResult={this.state.autocompleteResult}
                    pickBrewery={this.pickBrewery.bind(this)}
                    chosenBrewery={this.state.chosenBrewery}
                    search={this.state.search}
                    isAutocompleteVisible={this.state.isAutocompleteVisible}
                    id={this.state.key}
                />
                <Mapp
                    chosenBrewery={this.state.chosenBrewery}
                    key={this.state.key}
                />
            </div>
        )
    }
}

export default Search;


