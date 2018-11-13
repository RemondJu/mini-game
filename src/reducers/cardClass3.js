const cardClass3 = (state= 'bg-light', action) => {
    switch(action.type){
        case 'CLICKED1': return state = 'bg-light';
        case 'CLICKED2': return state = 'bg-light';
        case 'CLICKED3': return state = 'bg-success';
        default: return state;
    }
}

export default cardClass3;