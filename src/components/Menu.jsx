import React from 'react';

import './../styles/Menu.css';


function Menu() {
  return (
    <header class="header_area">
        <div class="main-menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/">LOGO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mr-auto"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="/">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">skill</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </header>

  );
}

export default Menu;
