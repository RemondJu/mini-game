const disabledBtn = (state=true, action) => {
    switch(action.type){
        case 'NAME_INPUT': return state = action.value;
        default: return state;
    }
}

export default disabledBtn;