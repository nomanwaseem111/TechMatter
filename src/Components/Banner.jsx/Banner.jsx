import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../Banner.jsx/Banner1.jpg'
import Banner2 from '../Banner.jsx/Banner2.jpg'
import Banner3 from '../Banner.jsx/Banner3.jpg'


const Banner = () => {
  return (
    <div>
         <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
           <div className='banner-background'>
           <div className='inner-div'>
          <h3 className='heading1'>REVENUE CYCLE MANAGEMENT</h3>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='banner-background'>
        <div className='inner-div'>
        <h3 className='heading2'>MANAGED IT SERVICES</h3>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
          
        />

        <Carousel.Caption>
        <div className='banner-background'>
        <div className='inner-div'>
        <h3 className='heading3'>SOFTWARE DEVELOPMENT</h3>
        </div>
        </div>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Banner