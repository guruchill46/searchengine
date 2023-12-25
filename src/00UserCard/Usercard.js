import React from 'react';
const UserCard=(props)=>{
  return(
    <div className="ui card">
    <div className="content">
      <div className="header">Name</div>
      <div className="description">
        {props.children}
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>Add friend
      </div></div></div>
  
)}
export default UserCard;