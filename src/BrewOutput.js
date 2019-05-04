import React from 'react';

function BrewOutput(props) {
    const brew = props.chosenBrewery

    return (
        <div className="output">
            <h2>
                {(brew.name && props.id !== 0)
                    ? brew.name
                    : null}
            </h2>

            <h2> {(brew.street && brew.city && brew.state)
                ? `${brew.street}, ${brew.city}, ${brew.state}`
                : null}
            </h2>

            <h2> {(brew.website_url)
                ? <a href={brew.website_url} target="_blank" rel="noopener noreferrer" > {brew.website_url.slice(11)} </a>
                : null}
            </h2>
        </div>
    )
}
export default BrewOutput