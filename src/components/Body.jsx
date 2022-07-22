import React from 'react'
import '../styles/Body.css';
import { Cards } from './Cards';
import { Cards1 } from './Cards1';
import { Cat } from './Cat';
import { Footer } from './Footer';
import { ItemsSlider } from './ItemsSlider';
import { SliderImg } from './SliderImg';



export const Body = () => {
  
  return (
    <>
        <div className='body-container'>    
          <div className='slider'>
            <SliderImg />
          </div>
          <div className='items-slider'>
            <div className='items-div'>
              {/* <ItemsSlider /> */}
            </div>
          </div>
          <div className='items-slider'>
            <div className='items-div'>
              {/* <ItemsSlider /> */}
            </div>
          </div>
          <div className='items-slider'>
            <div className='items-div'>
              {/* <ItemsSlider /> */}
            </div>
          </div>
          <div className='cards-div'>
            <Cards />
          </div>
          <div className='items-slider'>
            <div className='items-div'>
              {/* <ItemsSlider /> */}
            </div>
          </div>
          <div className='items-slider'>
            <div className='items-div'>
              {/* <ItemsSlider /> */}
            </div>
          </div>
          <div className='items-slider'>
            <div className='items-div'>
              {/* <ItemsSlider /> */}
            </div>
          </div>
          <div className='cat-contain'>
            <Cat />
          </div>
          <div className='cards-div'>
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
