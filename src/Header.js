import React from 'react';

function Header() {
    return (
        <header>
            <div className="top-menu">
                <div className="logo">
                    <h1>Brewfinder</h1>
                </div>

                <nav>
                    <ul>
                        <li><a href="#Search">Search</a></li>
                        <li><a href="#Search">Beer</a></li>
                        <li><a href="#Search">Techs</a></li>
                        <li><a href="#Search">About</a></li>

                    </ul>
                </nav>

            </div>

            <div className="main-banner">
                    
                    <h2> Your </h2>
                    <h2> Favourite </h2>
                    <h2> Breweries </h2>
                    <p>  In one simple app</p>
                    
            </div>
        </header>
    )
}
export default Header