const charClass = (state= 'bg-light', action) => {
    switch(action.type){
        case 'CLICKED': return state = 'success'; break;
        case 'UNCLICKED': return state = 'bg-light'; break;
        default: return state;
    }
}

export default charClass;