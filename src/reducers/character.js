export const charClass = (state = "Adventurer", action) => {
  switch (action.type) {
    case "CLICKED_KNIGHT":
      return (state = "Knight");
    case "CLICKED_ARCHER":
      return (state = "Archer");
    case "CLICKED_WIZARD":
      return (state = "Wizard");
    default:
      return state;
  }
};

export const charName = (state='', action) => {
  switch(action.type){
      case 'NAME_INPUT': return state = action.value;
      default: return state;
  }
}

export const charPic = (
  state = "https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941",
  action
) => {
  switch (action.type) {
    case "CLICKED_KNIGHT":
      return (state =
        "https://png.icons8.com/metro/1600/doctor-fate-helmet.png");
    case "CLICKED_ARCHER":
      return (state = "https://png.icons8.com/ios/1600/archer.png");
    case "CLICKED_WIZARD":
      return (state = "https://png.icons8.com/metro/1600/wizard.png");
    default:
      return state;
  }
};

export const charHealth = (state = 70, action) => {
  switch (action.type) {
    case "CLICKED_KNIGHT":
      return (state = 150);
    case "CLICKED_ARCHER":
      return (state = 120);
    case "CLICKED_WIZARD":
      return (state = 90);
    case "ATTACK": 
      return state = state - action.str;
    case "DRINK_POTION": 
      return state = state + 15;
    case "FULL_LIFE": 
      return state = action.maxHealth;
    default:
      return state;
  }
};

export const charMaxHealth = (state = 100, action) => {
  switch (action.type) {
    case "CLICKED_KNIGHT":
      return (state = 150);
    case "CLICKED_ARCHER":
      return (state = 120);
    case "CLICKED_WIZARD":
      return (state = 90);
    default:
      return state;
  }
};

export const charExperience = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const charMaxExperience = (state = 100, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const charStrength = (state = 6, action) => {
  switch (action.type) {
    case "CLICKED_KNIGHT":
      return (state = 15);
    case "CLICKED_ARCHER":
      return (state = 10);
    case "CLICKED_WIZARD":
      return (state = 8);
    default:
      return state;
  }
};

export const charAgility = (state = 6, action) => {
  switch (action.type) {
    case "CLICKED_KNIGHT":
      return (state = 9);
    case "CLICKED_ARCHER":
      return (state = 15);
    case "CLICKED_WIZARD":
      return (state = 5);
    default:
      return state;
  }
};

export const charIntelligence = (state = 6, action) => {
  switch (action.type) {
    case "CLICKED_KNIGHT":
      return (state = 3);
    case "CLICKED_ARCHER":
      return (state = 8);
    case "CLICKED_WIZARD":
      return (state = 15);
    default:
      return state;
  }
};

export const charLevel = (state = 1, action) => {
  switch(action.type){
    default: return state;
  }
}
