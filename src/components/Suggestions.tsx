import React from 'react'
import SuggestionTile from './SuggestionTile'
import { Autocomplete } from './Main'

interface SuggestionsProps {
    isSuggestionsVisible: boolean,
    pickBrewery: (id: string) => void,
    autocompleteResult: Autocomplete[],
    autocomplete: (value: string) => void
}

function Suggestions(props: SuggestionsProps) {
    const autocompleteRender = props.autocompleteResult.map(item =>
        <SuggestionTile
            name={item.name}
            key={item.id}
            breweryId={item.id}
            pickBrewery={props.pickBrewery}
        />
    )
    const listVisibility = (props.isSuggestionsVisible) ? '' : 'suggestions--invisible'

    return (
        <div className={`suggestions ${listVisibility}`}>
            <ul className={`suggestions__list`} >
                {autocompleteRender}
            </ul>
        </div>
    )
}

export default Suggestions
