import React from 'react';


function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>Powered by</p>
                <a
                    href="https://www.openbrewerydb.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Brewery DB
                </a>
                <a
                    href="https://github.com/DomLJ/Brewfinder"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
                <p className="signature"> Created by Dominik Józefiak </p>
            </div>
        </footer>
    )
}
export default Footer