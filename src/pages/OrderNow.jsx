import React, { useState } from 'react';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import seamless_logo from '../img/logos/download.png'
import ubereats_logo from '../img/logos/icons8-uber-eats-app-240.png'
import grubhub_logo from '../img/logos/icons8-grubhub-200.png'
import postmates_logo from '../img/logos/icons8-postmates-200.png'
import { RxDoubleArrowRight } from "react-icons/rx";

const OrderNow = () => {

    const [deliveryPickup ,SetDeliveryPickup] = useState(true);
    
    function btnClicked(deliveryPickup){
        console.log("btnclicked" , deliveryPickup)
        SetDeliveryPickup(!deliveryPickup)
        console.log("btnclicked" , deliveryPickup)
    }
    return (
        <section id='order-now'>
            <div className="container">
                <div className="row-sm">
                    <div className='order-online--wrapper'>
                        <div className="order__sect--wrapper order__header">
                            <h4 className='order__header--title'>Order online</h4>
                            <h5 className='order__header--sub-title'>Sugar Bush Bar & Grill Sports Bar</h5>
                            <div className='order__header--type-btns'> 
                                <button className={`order__header--type-btn ${deliveryPickup ? 'btn__selected': 'btn__unselected'}`} onClick={() => btnClicked(deliveryPickup)}><IoCheckmarkDoneSharp className={`${deliveryPickup ? 'btn__checked': 'btn__unchecked'}`}/>Pickup</button>
                                <button className={`order__header--type-btn ${deliveryPickup ? 'btn__unselected': 'btn__selected'}`} onClick={() => btnClicked(deliveryPickup)}><IoCheckmarkDoneSharp className={`${deliveryPickup ? 'btn__unchecked': 'btn__checked'}`}/>Delivery</button>
                            </div>
                             <h4>Place order with:</h4>
                        </div>
                        {deliveryPickup? <>
                        <div className="order__sect--wrapper order__service order__type--delivery">
                            <div className='order-service__logo--wrapper'><img className='order-service__logo--img' src={grubhub_logo} alt="" /></div>
                            <div className='order__service--block'><a href="https://www.grubhub.com/restaurant/sugar-bush-sports-bar--restaurant-7955-tara-blvd-jonesboro/6671392?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AAiGsoaoNIXaO6x7m0KLHivCQ64CwHa4TnBzkfdM085eCLU8ld-xuBmcFs45v7hisdeSJMp50xoPz7qIRWJsgKmttC4ppsNqVg%3D%3D" target='_blank'>
                                <h4 className='order__service--title'>Grubhub</h4>
                                <h5 className='order__service--para'>No fees</h5>
                                <h5 className='order__service--eta'>Ready in 10-20 min</h5>
                            </a></div>
                            <div className='order__service--arrow'><RxDoubleArrowRight /></div>
                        </div>
                        <div className="order__sect--wrapper order__service order__type--delivery">
                            <div className='order-service__logo--wrapper'><img className='order-service__logo--img' src={seamless_logo} alt="" /></div>
                            <div className='order__service--block'><a href="https://www.seamless.com/menu/sugar-bush-sports-bar--restaurant-7955-tara-blvd-jonesboro/6671392?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AAiGsoZ_k2v__lZBqv6o8TMIBMxq640iiVuqf18_yf9gc3wK--MijqdBgSBm2bTWPSJdIidthOTooPXF5We0hLVlqRDaEJ4JxA%3D%3D" target='_blank'>
                                <h4 className='order__service--title'>Seamless</h4>
                                <h5 className='order__service--para'>No fees</h5>
                                <h5 className='order__service--eta'>Ready in 10-20 min</h5>
                            </a></div>
                            <div className='order__service--arrow'><RxDoubleArrowRight /></div>
                        </div>
                        <div className="order__sect--wrapper order__service order__type--delivery">
                            <div className='order-service__logo--wrapper'><img className='order-service__logo--img' src={postmates_logo} alt="" /></div>
                            <div className='order__service--block'><a href="https://postmates.com/store/sugar-bush/7YCVOeL2SaGDldma2urtWg?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target='_blank'>
                                <h4 className='order__service--title'>Postmates</h4>
                                <h5 className='order__service--para'>No fees</h5>
                                <h5 className='order__service--eta'>Ready in 6-21 min</h5>
                            </a></div>
                            <div className='order__service--arrow'><RxDoubleArrowRight /></div>
                        </div>
                        <div className="order__sect--wrapper order__service order__type--delivery">
                            <div className='order-service__logo--wrapper'><img className='order-service__logo--img' src={ubereats_logo} alt="" /></div>
                            <div className='order__service--block'><a href="https://www.ubereats.com/store/sugar-bush/7YCVOeL2SaGDldma2urtWg?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target='_blank'>
                                <h4 className='order__service--title'>Uber Eats</h4>
                                <h5 className='order__service--para'>No fees</h5>
                                <h5 className='order__service--eta'>Ready in 6-21 min</h5>
                            </a></div>
                            <div className='order__service--arrow'><RxDoubleArrowRight /></div>
                        </div>
                        
                        </> : <>
                        
                        <div className="order__sect--wrapper order__service order__type--delivery">
                            <div className='order-service__logo--wrapper'><img className='order-service__logo--img' src={grubhub_logo} alt="" /></div>
                            <div className='order__service--block'><a href="https://www.grubhub.com/restaurant/sugar-bush-sports-bar--restaurant-7955-tara-blvd-jonesboro/6671392?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AAiGsoYWxBfKqyyBHJ61Xi0QBQckJ1cM68ZUTLphU_yNBXSTZ8xDgh3DD2yPteWeprzvZJlYB-Is3DmS7d3txRU3SE0drekAvQ%3D%3D" target='_blank'>
                                <h4 className='order__service--title'>Grubhub</h4>
                                <h5 className='order__service--para'>Service fees up to 15% -  Delivery fees start at $1.50</h5>
                                <h5 className='order__service--eta'>Delivers in 40 min</h5>
                            </a></div>
                            <div className='order__service--arrow'><RxDoubleArrowRight /></div>
                        </div>
                        <div className="order__sect--wrapper order__service order__type--delivery">
                            <div className='order-service__logo--wrapper'><img className='order-service__logo--img' src={seamless_logo} alt="" /></div>
                            <div className='order__service--block'><a href="https://www.seamless.com/menu/sugar-bush-sports-bar--restaurant-7955-tara-blvd-jonesboro/6671392?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AAiGsoZArZx3qbdcx9RnqBXV-zH3o8ndKECIUXx9-ezz8sj7WFwlnOs9P_vYPnsV5Wl9ICiLsGMfB95Xabld_lITe5rfAUu1RQ%3D%3D" target='_blank'>
                                <h4 className='order__service--title'>Seamless</h4>
                                <h5 className='order__service--para'>Service fees up to 15% -  Delivery fees start at $1.50</h5>
                                <h5 className='order__service--eta'>Delivers in 40 min</h5>
                            </a></div>
                            <div className='order__service--arrow'><RxDoubleArrowRight /></div>
                        </div>
                        <div className="order__sect--wrapper order__service order__type--delivery">
                            <div className='order-service__logo--wrapper'><img className='order-service__logo--img' src={postmates_logo} alt="" /></div>
                            <div className='order__service--block'><a href="https://postmates.com/store/sugar-bush/7YCVOeL2SaGDldma2urtWg?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target='_blank'>
                                <h4 className='order__service--title'>Postmates</h4>
                                <h5 className='order__service--para'>Fees may apply</h5>
                                <h5 className='order__service--eta'>Delivers in 40 min</h5>
                            </a></div>
                            <div className='order__service--arrow'><RxDoubleArrowRight /></div>
                        </div>
                        <div className="order__sect--wrapper order__service order__type--delivery">
                            <div className='order-service__logo--wrapper'><img className='order-service__logo--img' src={ubereats_logo} alt="" /></div>
                            <div className='order__service--block'><a href="https://www.ubereats.com/store/sugar-bush/7YCVOeL2SaGDldma2urtWg?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" target='_blank'>
                                <h4 className='order__service--title'>Uber Eats</h4>
                                <h5 className='order__service--para'>Fees may apply</h5>
                                <h5 className='order__service--eta'>Delivers in 40 min</h5>
                            </a></div>
                            <div className='order__service--arrow'><RxDoubleArrowRight /></div>
                        </div>
                        
                        </>}
                        
                        
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OrderNow;
