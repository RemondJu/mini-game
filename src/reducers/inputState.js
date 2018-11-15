export const inputIsValid = (state=false, action) => {
  switch(action.type){
      case 'VALID_INPUT': return state = true;
      case 'INVALID_INPUT': return state = false;
      default: return state;
  }
}

export const inputIsNotValid = (state=false, action) => {
  switch(action.type){
      case 'VALID_INPUT': return state = false;
      case 'INVALID_INPUT': return state = true;
      default: return state;
  }
}