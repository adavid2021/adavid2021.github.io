import {Link} from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark global-style navbar-bg" data-bs-theme="dark" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand no-opacity" href="/home">Aidan David</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-label="Toggle navigation" id="nav-toggler">
                        <i className="fa-solid fa-bars"></i>
                        {/*<span className="navbar-toggler-icon" style={{fontSize:20, color:"white"}}></span>*/}
                    </button>
                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                    {/*        data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"*/}
                    {/*        aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*    <span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" id="nav-hover">Home</Link>
                                {/*<a className="nav-link active" aria-current="page" href="/home" id="nav-hover">Home</a>*/}
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-link" id="nav-hover">Portfolio</Link>
                                {/*<a className="nav-link active" aria-current="page" href="/portfolio"*/}
                                {/*   id="nav-hover">Portfolio</a>*/}
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" id="nav-hover">Contact</Link>
                                {/*<a className="nav-link active" aria-current="page" href="/contact"*/}
                                {/*   id="nav-hover">Contact</a>*/}
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" id="nav-hover">About</Link>
                                {/*<a className="nav-link active" aria-current="page" href="/about" id="nav-hover">About*/}
                                {/*    Me</a>*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
