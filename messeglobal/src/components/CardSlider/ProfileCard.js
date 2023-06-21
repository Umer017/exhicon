import React from 'react';
import './ProfileCard.css'
const ProfileCard = ({ name, title, image }) => {
    return (
      
      <div className="card profile-card p-5">
        <div className="profile-image">
          <img className="card-img-top" src={image} alt={name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
