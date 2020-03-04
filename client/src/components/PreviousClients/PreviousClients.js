import React from "react";
import '../PreviousClients/style.css';

const PreviousClients = ({ imgLink1, imgLink2, imgLink3, imgLink4, imgLink5, imgLink6, imgLink7, imgLink8 }) => (
    <div className="previousClientsWrapper">
        <h1>Our Previous Clients</h1>
        <div className="previousClients">
            <div className="client">
                <img src={imgLink1} alt="previous-client"/>
            </div>
            <div className="client">
                <img src={imgLink2} alt="previous-client"/>
            </div>
            <div className="client">
                <img src={imgLink3} alt="previous-client"/>
            </div>
            <div className="client">
                <img src={imgLink4} alt="previous-client"/>
            </div>
            <div className="client">
                <img src={imgLink5} alt="previous-client"/>
            </div>
            <div className="client">
                <img src={imgLink6} alt="previous-client"/>
            </div>
            <div className="client">
                <img src={imgLink7} alt="previous-client"/>
            </div>
            <div className="client">
                <img src={imgLink8} alt="previous-client"/>
            </div>
        </div>
    </div>
    
);

export default PreviousClients;