import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.shuffleFriends(props.id)}/> 
    </div>
   

   
  
      
   
 
);

export default FriendCard;
