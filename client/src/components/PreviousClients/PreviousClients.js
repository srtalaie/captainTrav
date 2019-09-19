import React from "react";
import '../PreviousClients/style.css';

const PreviousClients = ({ imgLink1, imgLink2, imgLink3, imgLink4, imgLink5 }) => (
    <div className="previousClientsWrapper">
        <h1>Our Previous Clients</h1>
        <div className="previousClients">
            <div className="client">
                <img src={imgLink1} alt="previous-client"/>
                <p>Harvard</p>
            </div>
            <div className="client">
                <img src={imgLink2} alt="previous-client"/>
                <p>Harvard</p>
            </div>
            <div className="client">
                <img src={imgLink3} alt="previous-client"/>
                <p>Harvard</p>
            </div>
            <div className="client">
                <img src={imgLink4} alt="previous-client"/>
                <p>Harvard</p>
            </div>
            <div className="client">
                <img src={imgLink5} alt="previous-client"/>
                <p>Harvard</p>
            </div>
        </div>
    </div>
    
);

export default PreviousClients;