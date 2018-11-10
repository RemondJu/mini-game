const charClass = (state= '', action) => {
    switch(action.type){
        case 'CHAR_INPUT': return state = action.value;
        default: return state;
    }
}

export default charClass;