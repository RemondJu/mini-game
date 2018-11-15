import { combineReducers } from 'redux';
import { cardClass1, cardClass2, cardClass3 } from './cardClass';
import disabledBtn from './disabledBtn';
import { charName, charExperience, charMaxExperience, charPic, charClass, charHealth, charStrength, charAgility, charIntelligence, charMaxHealth } from './character';
import { inputIsNotValid, inputIsValid } from './inputState';

const allReducers = combineReducers({
    charName,
    charClass,
    cardClass1,
    cardClass2,
    cardClass3,
    disabledBtn,
    charPic,
    charHealth,
    charMaxHealth,
    charStrength,
    charAgility,
    charIntelligence,
    charExperience,
    charMaxExperience,
    inputIsValid,
    inputIsNotValid,
})

export default allReducers;