import React from 'react'
import '../styles/NavStyles.css';
import SignIn from './SignIn';


export const Navbar = () => {
  return (
    <>
        <div className="nav-contain">
               <div className="nav-main">
                    <a href="/" className='sephora-btn'>
                        <img className='sephora-img' src="https://www.sephora.com/img/ufe/logo.svg" alt="Sephora" />
                    </a>
                    <div className='search-div'>
                        <input type="search" name="" id="search" placeholder='Search' />
                    </div>
                    <div className='nav-right'>
                        <div className='nav-btn-contain'>
                            <button type='button' className='store-btn'>
                                <div>
                                    <img className='store-img' src="https://www.sephora.com/img/ufe/icons/stores.svg" alt="Store" /> 
                                </div>
                                <div className='span-store'>
                                    <span >Stores & Services</span>
                                    <div className='span-span'>
                                        <span>Choose Your Store</span>
                                    </div>
                                </div>
                            </button>
                            <span>
                            <a style={{textDecoration:"none"}} href="https://community.sephora.com/">
                                <div className='comm-btn'>
                                    <div>
                                        <img className='comm-img' src="https://www.sephora.com/img/ufe/icons/community.svg" alt="Community" />
                                    </div>
                                    <div className='span-comm'> 
                                        <span>Community</span>
                                    </div>
                                </div>
                            </a>
                            </span>
                            <div className='sign-in-border'></div>
                            <button className='sign-btn'>
                                <div>
                                    <img className='sign-img' src="https://www.sephora.com/img/ufe/icons/me32.svg" alt="Sign In" />
                                </div>
                                <div className='span-sign'>
                                    <span>Sign In</span>
                                </div>
                            </button>   
                        </div>
                        <div className='cart-contain'>
                            <button className='chat-btn'>
                              <img src="https://res.cloudinary.com/mosaic-wellness/image/upload/v1603950724/staging/Home/Images/u_shopping-bag.svg" alt="" />
                            </button>
                            <button className='chat-btn'>
                                
                            </button>
                            <button className='chat-btn'>
                                
                            </button>
                        </div>
                    </div>
               </div>
        </div>
    </>
  )
}
