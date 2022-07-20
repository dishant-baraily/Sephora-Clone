import React from 'react'
import '../styles/Sections.css';

export const Sections = () => {
  return (
    <div>
        <div className='sections-contain'>
            <nav className='sections-nav'>
                <div className='new-div'>
                    <a className='atag' href="https://www.sephora.com/beauty/new-beauty-products">New</a>
                </div>
                <div className='brands-div'>
                    <a className='atag' href="https://www.sephora.com/brands-list">Brands</a>
                </div>
                <div className='makeup-div'>
                    <a className='atag' href="https://www.sephora.com/shop/makeup-cosmetics">Makeup</a>
                </div>
                <div className='skincare-div'>
                    <a className='atag' href="https://www.sephora.com/shop/skincare">Skincare</a>
                </div>
                <div className='hair-div'>
                    <a className='atag' href="https://www.sephora.com/shop/hair-products">Hair</a>
                </div>
                <div className='frag-div'>
                    <a className='atag' href="https://www.sephora.com/shop/fragrance">Fragrance</a>
                </div>
                <div className='tools-div'>
                    <a className='atag' href="https://www.sephora.com/shop/makeup-tools">Tools & Brushes</a>
                </div>
                <div className='bath-div'>
                    <a className='atag' href="https://www.sephora.com/shop/bath-body">Bath & Body</a>
                </div>
                <div className='min-div'>
                    <a className='atag' href="https://www.sephora.com/shop/travel-size-toiletries">Min Size</a>
                </div>
                <div className='gifts-div'>
                    <a className='atag' href="https://www.sephora.com/shop/gifts">Gifts</a>
                </div>
                <div className='beauty-div'>
                    <a className='atag' href="https://www.sephora.com/shop/makeup-cosmetics?pl=1&ph=20&ptype=manual">Beauty Under $20</a>
                </div>
                <div className='sale-div'>
                    <a className='atag' href="https://www.sephora.com/sale">Sale & Offers</a>
                </div>
            </nav>
        </div>
    </div>
  )
}
