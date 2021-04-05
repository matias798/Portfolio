import React from 'react';

import './../styles/Menu.css';


function Menu() {
  return (
    <header className="header_area">
        <div className="main-menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="mr-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">skill</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </header>

  );
}

export default Menu;
