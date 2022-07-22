import React from 'react'
import '../styles/Cards.css';

export const Cards = () => {
    const data = [
        {
            url: 'https://www.sephora.com/contentimages/homepage/071922/Homepage/RWD/2022-7-1-hp-marketing-banner-sephora-collection-makeup-match-brush-us-ca-rwd-slice.jpeg?imwidth=800',
            a: 'https://www.sephora.com/search?keyword=sephora%20collection%20makeup%20match%20brush&icid2=homepage_marketingbanner1_color_brand-sku-launch_sc_makeup_match_brush_us_image_rwd_072122',
            head: 'New Makeup Match Brush',
            head1: 'Collection',
            p1: 'Starting at $8! Vegantools to complete any look.',
            p2: 'SHOP NOW▸',
            bg: '#afd2ea'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/070522/Homepage/RWD/2022-07-18-hp-marketing-banner-klarna-afterpay-us-ca-rwd-slice.jpeg?imwidth=800',
            a: 'https://www.sephora.com/beauty/flexible-payments?icid2=homepage_marketingbanner1_multi-world_program_klarna_afterpay_us_image_rwd_071822',
            head: 'Shop Now, Pay Later',
            p1: 'Split your purchase into four payments.',
            p2: 'LEARN MORE▸',
            bg: '#d0e3f4'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/2022-06-02-hp-marketing-banner-wedding-seasonal-services-desktop-mobile-rwd-us-slice.jpeg?imwidth=800',
            a: 'https://www.sephora.com/happening/home?type=services&icid2=homepage_marketingbanner3_multi-world_program_weddingseasonalservices_us_image_rwd_072022',
            head: 'Weing Beauty Services',
            p1: 'Get a makeup look you will love for all your big events.',
            p2: 'BOOK NOW▸',
            bg: '#8cb9e8'
        }
    ]
  return (
    <>
        {data.map((items) => (
            <span>
                <a href={items.a}>
                    <div style={{backgroundColor: `${items.bg}`}} className='cards-contain'>
                        <div className='cards-txt'>
                            <h1>{items.head}</h1>
                            <h1>{items.head1}</h1>
                            <h2>{items.p1}</h2>
                            <p>{items.p2}</p>
                        </div>
                        <div className='cards-img'>
                            <img src={items.url} alt="" />
                        </div>
                    </div>
                </a>
            </span>
        ))}
    </>
  )
}
