import React from 'react'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__content'>
                    Powered by:
                    <a
                        className='footer__link'
                        href='https://www.openbrewerydb.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Open Brewery DB
                    </a>
                </div>
                <div className='footer__content'>Created by: Dominik Józefiak</div>
            </div>
        </footer>
    )
}
export default Footer
