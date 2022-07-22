import React from 'react'
import '../styles/Cards1.css';

export const Cards1 = () => {
    const data = [
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-diversity-inclusion-desktop-mobile-us-ca-slice.jpeg?imwidth=800',
            a: 'https://www.sephora.com/beauty/diversity-and-inclusion?icid2=homepage_reassurance_banner_1_multi-world_program_diversityequityinclusion_us_rwd_071822',
            head: 'Our Commitment to Diversity, Equity',
            head1: '& Inclusion',
            p2: 'LEARN MORE▸',
            bg: '#ffffff',
            mt: '-2px',
            border: '1px solid #e4e5e4'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-ease-convenience-desktop-mobile-us-ca-slice.jpeg?imwidth=800',
            a: 'https://www.sephora.com/beauty/pick-up-delivery-options?icid2=homepage_reassurance_banner_ease&convenience_link_us_rwd_060222',
            head: 'Beauty on Demand',
            p1: 'Fast and easy options that work for you.',
            p2: 'LEARN MORE▸',
            bg: '#bcddee'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/070522/Homepage/RWD/2022-7-18-birb-charity-new-marketing-banner-july-us-ca-rwd-slice.jpeg?imwidth=800',
            a: 'https://www.sephora.com/rewards?icid2=homepage_reassurancebanner3_multi-world_program_julycharity_us_rwd_071822',
            head: 'Weing Beauty Services',
            p1: 'Help the Right to be fight harrasment in all forms.',
            p2: 'REDEEM NOW▸',
            bg: '#ffffff',
            mt: '-2px',
            border: '1px solid #e4e5e4'
        }
    ]
  return (
    <>
        {data.map((items) => (
            <span>
                <a href={items.a}>
                    <div style={{backgroundColor: `${items.bg}`,border:`${items.border}`}} className='cards-contain'>
                        <div className='cards-txt'>
                            <h1>{items.head}</h1>
                            <h1>{items.head1}</h1>
                            <h2>{items.p1}</h2>
                            <p>{items.p2}</p>
                        </div>
                        <div className='cards-img'>
                            <img style={{marginTop: `${items.mt}`}} src={items.url} alt="" />
                        </div>
                    </div>
                </a>
            </span>
        ))}
    </>
  )
}
