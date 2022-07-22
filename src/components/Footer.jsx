import React from 'react'
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <div>
        <div className='footer-top'>
            <a className='ftop-store' href="https://www.sephora.com/happening/stores/sephora-near-me">
                <img src="https://www.sephora.com/img/ufe/icons/find-store.svg" alt="" />
                <span className='ftop-txt'>
                    <p className='ftop-head'>Find a Store</p>
                    <br />
                    <p className='ftop-sub' >Choose Your Store</p>
                </span>
            </a>
            <div className='ftop-help'>
                <button style={{display:'flex'}}>
                    <div style={{display:'flex'}}>
                        <span>
                            <svg width="24" height="24" fill="none">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.99 2.5C6.748 2.5 2.5 6.753 2.5 12s4.249 9.5 9.49 9.5c2.064 0 3.973-.66 5.53-1.78a.5.5 0 0 1 .422-.077l3.351.9-.985-3.68a.5.5 0 0 1 .043-.367A9.464 9.464 0 0 0 21.479 12a.5.5 0 0 1 1 0c0 1.726-.417 3.355-1.154 4.793l1.158 4.327a.5.5 0 0 1-.613.613l-3.962-1.063a10.435 10.435 0 0 1-5.919 1.83C6.196 22.5 1.5 17.799 1.5 12c0-5.798 4.696-10.5 10.49-10.5a.5.5 0 1 1 0 1z" fill="currentColor"></path>
                                    <path d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="currentColor"></path>
                                    <path fill="currentColor" d="m14.692 8.885 6.769-7.193.667.629-6.769 7.192z"></path>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <span>
                        <p className='ftop-head'>Live Beauty Help</p>
                        <br />
                        <p className='ftop-sub'>Chat is unavialable</p>                  
                    </span>
                </button>
            </div>
            <a className='ftop-store' href="https://www.sephora.com/beauty/mobile">
                <img src="https://www.sephora.com/img/ufe/icons/app.svg" alt="" />
                <span className='ftop-txt'>
                    <p className='ftop-head'>Get the App</p>
                    <br />
                    <p className='ftop-sub'>Text "APP" to 36681</p>
                </span>
            </a>
            <a className='ftop-store' href="https://www.sephora.com/beauty/text-alerts">
                <img src="https://www.sephora.com/img/ufe/icons/sms-ko.svg" alt="" />
                <span>
                    <p className='ftop-head'>Get Sephora Text Alerts</p>
                    <br />
                    <p className='ftop-sub'>Sign uo Now</p>
                </span>
            </a>
            <a style={{width:'407px'}} className='ftop-store' href="https://www.sephora.com/creditcard">
                <img src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg" alt="" />
                <span>
                    <p className='ftop-head'>Sephora Credit Card Program</p>
                    <br />
                    <p className='ftop-sub'>
                        Want 25% off your Sephora purchase<sup>1</sup>? <span >DETAILS</span>
                    </p>
                </span>
            </a>
            
        </div>
        <hr className='footer-hr' />
        <div className='footer-main'>
            <div className='fmain1'>
                <div>
                    <h2 className='h2head'>About Sephora</h2>
                    <ul className='listyle' style={{listStyle:"none"}}>
                        <li>
                            <a href="https://www.sephora.com/beauty/about-us">About Sephora</a>
                        </li>
                        <li>
                            <a href="http://newsroom.sephora.com/">Newsroom</a>
                        </li>
                        <li>
                            <a href="https://jobs.sephora.com/USA">Careers</a>
                        </li>
                        <li>
                            <a href="https://www.sephorastands.com/">Sephora Social Impact</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/supply-chain-transparency">Supply Chain Transparency</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/affiliates">Affiliates</a>
                        </li>
                        <li>
                            <a href="https://www.sephora-events.com/">Sephora Events</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/giftcards">Gift Cards</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/international-websites">Sephora Global Sites</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/diversity-and-inclusion">Diversity and Inclusion</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/instagram-checkout">Checkout on Instagram </a>
                        </li>
                        <li>
                            <a href="https://sephoraaccelerate.com/">Sephora Accelerate</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/vulnerability-disclosure-program">Report a Vulnerability</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='fmain1'>
            <div>
                    <h2 className='h2head'>My Sephora</h2>
                    <ul className='listyle' style={{listStyle:"none"}}>
                        <li>
                            <a href="https://www.sephora.com/profile/BeautyInsider">Beauty Insider</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/creditcard">Sephora Credit Card</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/profile/me">Community Profile</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/order-status">Order Status</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/purchase-history">Purchase History</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/profile/MyAccount">Account Settings</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/in-store-services">Beauty Advisor Recommendations</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/beauty-offers">Beauty Offers</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/best-beauty-products">Quizzes & Buying Guides</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/rewards">Rewards Bazaar</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/shopping-list">Loves</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/happening/home">Book a Reservation</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='fmain1'>
            <div>
                    <h2 className='h2head'>Help</h2>
                    <ul className='listyle' style={{listStyle:"none"}}>
                        <li>
                            <a href="https://www.sephora.com/beauty/customer-service">Customer Service</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/returns-exchanges">Returns & Exchanges</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/pick-up-delivery-options">Delivery and Pickup Options</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/shipping-information">Shipping</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/billing">Billing</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/international-shipments">International Shipments</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/beauty-services-faq">Beauty Services FAQ</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/sephora-at-kohls-faq">Sephora at Kohl's</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/jcpenney">Sephora Inside JCPenney</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/happening/stores/sephora-near-me">Store Locations</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/order-online">Online Ordering</a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/flexible-payments">Klarna & Afterpay </a>
                        </li>
                        <li>
                            <a href="https://www.sephora.com/beauty/accessibility">Accessibilitye</a>
                        </li>                  
                    </ul>
                </div>
            </div>
            <div className='fmain1'>
                <div>
                    <h2 className='h2head'>Region & Language</h2>
                </div>
                <div style={{display:'flex',paddingTop:'10px'}}>
                    <img style={{width:"24px",height:'16px',marginRight:'10px'}} src="https://www.sephora.com/img/ufe/flags/us.svg" alt="" />
                    <h2 style={{fontSize:'12px',fontWeight:'450'}}>United States - English</h2>
                </div>
                <div className='flaghover' style={{display:'flex',paddingTop:'10px'}}>
                    <img style={{width:"24px",height:'16px',marginRight:'10px'}} src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="" />
                    <h2 style={{fontSize:'12px',fontWeight:'450'}}>Canada - English</h2>
                </div>
                <div className='flaghover' style={{display:'flex',paddingTop:'10px'}}>
                    <img style={{width:"24px",height:'16px',marginRight:'10px'}} src="https://www.sephora.com/img/ufe/flags/ca.svg" alt="" />
                    <h2 style={{fontSize:'12px',fontWeight:'450'}}>Canada - Français</h2>
                </div>
            </div>
            <div className='fmainlast'>
                <div className='bigtxt'>
                    <p>
                        We Belong to
                        <br />
                        Something Beautiful
                    </p>
                </div>
                <div className='email'>
                    <label>Sign up for Sephora Emails</label>
                    <form className='formemail' style={{display:'flex'}}>
                        <input type="text" autoComplete='email' required placeholder='Enter your email address'/>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        <hr className='footer-hr' />
        <div  className='footer-end'>
            <div className='privacy'>
                <p className='alast1'>© 2022 Sephora USA, Inc. All rights reserved.</p>
                <p className='alast'>
                    <a href="https://www.sephora.com/privacy-policy">Privacy Policy</a>
                    <a href="https://www.sephora.com/terms-of-use">Terms of Use</a>
                    <a href="https://www.sephora.com/beauty/accessibility">Accessibility</a>
                    <a href="https://www.sephora.com/sitemap/departments/">Sitemap</a>
                    <a>CA - Do Not Sell My Personal Information</a>
                </p>
                <p style={{marginTop:'5px'}} className='alast1'>1-877-737-4672    TTY: 1-888-866-9845</p>
            </div>
            <div className='socials'>
                <a href="https://www.instagram.com/sephora">
                    <img className='socialsimg' src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg" alt="" />
                </a>
                <a href="https://www.facebook.com/sephora">
                    <img className='socialsimg' src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg" alt="" />
                </a>
                <a href="https://twitter.com/sephora">
                    <img className='socialsimg' src="https://www.sephora.com/img/ufe/icons/twitter-ko.svg" alt="" />
                </a>
                <a href="https://www.youtube.com/sephora">
                    <img className='socialsimg' src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg" alt="" />
                </a>
                <a href="https://www.pinterest.com/sephora">
                    <img className='socialsimg' src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg" alt="" />
                </a>
                <a href="https://www.snapchat.com/add/sephora">
                    <img className='socialsimg' src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg" alt="" />
                </a>
                <a href="https://www.tiktok.com/@sephora">
                    <img className='socialsimg' src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg" alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}
