import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-primary navbar-light">
                <a className="navbar-brand" href="#">
                    Single Page Application
                </a>

                {/* show and hide menu */}
                <button calssName="navbar-toggler" data-toggle="collapse" data-target="#menu">
                    <span calssName="navbar-toggler-icon"></span>
                </button>

                 {/* menu */}
                 <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Beranda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/kontak" className="nav-link">
                                Kontak
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;