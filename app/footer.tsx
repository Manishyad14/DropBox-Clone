// components/Footer.js
import React from 'react';
// Import your CSS module
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-center font-light p-2 flex-auto  ">
      <div className=" display-flex
  justify-content space-around
  
  padding-20px
  
  font-family-Arial, sans-serif;">
        <h2 className="flex: 1;
  max-width: 500px;">Dropbox@2.0</h2>
        <p>
          This Dropbox clone project was a great learning experience for me. I had the opportunity
          to work on implementing CRUD functionality, handling file uploads, and creating a seamless
          user interface. <br/>If you have any feedback or suggestions, feel free to reach out!
        </p>
      </div>
      <div className=" flex: 1;
  max-width: 300px;">
        <h3>Contact Me</h3>
        {/* Add your contact information or social media links here */}
        <p>Email: Yadavmanishroxx@gmail.com</p>
       <Link href="https://www.linkedin.com/in/manish-yadav-696888217/"><p>LinkedIn</p></Link> 
       <Link href=" https://github.com/Manishyad14 ">  <p>GitHub</p></Link>
        <p>Manish Yadav</p>
        <p>Hey guys I am Manish !!  
           
           I am a Computer Science student at Vellore Institute Of Technology - AP University
            

        </p>
        
      
        
      </div>
    </footer>
  );
};

export default Footer;
