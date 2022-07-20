import React from 'react'
import '../styles/NavStyles.css';

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
                            <button className='comm-btn'>
                                <div>
                                    <img className='comm-img' src="https://www.sephora.com/img/ufe/icons/community.svg" alt="Community" />
                                </div>
                                <div className='span-comm'>
                                    <span  >Community</span>
                                </div>
                            </button>
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
                                <svg>
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11.99 2.5C6.748 2.5 2.5 6.753 2.5 12s4.249 9.5 9.49 9.5c2.064 0 3.973-.66 5.53-1.78a.5.5 0 0 1 .422-.077l3.351.9-.985-3.68a.5.5 0 0 1 .043-.367A9.464 9.464 0 0 0 21.479 12a.5.5 0 0 1 1 0c0 1.726-.417 3.355-1.154 4.793l1.158 4.327a.5.5 0 0 1-.613.613l-3.962-1.063a10.435 10.435 0 0 1-5.919 1.83C6.196 22.5 1.5 17.799 1.5 12c0-5.798 4.696-10.5 10.49-10.5a.5.5 0 1 1 0 1z" fill="currentColor"></path>
                                    <path d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="currentColor"></path>
                                    <path fill="currentColor" d="m14.692 8.885 6.769-7.193.667.629-6.769 7.192z"></path>
                                </g>
                                </svg>
                            </button>
                            <button className='chat-btn'>
                                <svg>
                                    <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path>
                                </svg>
                            </button>
                            <button className='chat-btn'>
                                <svg>
                                    <path d="M21.397 20.472l-.516 2.088a1.631 1.631 0 01-1.582 1.245H4.741c-.75 0-1.402-.513-1.583-1.245l-.517-2.088h18.756zm.813-3.286l-.565 2.286H2.393l-.565-2.286H22.21zm.813-3.286l-.566 2.286H1.582L1.016 13.9h22.007zm.373-4.333c.355 0 .616.334.53.679L23.27 12.9H.77l-.654-2.654a.546.546 0 01.53-.679h22.75zM13.83 1.716l5.572 5.2a.5.5 0 01-.683.731l-5.572-5.201a1.647 1.647 0 00-2.256 0L5.319 7.647a.501.501 0 01-.682-.732l5.573-5.199a2.647 2.647 0 013.62 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
               </div>
        </div>
    </>
  )
}
