import React from 'react'
import '../styles/Body.css';
import { BeautyOffers } from './BeautyOffers';
import { Cards } from './Cards';
import { Cards1 } from './Cards1';
import { Cat } from './Cat';
import { Footer } from './Footer';
import { Items } from './Items';
import { SliderImg } from './SliderImg';



export const Body = () => {
  
  return (
    <>
        <div className='body-container'>    
          <div>
            <SliderImg />
          </div>
          <br />
          <div className='items-slider'>
            <div className='items-div'>
              <Items />
            </div>
          </div>
          <div className='items-div'>
            <BeautyOffers />
          </div>
          <div className='cards-div'>
            <Cards />
          </div>
      
          <div className='items-slider'>
            <div className='items-div'>
              <Items />
            </div>
          </div>
          <div className='items-div'>
            <BeautyOffers />
          </div>
          <div className='cat-contain'>
            <Cat />
          </div>
          <div className='cards-div1'>
            <Cards1 />
          </div>
          <div className='a-footer'>
              <a href="">Website feedback? Let us know ▸ </a>
          </div>
          <div className='footer'>
            <Footer />
          </div>        
        </div>
       
    </>
  )
}
