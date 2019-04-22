import React, { Component } from 'react';
import AutocompleteTile from './AutocompleteTile';
import BrewOutput from './BrewOutput';

class BrewInput extends Component {

    render() {
        let autocompleteRender = this.props.autocompleteResult.map(item =>
            <AutocompleteTile
                name={item.name}
                key={item.id}
                id={item.id}
                pickBrewery={this.props.pickBrewery.bind(this)}
            />)


        return (
            <div className="brewinput">
                <h1> Find Brewery </h1>
                <div className="form">
                    <input
                        placeholder="Search..."
                        onChange={this.props.autocomplete}
                        value={this.props.search}
                    />
                </div>

                <ul className={(this.props.isAutocompleteVisible) ? "visible" : "invisible"} >
                    {autocompleteRender}
                </ul>

                <BrewOutput
                    chosenBrewery={this.props.chosenBrewery}
                    id={this.props.id}
                />

            </div>
        )
    }
}

export default BrewInput;