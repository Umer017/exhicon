import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileCardSlider = ({ profiles }) => {
  return (
    <div id="profileCardSlider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner container">
      <div className='p-5'>
    <h1 id='location'  style={{border :0}} className=''>Teams</h1>
    </div>
        {profiles.map((profile, index) => (
          <div key={index} className={`carousel-item${index < 1 ? ' active' : ''}`}>
            <div className="row">
              {profiles.slice(index, index + 3).map((profile, subIndex) => (
                <div key={subIndex} className="col-lg-4 col-md-3">
                  <ProfileCard name={profile.name} title={profile.title} image={profile.image} />
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
      <a className="carousel-control-prev" href="#profileCardSlider" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#profileCardSlider" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ProfileCardSlider;
