import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageSlider.css'

const ImageSlider = () => {
        return (
          <Carousel className='carousel-container' dynamicHeight={true}>
            <div>
              <img src="https://image.wedmegood.com/resized/1000X/uploads/member/715154/1573538485_Screenshot_from_2019_11_12_11_28_18.png" alt="Image 1" />
            </div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.NgM-_H8ucfHUGTEB0LbgkAHaEA?pid=ImgDet&w=828&h=448&rs=1" alt="Image 2" />
            </div>
            <div>
              <img src="https://media.weddingz.in/images/2d5478f0ac5bfc0c876fc273d20ae843/pcch.jpg" alt="Image 3" />
            </div>
          </Carousel>
        );
}

export default ImageSlider