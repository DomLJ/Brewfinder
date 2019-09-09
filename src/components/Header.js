import React from 'react'

function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>Brewfinder</h1>
            <a  
                className='header__link'
                href='https://github.com/DomLJ/Brewfinder'
                target='_blank'
                rel='noopener noreferrer'
            >
                <i className='header__icon fab fa-github'></i>
            </a>
        </header>
    )
}

export default Header
