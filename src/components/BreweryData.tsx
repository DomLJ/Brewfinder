import React from 'react'
import { ChosenBrewery } from './Main'

interface BreweryDataProps {
    chosenBrewery: ChosenBrewery,
    id: number
}

function BreweryData(props: BreweryDataProps) {
    const brew = props.chosenBrewery

    return (
        <div className='brewery-data'>
            {(brew.name && props.id !== 0)
                ? <p className='brewery-data__paragraph'>
                    {brew.name}
                </p>
                : null
            }

            {(brew.street && brew.city && brew.state)
                ? <p className='brewery-data__paragraph'>
                    {`${brew.street}, ${brew.city}, ${brew.state}`}
                </p>
                : null
            }

            {brew.website_url
                ? <a
                    className='brewery-data__link'
                    href={brew.website_url}
                >
                    {brew.website_url.slice(11)}
                </a>
                : null
            }
        </div>
    )
}

export default BreweryData
