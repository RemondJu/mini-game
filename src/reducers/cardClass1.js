const cardClass1 = (state= 'bg-light', action) => {
    switch(action.type){
        case 'CLICKED': return state = 'bg-success';
        default: return state;
    }
}

export default cardClass1;