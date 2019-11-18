import React from 'react';
import './Card-youtube.css';

class CardImage extends React.Component {
    render() {
        return (
            <div className="card bg-light text-white no-border">
                <img src="https://bulma.io/images/placeholders/128x128.png" className="card-img" alt="..."  height="150px"/>
                <div className="card-img-overlay no-padding d-flex flex-column align-items-end">
                    <p className="text-center font-weight-bold tiempo-video mt-auto mr-1 mb-1">20:34</p>
                </div>
            </div>
        );
    }
}

class CardHeader extends React.Component {
    render() {
        return (
            <div className="card no-border bg-plomo">
                <div className="card-body no-padding-tb">
                    <div className="row ">
                        <div className="col-2 no-padding-lr">
                            <img className="rounded-circle img-fluid" src="https://bulma.io/images/placeholders/128x128.png" alt="..." />
                        </div>
                        <div className="col-10 font-weight-bold titulo-video">
                            <p>El famoso truco de adivinar una carta</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card no-border bg-plomo ">
                <div className="card-body no-padding-tb">
                    <div className="row ">
                        <div className="col-10 offset-2">
                            <p className="body-titulo">Got talent España 4.4M de visitas hace 1 año. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



class CardYoutube extends React.Component {
    render() {
        return (
            <div>
                <CardImage />
                <CardHeader />
                <CardBody />
            </div>
        );
    }
}

export default CardYoutube;