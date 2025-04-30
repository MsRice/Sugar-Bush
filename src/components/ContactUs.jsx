import React , { useRef } from 'react';
import emailjs from '@emailjs/browser'

const ContactUs = () => {
    
    const form = useRef();

   const apiKey = process.env.GOOGLE_MAP_API_KEY

    const contact = (e) => {
        e.preventDefault();
        const loading = document.querySelector('.modal__overlay--loading')
        const success = document.querySelector('.modal__overlay--success')
    
        loading.classList += ' modal__overlay--visible'
        // console.log(form.current)
        // emailjs.sendForm('service_unu5iuj' , 'template_8vsjr7i' , form.current , {
        //         publicKey: 'd2UGIB7K5AmItnzp-' ,
        //     })
        //     .then(() => {
        //         loading.classList.remove('modal__overlay--visible')
        //         success.classList += ' modal__overlay--visible'
        //         console.log(e.target)
        //     }).catch(() => {

        //      loading.classList.remove('modal__overlay--visible')
        //     alert("The email service is temporarily unavailable. Please contact me directly at patricedmaxwell@gmail.com . ")

        //     })
    }

    const drinkresponsibly = () =>{
        console.log('drink respoi')

    } 
    return (
        <div>
            <section id='contact-us'>
                <div className="container">
                    <div className="row">
                        <div className="contact-us">

                            <div className='connect__email--wrapper'>
                                <div className="email__tag--wrapper">
                                    <p className='email__tag--para'>Stay in the know with all the Grown & Sexy going ons!!</p>
                                </div>
                                <div className='email__input--wrapper'> 
                                    <form id="contact__form" ref={form} onSubmit={contact}>
                                        
                                        <label className="form__item--label" htmlFor="user_email">email</label> 
                                        <input className="input" type="email" name="user_email" placeholder='Email'/>
                                        <button id="contact__submit" type="submit" value="Send" className="form__submit">Send it our way</button>
                                    </form> 
                                   
                                </div>
                            </div>
                            <div className='connect__map--wrapper'>
                                <script async src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCQag3vFapyfgDsAvTRsGWQ8U79BepVvp8&callback=console.debug&libraries=maps,marker&v=beta`}>
                                </script>
                                <gmp-map center="33.536373138427734,-84.36553192138672" zoom="16" map-id="DEMO_MAP_ID">
                                    <gmp-advanced-marker position="33.536373138427734,-84.36553192138672" title="Sugar Bush"></gmp-advanced-marker>
                                </gmp-map>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact-hours'>
                <div className="container">
                        <div className="row">
                            <div className="contact-hours">
                                <div className='hours-fees--wrapper'>
                                    <div>
                                        <p className='title'>Hours</p>
                                        <ul className='hours--wrapper'>
                                            <li>Monday - Closed</li>
                                            <li>Tuesday - Closed</li>
                                            <li>Wednesday - Closed</li>
                                            <li>Thursday - Closed</li>
                                            <li>Friday - Closed</li>
                                            <li>Saturday - Closed</li>
                                            <li>Sunday - Closed</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='title'>Entertainment Fee</p>
                                        <ul className='fees--wrapper'>
                                            <li>Friday $5 @ 8:30pm</li>
                                            <li>Saturday $5 @ 9:00pm</li>
                                            <li>Live Band $10</li>
                                        </ul>
                                    </div>
                                </div>

                            
                                    
                                <div className='parties-password--wrapper'>
                                    <span>Parties with 6 or more guest seated at the same table and/or any check greater than $60, a 18% gratuity will be added.</span>
                                    <span>Wifi: Sugarbrush Customers</span>
                                    <span>Password: ilovefood</span>
                                    <div onClick={drinkresponsibly} className='click'>
                                        <span className='btn__primary'>Drink Responsibly</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;
