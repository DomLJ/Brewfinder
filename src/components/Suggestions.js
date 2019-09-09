import React, { Component } from 'react'
import AutocompleteTile from './AutocompleteTile'

class Suggestions extends Component {
    // Todo - make it functional component
    render() {
        const autocompleteRender = this.props.autocompleteResult.map(item =>
            <AutocompleteTile
                name={item.name}
                key={item.id}
                breweryId={item.id}
                pickBrewery={this.props.pickBrewery}
            />
        )

        const listVisibility = (this.props.isAutocompleteVisible) ? '' : '--invisible'

        return (
            <div className={`suggestions${listVisibility}`}>
                <ul className={`suggestions__list`} >
                    {autocompleteRender}
                </ul>
            </div>
        )
    }
}

export default Suggestions
