import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture.js'

function Header(props){
  return(
      <div>

        <div className="container" style={{"display":"flex","height":"25vh","width":"100%","paddingLeft":"2px","paddingRight":"2px","marginTop":"2px"}}>
          <ProfilePicture/>
          <div style={{"width":"70%","display":"flex","height":"100%","flexDirection":"column","marginLeft":"2px"}}>
          <h1 className="d-none d-lg-block" style={{"textAlign":"left"}}>Aditya Panchal</h1>
          <div style={{"marginTop":"auto","marginBottom":"auto","textAlign":"left"}}>
          <a href="tel:+919619840377" style={{"fontSize":"18px"}}><span style={{"fontSize":"18px"}} className="material-icons">phone</span> +91 9619840377</a><br/>
          <a href="mailto:panchal.ah@somaiya.edu" style={{"fontSize":"18px"}}><span style={{"fontSize":"18px"}} className="material-icons">mail</span>panchal.ah@somaiya.edu</a><br/>
          <a href="mailto:panchal.ah@somaiya.edu" style={{"fontSize":"18px"}} ><span style={{"fontSize":"18px"}} className="material-icons">mail</span>adityahp241099@gmail.com</a><br/>
          <span style={{"fontSize":"15px"}} ><span style={{"fontSize":"15px"}} className="material-icons">location_on</span>Mumbai, India.</span>
          </div>
          </div>
        </div>
        <hr style={{"marginTop":"1px"}}/>
        <p style={{"textAlign":"justify","marginTop":"3px"}}>
          A Full Stack Web Developer with speciality in back-end and web-scraping. I enjoy working in the incubation phase of any project. Being a computer hobbyist, I like to explore new technologies. I use python as the primary language for most of my projects.
        </p>
      </div>
    );
}



// class Header extends Component {
//
//
//   render() {
//
//         return(
//           <div className="container" style={{"backgroundColor":"#ffffff"}}>
//             Home Page
//           </div>
//         );
//
//
//   }
// }
export default Header;
