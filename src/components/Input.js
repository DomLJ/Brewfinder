import React from 'react'

function Input(props) {
    const inputActive = props.isSuggestionsVisible ? 'input--active' : ''
    return (
        <input
            className={`input ${inputActive}`}
            placeholder='Search Brewery...'
            onChange={e => props.autocomplete(e.target.value)}
            value={props.inputValue}
        />
    )
}

export default Input
