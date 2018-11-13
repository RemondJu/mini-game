const charClass = (state= '', action) => {
    switch(action.type){
        case 'CLICKED1': return state = action.value;
        default: return state;
    }
}

export default charClass;