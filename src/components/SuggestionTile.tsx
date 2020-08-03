import React from 'react'

interface SuggestionTileProps {
    name: string,
    pickBrewery: (id: string) => void,
    breweryId: string
}

function SuggestionTile(props: SuggestionTileProps) {
    return (
        <li className='suggestions__item'>
            <button
                
                className='suggestions__button'
                id={props.breweryId}
                onClick={() => props.pickBrewery(props.breweryId)}
            >
                {props.name}
            </button>
        </li>
    )
}
export default SuggestionTile
