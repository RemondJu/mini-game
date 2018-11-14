const charClass = (state= 'Adventurer', action) => {
    switch(action.type){
        case 'CLICKED1': return state = 'Knight';
        case 'CLICKED2': return state = 'Archer';
        case 'CLICKED3': return state = 'Wizard';
        default: return state;
    }
}

export default charClass;