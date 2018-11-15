import React from 'react';
import { connect } from 'react-redux';

const Quests = () => {
  return ( 
    <div>
      <h2>Quests :</h2>
        <ul>
            <li>Kill the goblin chief. <br/>Reward : 150 gold <br/>XP : 150</li>
            <li>Get to level 2. <br/>Reward : Iron sword</li>
        </ul>
    </div>
   );
}

function mstp(state){
  return{

  }
}
 
export default connect(mstp)(Quests);