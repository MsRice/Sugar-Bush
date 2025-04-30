import React from 'react';
import hookah_img from '../img/hookeh-design.png'

const Hookah = () => {

  
    return (
        <section id='hookah'>
            <div className='container hookah__wrapper'>
                <div className="row">
                    <figure className='hookah__img--wrapper'>
                        <img src={hookah_img} className="hookah__img--image" />
                    </figure>
                    <div className='section__title--wrapper'>
                        <h1 className='section__title'>Hookah Menu</h1>
                        <div className="h-divider">
                            <div className="shadow"></div>
                        </div>
                    </div>
                    <div className='hookah__menu--wrapper'>
                        <div className="hookah__menu__top"></div>

                        <div className="hookah__menu__inner--wrapper">
                        <span className='hookah__menu-title--flavor'>Prices</span>

                            <div className='hookah__menu--prices'>
                            
                                <span className="hookah__menu--price">$30 &nbsp;&nbsp;&nbsp;&nbsp;FOR STANDARD HOOKAH</span>
                                <span className="hookah__menu--price">$35 &nbsp;&nbsp;&nbsp;&nbsp;FOR MIX FLAVOR</span>
                                <span className="hookah__menu--price">$25 &nbsp;&nbsp;&nbsp;&nbsp;FOR REFILL HOOKAH</span>
                                <span className="hookah__menu--price">$20 &nbsp;&nbsp;&nbsp;&nbsp;FOR HAPPY HOUR HOOKAH</span>
                            </div>
                        </div>
                        
                        <span className='hookah__menu-title--flavor'>Flavors</span>
                        <div className='hookah__menu--flavors'>
                            <span className='hookah__menu--flavor'>Mango</span>
                            <span className='hookah__menu--flavor'>Apple</span>
                            <span className='hookah__menu--flavor'>Pineapple</span>
                            <span className='hookah__menu--flavor'>Strawberry</span>
                            <span className='hookah__menu--flavor'>Mint</span>
                            <span className='hookah__menu--flavor'>Sex On The Beach</span>
                            <span className='hookah__menu--flavor'>Skittle</span>
                            <span className='hookah__menu--flavor'>Peachiclous</span>
                            <span className='hookah__menu--flavor'>Mighty Freeze</span>
                            <span className='hookah__menu--flavor'>Watermelon Mint</span>
                            <span className='hookah__menu--flavor'>Blue Mist</span>
                            <span className='hookah__menu--flavor'>Magic Love</span>
                        </div>

                    </div>
                    
             
   
                </div>
            </div>
        </section>
    );
}

export default Hookah;
