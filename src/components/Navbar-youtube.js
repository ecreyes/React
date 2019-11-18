import React from 'react';
import './Navbar-youtube.css';


class NavbarYoutubeLogo extends React.Component {
    render() {
        return (
            <a className="navbar-brand" href="#">
                <i className="fas fa-bars mr-3 ml-2"></i>
                Youtube
            </a>
        );
    }
}

class NavbarYoutubeSearch extends React.Component {
    render() {
        return (
            <form className="form-inline search-w mx-auto">
                <div className="input-group flex-fill">
                    <input type="text" className="form-control form-control-sm" placeholder="Buscar" />
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                    </div>
                </div>
            </form>
        );
    }
}


class NavbarYoutubeItems extends React.Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-video"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-th"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-bell"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-user-circle"></i>
                    </a>
                </li>
            </ul>
        );
    }
}


class NavbarYoutube extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-expand navbar-light bg-blanco">
                    <NavbarYoutubeLogo/>
                    <NavbarYoutubeSearch/>
                    <NavbarYoutubeItems/>
                </nav>
            </div>
        );
    }
}

export default NavbarYoutube;