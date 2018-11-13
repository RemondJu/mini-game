import { combineReducers } from 'redux';
import charName from './charName';
import charClass from './charClass';
import cardClass1 from './cardClass1';
import cardClass2 from './cardClass2';
import cardClass3 from './cardClass3';

const allReducers = combineReducers({
    charName,
    charClass,
    cardClass1,
    cardClass2,
    cardClass3    
})

export default allReducers;