const charClass = (state= '', action) => {
    switch(action.type){
        case '': return state = action.value;
        default: return state;
    }
}

export default charClass;