const cardClass1 = (state= 'bg-light', action) => {
    switch(action.type){
        case 'CLICKED1': return state = 'bg-success';
        case 'CLICKED2': return state = 'bg-light';
        case 'CLICKED3': return state = 'bg-light';
        default: return state;
    }
}

export default cardClass1;