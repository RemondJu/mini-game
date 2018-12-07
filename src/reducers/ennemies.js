const initialState = [
  {
      name: "goblin",
      level: 2,
      strength: 3,
      health: 25,
      xp: 25,
      gold: 20,
      pic: 'http://3.bp.blogspot.com/-BCIzvFseAds/VlV_2eiOAwI/AAAAAAAAIoA/8NrlYuDsfNE/s1600/PZO1002_008-065_Ch1_Burnt_Offerings-30.jpg'
  },{
      name: "slime",
      level: 1,
      strength: 5,
      health: 20,
      xp: 30,
      gold: 5,
      pic: 'https://d1u5p3l4wpay3k.cloudfront.net/slaythespire_gamepedia_en/thumb/b/b7/SlimeBoss.png/250px-SlimeBoss.png?version=4d14ae8dacff7f4c8818c08ac949b125'
  },{
      name: "goblin",
      level: 2,
      strength: 3,
      health: 25,
      xp: 25,
      gold: 20,
      pic: 'http://3.bp.blogspot.com/-BCIzvFseAds/VlV_2eiOAwI/AAAAAAAAIoA/8NrlYuDsfNE/s1600/PZO1002_008-065_Ch1_Burnt_Offerings-30.jpg'
  },{
      name: "slime",
      level: 1,
      strength: 5,
      health: 20,
      xp: 30,
      gold: 5,
      pic: 'https://d1u5p3l4wpay3k.cloudfront.net/slaythespire_gamepedia_en/thumb/b/b7/SlimeBoss.png/250px-SlimeBoss.png?version=4d14ae8dacff7f4c8818c08ac949b125'
  },{
      name: "goblin chief",
      level: 4,
      strength: 7,
      health: 35,
      xp: 50,
      gold: 100,
      pic: 'https://i.pinimg.com/originals/d5/d5/93/d5d5931d718af22cd1b2d5d831f8284c.jpg'
  }
]

export const ennemiesFloor1 = (state=initialState, action) => {
  switch (action.type){
    case 'ATTACK': 
      let newInitialState = initialState;
      newInitialState[action.idx].health -= action.str;
      return state=initialState;
    default: return state;
  }
}

export const minIndex = (state=0, action) =>{
  switch(action.type){
    case 'DEAD_ENNEMY' :
      return state += 1;
    default: 
      return state;
  }
}

export const maxIndex = (state=1, action) =>{
  switch(action.type){
    case 'DEAD_ENNEMY' :
      return state += 1;
    default: 
      return state;
  }
}