import React from 'react';
import './CharUI.css'
import CharStats from './CharStats';
import Inventory from './Inventory';

const CharUI = (props) => {
    return ( 
        <div className="CharUI">
            <img className="w-100" src={props.knightPic} alt="Knight icon"/>
            <h3>{props.charName}</h3>
            <span>{props.charClass}</span>
            <span>HP : 150 / 150</span>
            <span>Rage : 0 / 100</span>
            <span>XP : 0 / 100</span>
            <span>300 Gold</span>
            <CharStats buttonLabel="Stats"/>
            <br/>
            <Inventory buttonLabel="Inventory"/>
        </div>
     );
}
 
export default CharUI;