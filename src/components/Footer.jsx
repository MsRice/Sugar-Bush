import React from 'react';
import Logo from '../img/logo/smlogo_500x500_noBackground.png'
import { GrInstagram } from "react-icons/gr";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <section id='footer'>
            <div className='footer--wrapper '>

                <figure className='footer__logo--wrapper'>
                    <img src={Logo} className="footer__logo--image" />
                </figure>
                <div className='footer__list--wrapper'>
                    <div>
                        <ul className='social__list--links'>
                            <li className='social__list--link click ig__howver'>
                                <a href="https://www.instagram.com/clubsugarbush/" target='_blank'><GrInstagram className='icon'/> Instagram</a>
                            </li>
                            <li className='social__list--link click fb__howver'>
                                <a href="https://www.facebook.com/sugarbushjonesboro" target='_blank'><FaSquareFacebook className='icon' /> Facebook</a>
                            </li>
                        </ul>
                        <ul className='contact__list--links'>
                            <li className='contact__list--link link__footer--effect' ><a href="tel:+4045737503" alt="Give us a Call!">404 &#x2022; 573 &#x2022; 7503</a></li>
                            <li className='contact__list--link'><a href="https://maps.app.goo.gl/8um9kKvy6GCr4zBJ8" target='_blank'>7955 Tara Boulevard, Jonesboro GA</a></li>
                        </ul>
                    </div>
                    <div className='gor_copywrite link__footer--effect'>Maintained by&nbsp;<a href='https://www.thegrainofrice.com' target='_blank'> Grain of Rice LLC </a>&nbsp;&copy; Since 2025 </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
