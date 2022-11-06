import React from 'react';

import { Link } from 'react-router-dom';

function HeaderApp() {
    return(
        // <h1>Header</h1>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {/* <li className="nav-link px-2 text-secondary">Home</li> */}
                        <Link to="/produto"><li className="nav-link px-2 text-white">Produto</li></Link>
                        <Link to="/pessoa"><li className="nav-link px-2 text-white">Pessoa</li></Link>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search"></form>
                </div>
            </div>
        </header>
    )
}

export default HeaderApp;