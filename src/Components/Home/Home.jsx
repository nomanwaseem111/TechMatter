import React from 'react'
import Banner from '../Banner.jsx/Banner'
import HomeImg1 from '../Home/Homeimg1.jpg'
const Home = () => {
  return (
    <div>
      <Banner />

      <div className='parent2'>
        <div className='child-1'>
          <h5 id="one">ABOUT TECHMATTER</h5>
          <h1 id="two">Leverage our Expertise in IT Solutions</h1>
          <p>TechMatter is an IT Solutions and Managed Services Provider specializing in developing custom solutions leveraging the latest technologies that meet our client’s business objectives. Our team has years of experience in the industry, and we are committed to providing our clients with the best service possible. We specialize in a wide range of services such as Data Center Management, Cloud Computing, Networking, Healthcare Revenue Cycle Management, Software Development Web Development, and Digital Marketing.</p>
          <button id='btn'>Learn More</button>

        </div>

        <div className='child-2'>
          <img src={HomeImg1} alt="" />
        </div>
      </div>

      <div>
        <h5 className='closer'>TAKE A CLOSER LOOK AT IT COMPONENTS WE MANAGE</h5>
        <div className='parent-3'>
          <div className='box'>
            <h6>Hardware and Software</h6>
            <span className='item'>Desktop</span><br />
            <span className='item'>Laptop</span><br />
            <span className='item'>Mobile Devices</span><br />
            <span className='item'>IoT Devices</span><br />

            <span className='item'>Customs Application</span><br />
            <span className='item'>Databases</span><br />

          </div>
          <div className='box'>
            <h6>Networks</h6>
            <span className='item'>Switches</span><br />
            <span className='item'>Routers</span><br />
            <span className='item'>Wireless access points</span><br />
            <span className='item'>Modems</span><br />

            <span className='item'>Hubs</span><br />
            <span className='item'>Servers</span><br />
          </div>
          <div className='box'>
            <h6>Security</h6>
            <span className='item'>Desktop</span><br />
            <span className='item'>Laptop</span><br />
            <span className='item'>Mobile Devices</span><br />
            <span className='item'>IoT Devices</span><br />

            <span className='item'>Customs Application</span><br />
            <span className='item'>Databases</span><br />
          </div>
        </div>
      </div>



      <div>
        <h5 className='closer2'>THE BEST SOLUTIONS FOR OUR CLIENTS</h5>
        <div className='parent-4'>
          <div className='box-1'>
            <span><i class="fa-solid fa-lightbulb"></i></span>
            <h4>Customer Satisfaction</h4>
            <p className='para'>Our first priority is Our Customer’s Satisfaction. We feel that success gets when customers are satisfied. Customer’s satisfaction is one important factor at TechMatter.</p>
          </div>
          <div className='box-1'>
            <span><i class="fa-solid fa-bullseye"></i></span>
            <h4>Innovation & Creativity</h4>
            <p className='para'>Tech Matter Guarantee to provide you the Solutions that are Out of the box, Unique, Creative, and Productive. Our skilled and talented team is at your service.</p>
          </div>
          <div className='box-1'>
            <span><i class="fa-solid fa-circle-user"></i></span>
            <h4>Our Personnel</h4>
            <p className='para'>Our talented team are our key assets. With their exceptional creative abilities, you will have what you demand. Improve your business with speed and efficiency.</p>
          </div>
        </div>
      </div>



      <div>
        
      </div>
    </div>
  )
}

export default Home