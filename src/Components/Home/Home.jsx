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
            <ul>
            <li className='list2'>Hardware & Software</li>

              <li>Desktops</li>
              <li>Laptops</li>
              <li>Mobile devices</li>
              <li>IoT devices</li>
              <li>Custom Applications</li>
              <li>Databases</li>

            </ul>
          </div>
          <div className='box'>
            <ul>
            <li className='list2'>Hardware & Software</li>

              <li>Desktops</li>
              <li>Laptops</li>
              <li>Mobile devices</li>
              <li>IoT devices</li>
              <li>Custom Applications</li>
              <li>Databases</li>

            </ul>
          </div>
          <div className='box'>
            <ul>
            <li className='list2'>Hardware & Software</li>
              <li>Desktops</li>
              <li>Laptops</li>
              <li>Mobile devices</li>
              <li>IoT devices</li>
              <li>Custom Applications</li>
              <li>Databases</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home