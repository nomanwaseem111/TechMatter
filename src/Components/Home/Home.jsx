import React from 'react'
import Banner from '../Banner.jsx/Banner'
import HomeImg1 from '../Home/Homeimg1.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IconName } from "react-icons/ci";

const Home = () => {
  return (
    <>
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
       <span className='closer4'>TECH MATTER PROVIDING YOU BEST SERVICES</span>
          <div className='parent-5'>
          <div className='child-5'>
         <span><i class="fa-solid fa-desktop"></i></span><br /><br />
            <span className='c-5'>Managed IT Services</span>
            <p className='p-5'>When you partner with a managed IT provider, you can rest assured that your company’s network will be monitored closely and maintained regularly.</p>
            <button className='b-5'>Explore</button>
         </div>


         <div className='child-5'>
         <span><i class="fa-brands fa-windows"></i></span><br /><br />
            <span className='c-5'>Software Development</span>
            <p className='p-5'>When you partner with a managed IT provider, you can rest assured that your company’s network will be monitored closely and maintained regularly.</p>
            <button className='b-5'>Explore</button>
         </div>


         <div className='child-5'>
         <span><i class="fa-brands fa-arrows-spin"></i></span><br /><br />
            <span className='c-5'>Managed IT Services</span>
            <p className='p-5'>When you partner with a managed IT provider, you can rest assured that your company’s network will be monitored closely and maintained regularly.</p>
            <button className='b-5'>Explore</button>
         </div>

       

         <div className='child-5'>
         <span><i class="fa-solid fa-desktop"></i></span><br /><br />
            <span className='c-5'>Managed IT Services</span>
            <p className='p-5'>When you partner with a managed IT provider, you can rest assured that your company’s network will be monitored closely and maintained regularly.</p>
            <button className='b-5'>Explore</button>
         </div>

         <div className='child-5'>
         <span><i class="fa-brands fa-windows"></i></span><br /><br />
            <span className='c-5'>Managed IT Services</span>
            <p className='p-5'>When you partner with a managed IT provider, you can rest assured that your company’s network will be monitored closely and maintained regularly.</p>
            <button className='b-5'>Explore</button>
         </div>


         <div className='child-5'>
         <span><i class="fa-solid fa-arrows-spin"></i></span><br /><br />
            <span className='c-5'>Managed IT Services</span>
            <p className='p-5'>When you partner with a managed IT provider, you can rest assured that your company’s network will be monitored closely and maintained regularly.</p>
            <button className='b-5'>Explore</button>
         
         </div>
          </div>
       </div>


    













      <div>
        <h2 className='p-6'>LATEST NEWS & ARTICLES</h2>
        <div className='parent-6'>

          <Card className="card-folder" style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i0.wp.com/techmatterglobal.com/wp-content/uploads/2022/10/An-insight-into-Healthcare-Revenue-Cycle-Management-TechMatter-global.jpg?resize=400%2C250&ssl=1" />
            <Card.Body>
              <Card.Text className='card-text'>
                An insight into Healthcare Revenue Cycle Management
              </Card.Text>
              <a href='https://techmatterglobal.com/an-insight-into-healthcare-revenue-cycle-management/' className="read-more" target="_blank">Read More</a>
            </Card.Body>
          </Card>


          <Card className="card-folder" style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i0.wp.com/techmatterglobal.com/wp-content/uploads/2022/10/Introduction-to-Remote-Management-TechMatter-Global-1.jpg?resize=400%2C250&ssl=1" />
            <Card.Body>
              <Card.Text className='card-text'>
                Introduction to Remote Management
              </Card.Text>
              <a href='https://techmatterglobal.com/introduction-to-remote-management/' className="read-more" target="_blank">Read More</a>
            </Card.Body>
          </Card>



          <Card className="card-folder" style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://i0.wp.com/techmatterglobal.com/wp-content/uploads/2022/10/8-Free-Remote-Desktop-Software-in-2022-TechMatter-Global.jpg?resize=400%2C250&ssl=1" />
            <Card.Body>
              <Card.Text className='card-text'>
                8 Free Remote Desktop Softwares in 2022
              </Card.Text>
              <a href='https://techmatterglobal.com/8-free-remote-desktop-softwares-in-2022/' className="read-more" target="_blank">Read More</a>
            </Card.Body>
          </Card>







        </div>
      </div>


      <hr className='line'/>

      <div >
      <div className='parent-7'>
        <div className='seven-1'>
          <h3 className='review'>Review Us</h3>
          <span className='feed'>Your Feedback is important for Us</span>
        </div>
        <div className='seven-2'>
           <div>
          <span className='review-on'>REVIEWED ON  <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></span>
          </div>
          <div>
          <a href="https://clutch.co/profile/tech-matter-global?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo" target="_blank" className='clutch'>Clutch</a> <span className='review_us'>Review us</span>
          </div>
        </div>
        </div>
      </div>

    </>
  )
}

export default Home