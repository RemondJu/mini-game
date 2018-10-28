import React from 'react';
import { Button } from 'reactstrap';
import './CharUI.css'

const CharUI = (props) => {
    return ( 
        <div className="CharUI">
            <img className="w-100" src="https://png.icons8.com/metro/1600/doctor-fate-helmet.png"/>
            <h3>{props.charName}</h3>
            <span>{props.charClass}</span>
            <span>HP : 150 / 150</span>
            <span>Rage : 0 / 100</span>
            <span>XP : 0 / 100</span>
            <span>300 Gold</span>
            <Button>Inventory</Button>
            <Button>Stats</Button>
        </div>
     );
}
 
export default CharUI;