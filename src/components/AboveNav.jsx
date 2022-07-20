import React from 'react'
import '../styles/AboveNav.css';

export const AboveNav = () => {
  return (
      <div className='above-nav-contain'>
        <div className='above-div'>
            <p className='font-p'>
                <button type='button' className='bi-btn'>
                    Beauty Insiders:
                    <strong>Earn Points Faster*▸ </strong>
                </button>
                Not a Beauty Insider?
                <a className='join-a' href="https://www.sephora.com/%20/profile/BeautyInsider">
                    <strong>Join Now ▸ </strong>
                </a>
                Free shipping with code  
                <strong> FREESHIP. </strong> 
                *Terms apply.
                
            </p>
        </div>
     </div>
  )
}
