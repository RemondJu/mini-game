import React from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
  import { NavLink } from 'react-router-dom';


const Player = (props) => {
  return ( 
    <div className="mt-5 text-center Player">
      <Card>
          <CardBody>
          <CardTitle>{props.charName}</CardTitle>
          <CardSubtitle>Level {props.charLevel}</CardSubtitle>
          </CardBody>
          <CardImg width="100%" src={props.charPic} alt="Card image cap" />
          <CardBody>
          <CardText href="#">HP : {props.charHealth}/{props.charMaxHealth}</CardText>
          <CardText href="#">XP : {props.charExperience}/{props.charMaxExperience}</CardText>
          </CardBody>
          <NavLink to="/Village">Flee</NavLink>
      </Card>
    </div>
   );
}

function mstp(state){
  return{
    charName: state.charName,
    charPic: state.charPic,
    charHealth: state.charHealth,
    charMaxHealth: state.charMaxHealth,
    charExperience: state.charExperience,
    charMaxExperience: state.charMaxExperience,
    charLevel: state.charLevel,
  }
}
 
export default connect(mstp)(Player);