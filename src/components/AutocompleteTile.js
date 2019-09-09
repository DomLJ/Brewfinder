import React from 'react'

function AutocompleteTile(props) {
    return (
        <li className='suggestions__item'>
            <button
                className='suggestions__button'
                id={props.breweryId}
                onClick={props.pickBrewery}
            >
                {props.name}
            </button>
        </li>
    )
}
export default AutocompleteTile
