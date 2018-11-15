export const cardClass1 = (state= 'bg-light', action) => {
  switch(action.type){
      case 'CLICKED_KNIGHT': return state = 'bg-success';
      case 'CLICKED_ARCHER': return state = 'bg-light';
      case 'CLICKED_WIZARD': return state = 'bg-light';
      default: return state;
  }
}

export const cardClass2 = (state= 'bg-light', action) => {
  switch(action.type){
      case 'CLICKED_KNIGHT': return state = 'bg-light';
      case 'CLICKED_ARCHER': return state = 'bg-success';
      case 'CLICKED_WIZARD': return state = 'bg-light';
      default: return state;
  }
}

export const cardClass3 = (state= 'bg-light', action) => {
  switch(action.type){
      case 'CLICKED_KNIGHT': return state = 'bg-light';
      case 'CLICKED_ARCHER': return state = 'bg-light';
      case 'CLICKED_WIZARD': return state = 'bg-success';
      default: return state;
  }
}
