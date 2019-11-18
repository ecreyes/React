import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import CardYoutube from './components/Card-youtube';
import NavbarYoutube from './components/Navbar-youtube';
//import './debug.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<div>
    <NavbarYoutube />
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 offset-2 bg-plomo-videos shadow-sm">
                <div className="row">
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                    <div className="col-12 col-md-3"><CardYoutube /></div>
                </div>
            </div>
        </div>
    </div>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
