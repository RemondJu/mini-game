const disabledBtn = (state=true, action) => {
    switch(action.type){
        case 'NAME_INPUT': return state = false;
        default: return state;
    }
}

export default disabledBtn;