import React from 'react'

interface InputProps {
    autocomplete: (value: string) => void,
    isSuggestionsVisible: boolean,
    inputValue: string
}

function Input(props: InputProps) {
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
