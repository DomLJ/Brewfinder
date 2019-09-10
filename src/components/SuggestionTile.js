import React from 'react'

function SuggestionTile(props) {
    return (
        <li className='suggestions__item'>
            <button
                
                className={`${props.cursor === props.i ? 'active' : null} suggestions__button`}
                id={props.breweryId}
                onClick={props.pickBrewery}
            >
                {props.name}
            </button>
        </li>
    )
}
export default SuggestionTile
