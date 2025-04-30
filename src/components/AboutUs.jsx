import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import crowd1 from '../img/crowd/crowd1.jpg'
import crowd2 from '../img/crowd/crowd2.jpg'
import crowd3 from '../img/crowd/crowd3.jpg'
Aos.init();
const AboutUs = () => {
    
    return (
        <section id="about-us">
            <div className='container about-us__wrapper'>
                <div className="row">
                    <div className='section__title--wrapper'>
                        <h1 className='section__title'>About Us</h1>
                        <div className="h-divider">
                            <div className="shadow"></div>
                        </div>
                    </div>
                    <div className='about-cof__sect--wrapper'>
                        <div className='about-cof--wrapper' data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                            <blockquote>
                                <p>Welcome to Sugar Bush Sports Bar & Restaurant in \
                                    Jonesboro, GA! We offer a unique blend of Fusion, \
                                    Soul Food, and Asian cuisine, creating an \
                                    unforgettable dining experience. Whether you're a \
                                    regular or a first-time guest, there's something to \
                                    satisfy your cravings and keep you coming back!</p>
                            </blockquote>
                        </div>
                        <figure className='about-cof__image--wrapper' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                            <img src={crowd1} alt="" className='about-cof__image--wrapper'/>
                        </figure>
                    </div>
                    <div className='about-cof__sect--wrapper'>
                        <figure className='about-cof__image--wrapper' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                            <img src={crowd2} alt="" className='about-cof__image--wrapper'/>
                        </figure>
                        <div className='about-cof--wrapper' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                            <blockquote>
                                <p>At Sugar Bush Sports Bar & Restaurant, we're more than just a place to eat and drink – we're a community. Our friendly staff ensures every visit is memorable, whether you're out with friends or celebrating a special occasion. Join us for great food, music, and camaraderie, and make unforgettable memories!</p>
                            </blockquote>
                        </div>
                        
                    </div>
                    <div className='about-cof__sect--wrapper'>
                        <div className='about-cof--wrapper' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                            <blockquote>
                               <p>Whether you're looking for a fun night out, delicious food, or a place to watch the big game, we have it all. We can't wait to welcome you to our lively establishment and be a part of your cherished memories. Your satisfaction is our priority, and we strive to make each visit to Sugar Bush Sports Bar & Restaurant a delightful one.</p>
                            </blockquote>
                        </div>
                        <figure className='about-cof__image--wrapper' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                            <img src={crowd3} alt="" className='about-cof__image--wrapper'/>
                        </figure>
                        
                    </div>
                     
                </div>
            </div>
        </section>
    );
    
}

export default AboutUs;
