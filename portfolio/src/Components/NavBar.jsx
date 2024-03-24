// import { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark global-style navbar-bg" data-bs-theme="dark" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand no-opacity" href="/home">Aidan David</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" id="nav-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home" id="nav-hover">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/portfolio" id="nav-hover">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/contact" id="nav-hover">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about" id="nav-hover">About Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
