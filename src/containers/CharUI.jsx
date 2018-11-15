import React from 'react';
import '../components/CharUI.css'
import CharStats from './CharStats';
import Inventory from '../components/Inventory';
import { connect } from 'react-redux';

const CharUI = (props) => {
    return ( 
        <div className="CharUI">
            <img className="w-100" src={props.charPic} alt="Knight icon"/>
            <h3>{props.charName}</h3>
            <span>{props.charClass}</span>
            <span>HP : {props.charHealth} / {props.charMaxHealth}</span>
            <span>Rage : 0 / 100</span>
            <span>XP : {props.charExperience} / {props.charMaxExperience}</span>
            <span>300 Gold</span>
            <CharStats buttonLabel="Stats"/>
            <br/>
            <Inventory buttonLabel="Inventory"/>
        </div>
     );
}
function mstp (state){
    return {
        charName: state.charName,
        charPic: state.charPic,
        charClass: state.charClass,
        charHealth: state.charHealth,
        charMaxHealth: state.charMaxHealth,
        charExperience: state.charExperience,
        charMaxExperience: state.charMaxExperience,
        
    }
}

 
export default connect(mstp)(CharUI);