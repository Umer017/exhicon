import React from 'react';

const Location = () => {
  return (
    <>
    <div className='p-5'>
    <h1 id='location'  style={{border :0}} className=''>Company Location</h1>
    </div>
   
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4630.838844705323!2d73.92188190941506!3d18.519865992063878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c134fd62ed7b%3A0x52b7e0c3374276c0!2sMesse%20Global%20Pune%20Laxmi%20Lawns!5e0!3m2!1sen!2sin!4v1687346356418!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
     </>
  );
};

export default Location;
