import React from 'react'
import Partners from '../Partners/Partners';
import ImageSlider from '../ImageSlider/ImageSlider';
import Location from '../Location/Location';
import 'bootstrap';
import ProfileCardSlider from "../CardSlider/ProfileCardSlider";
const Home = () => {
    const profiles = [
        {
          name: 'Shrishail Bagale',
          title: 'Software Engineer',
          image: 'http://booking.messeglobalpune.com/assets/img/profileimages/shri.jpeg'
        },
        {
            name: 'Shrishail Bagale',
            title: 'Software Engineer',
            image: 'http://booking.messeglobalpune.com/assets/img/profileimages/shri.jpeg'
        },
        {
            name: 'Shrishail Bagale',
            title: 'Software Engineer',
            image: 'http://booking.messeglobalpune.com/assets/img/profileimages/shri.jpeg'
        },
        {
            name: 'Shrishail Bagale',
            title: 'Software Engineer',
            image: 'http://booking.messeglobalpune.com/assets/img/profileimages/shri.jpeg'
        },
        // Add more profiles here...
      ];
  
      
  return (
    <>
    <ImageSlider/>
      <Location/>
      <Partners/>
      <ProfileCardSlider profiles={profiles} />
      </>
  )
}
 
export default Home