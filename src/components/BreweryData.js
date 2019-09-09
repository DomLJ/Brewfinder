import React from 'react'

function BreweryData(props) {
    const brew = props.chosenBrewery
    const link = brew.website_url
        ? <a
            className='brewery-data__link'
            href={brew.website_url}
            target='_blank'
            rel='noopener noreferrer'
        >
            {brew.website_url.slice(11)}
        </a>
        : null

    return (
        <div className='brewery-data'>
            <p className='brewery-data__paragraph'>
                {(brew.name && props.id !== 0)
                    ? brew.name
                    : null
                }
            </p>
            <p className='brewery-data__paragraph'>
                {(brew.street && brew.city && brew.state)
                    ? `${brew.street}, ${brew.city}, ${brew.state}`
                    : null
                }
            </p>
            {link}
        </div>
    )
}

export default BreweryData
