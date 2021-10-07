import React from 'react';
import explore from '../video/explore3.mp4'
const Banner = () => {
    return (
        <div>
            <video  src={explore} autoPlay muted loop></video>
            <div class="overlay"></div>
        </div>
    );
};

export default Banner;