import React from 'react'
import '../styles/BeautyOffers.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const BeautyOffers = () => {
    const data =[
        {
            url:'https://www.sephora.com/contentimages/promo/bpme/July/2022-bpme-bi-sku-point-multiplier-site-desktop-mobile-app-beauty-offers-banner-4x-tarte.jpg',
            head: 'Get 4X Points++',
            details: 'See details',
            da: 'https://www.sephora.com/brand/tarte',
            dmt: '113px',
            dml: '15px',
            btn: 'Apply',
            mt: '110px',
            ml: '15px',
            p: 'Beauty Insider members only.',
            p1: 'In store & online • Ends 7/27/2022†† Exclusions/terms apply. May be combined with other promotional offers.'
        },
        {
            url: 'https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-7-1-olaplex-clarifying-shampoo-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg',
            head: 'Free Olaplex Trial Size',
            btn: 'Apply',
            mt: '80px',
            ml: '15px',
            p: 'Try No. 6 Bond Smoother Reparative Styling Creme or No. 8 Bond Intense Moisture Hair Mask.',
            p1: 'Free with $25 purchase. Beauty Insider members only. Online only Exclusions/terms apply.'
        },
        {
            url: 'https://www.sephora.com/contentimages/promo/beautyoffers/2022/May/2022-complexion-story-site-desktop-mobile-beauty-offers-page-banner-sample-bag-1000x750-us.jpg',
            head: 'Free Foundation Sample Set',
            details: 'See details',
            da: 'https://www.sephora.com/beauty/beauty-sample-bag',
            dmt: '83px',
            dml: '15px',
            btn: 'Apply',
            mt: '80px',
            ml: '15px',
            p: 'Try bestselling complexion picks from Danessa Myricks Beauty, Rare Beauty, and more.',
            p1: 'Free with $35 purchase. Beauty Insider members only. Online only Exclusions/terms apply.'
        },
        {
            url: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-07-18-slotting-promo-app-site-desktop-mobile-dtext-beauty-offers-page-banner--SULWHASOOGIFT-us-ca-handoff.jpg",
            head: 'Complimentary Sulwhasoo Trial-Size Set',
            btn: 'Shop Now',
            a: 'https://www.sephora.com/brand/sulwhasoo?icid2=homepage_offerbanner_skincare_slotting_autoadd_sulwhasoo_us_rwd_promo_071822',
            mt: '80px',
            ml: '15px',
            p: 'Get four luxurious trial sizes for firmer-looking skin.',
            p1: 'Complimentary with $85 Sulwhasoo purchase. Beauty Insider members only. Online only Exclusions/terms apply.'
        },
        {
            url: 'https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-07-18-slotting-promo-site-mobile-product-page-middle-banner-us-ca-handoff_02.jpg',
            head: 'Complimentary Augustinus Bader Trial Sizes',
            btn: 'Shop Now',
            a: 'https://www.sephora.com/brand/augustinus-bader?icid2=homepage_offerbanner_skincare_slotting_autoadd_augustinusbader_us_rwd_promo_071822',
            mt: '65px',
            ml: '15px',
            p: 'Target wrinkles, dullness, and more with three luxurious skincare trial sizes.',
            p1: 'Complimentary with $300 Augustins Bader purchase. Beauty Insider members only. Online only Exclusions/terms apply.'
        },
        {
            url: 'https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-7-12-ceremonia-site-desktop-mobile-app-beauty-offers-page-banner-en-us.jpg',
            head: 'Free Trial Size from Ceremonia',
            btn: 'Apply',
            mt: '95px',
            ml: '15px',
            p: 'Try the Guava Leave-In Conditioner for stronger, shinier strands',
            p1: 'Free with $25 purchase. Beauty Insider members only. Online only Exclusions/terms apply.'
        },
        {
            url: 'https://www.sephora.com/contentimages/promo/beautyoffers/2022/July/2022-7-1-sol-de-janeiro-limited-edition-mists-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg',
            head: 'Free Sol de Janeiro Trial Size',
            btn: 'Apply',
            mt: '80px',
            ml: '15px',
            p: 'Pick one of two bestselling body creams! Try Bom Dia Bright or Brazilian Bum Bum. ',
            p1: 'Free with $25 purchase.Beauty Insider members only. Online only Exclusions/terms apply.'
        },
        {
            url: 'https://www.sephora.com/contentimages/promo/beautyoffers/2022/June/2022-6-23-laneige-water-bank-collection-relaunch-site-app-beauty-offers-page-banner.jpg',
            head: 'Free LANEIGE Trial Size',
            btn: 'Apply',
            mt: '80px',
            ml: '15px',
            p: 'Pick one of two! Try the Water Bank Cream Moisturizer or Water Sleeping Mask for next-level hydration.',
            p1: 'Free with $25 purchase.Beauty Insider members only. Online only Exclusions/terms apply.'

        },
        {
            url: 'https://www.sephora.com/contentimages/promo/beautyoffers/2022/June/2022-6-18-june-hair-challenge-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg',
            head: 'Free Moroccanoil Samples',
            btn: 'Apply',
            mt: '95px',
            ml: '15px',
            p: 'Hydrate from head to toe, and get smoother, shinier strands.',
            p1: 'Free with $35 purchase.Beauty Insider members only. Online only Exclusions/terms apply.'
        },
        {
            url: 'https://www.sephora.com/contentimages/promo/beautyoffers/2022/June/2022-06-05-slotting-promo-app-site-beauty-offers-banner-LUXURYSKIN-us-ca-handoff.jpg',
            head: 'Complimentary Luxe Skincare Trial Size',
            btn: 'Apply',
            mt: '80px',
            ml: '15px',
            p: 'Choose a trial size from Dior, SK-II, Dr. Barbara Sturm, or Caudalie.',
            p1: 'Free with $25 purchase.Beauty Insider members only. Online only Exclusions/terms apply.'
        }
    ]
  return (
    <div>
        <div className='item-title item-marg' style={{display:'flex'}}>
            <h1>Beauty Offers (15)</h1>
            <a href="https://www.sephora.com/beauty/beauty-offers">View all</a>
        </div>
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel-div1"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 5,
            partialVisibilityGutter: 40
            },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            },
            tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
            }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={5}
        swipeable
        >        
           {data.map((items) => (
               <span>
                <a href={items.a}>
               <div className='item-div1 popup1 '>
                   <div className='item-img-div1'>
                       <img src={items.url} alt="" />
                   </div>
                   <div className='item-txt1'>
                       <h1>{items.head}</h1>
                       <p>{items.p}</p>
                       <h2>{items.p1}</h2>
                   </div>
                   <div style={{display:'flex'}}>
                   <button style={{marginTop:`${items.mt}`,marginLeft:`${items.ml}`}} className='itembtn'>{items.btn}</button>
                   <a className='da'  href={items.da} style={{marginTop:`${items.dmt}`,marginLeft:`${items.dml}`,color:"blue"}}>{items.details}</a>
                   </div>
               </div>
               </a>
               </span>
           ))}
        </Carousel>
    </div>
  )
}
