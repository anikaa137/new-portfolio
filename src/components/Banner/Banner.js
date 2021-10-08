import React from 'react';
import "./Banner.css"
import explore from '../video/explore4.mp4'
const Banner = () => {
    return (
        <section class="showcase mx-8">
            <video  src={explore} autoPlay muted loop></video>
            <div class="overlay"></div>
            <div class="text">
      <h2>Never Stop To </h2> 
      <h3>Exploring The World</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p>
       
    </div>
    </section>
    );
};

export default Banner;