const charPic = (state= 'https://vignette.wikia.nocookie.net/criminal-case-grimsborough/images/2/26/Unknown_Character.png/revision/latest?cb=20141106142941', action) => {
    switch(action.type){
        case 'CLICKED1': return state = 'https://png.icons8.com/metro/1600/doctor-fate-helmet.png';
        case 'CLICKED2': return state = 'https://png.icons8.com/ios/1600/archer.png';
        case 'CLICKED3': return state = 'https://png.icons8.com/metro/1600/wizard.png';
        default: return state;
    }
}

export default charPic;