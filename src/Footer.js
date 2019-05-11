import React from 'react';


function Footer() {
    return (
        <footer>
            <div className="footer-content">

                <div className="credit">
                    <p>Powered by</p>
                    <a
                        href="https://www.openbrewerydb.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Brewery DB
                    </a>
                </div>

                <div className="credit">
                    
                    <a
                        href="https://github.com/DomLJ/Brewfinder"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>



            </div>
            <div className="footer-signature"><h1> Created by Dominik Józefiak </h1></div>
        </footer>
    )
}
export default Footer