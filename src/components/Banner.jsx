import React, { useEffect, useRef } from 'react';
import banner_video from '../img/sugar_bush_banner.mp4'
const Banner = () => {

      
    return (
        <section id='Banner'> 
            <div className='banner__background--wrapper'>
                <video className='banner__background--video' src={banner_video} autoplay controls controlsList='nofullscreen nodownload' muted ></video> 
            </div>
        </section>
    );
}

export default Banner;

