import React from 'react';

function AutocompleteTile(props) {
    return (
        <li>
            <p id={props.id} onClick={props.pickBrewery} >
                {props.name}
            </p>
        </li>
    )
}
export default AutocompleteTile