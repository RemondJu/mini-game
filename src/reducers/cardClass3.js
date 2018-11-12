const cardClass3 = (state= 'bg-light', action) => {
    switch(action.type){
        case 'CLICKED': return state = 'bg-success';
        case 'UNCLICKED': return state = 'bg-light';
        default: return state;
    }
}

export default cardClass3;