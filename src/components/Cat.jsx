import React from 'react'
import '../styles/Cat.css';

export const Cat = () => {
    const data = [
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_minis_us_ca_rwd_slice.png',
            h1: 'Minis',
            atag: 'https://www.sephora.com/shop/travel-size-toiletries?icid2=homepage_soft-link_featuredcategories_minis_us_rwd_070122',
            url1: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_guide.svg',
            h11: 'Planet Positive',
            h21: 'Clean+',
            atag1: 'https://www.sephora.com/beauty/eco-friendly-beauty?icid2=homepage_soft-link_guidedselling_planetpositivecleanplus_us_rwd_070122'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_hair_blowdryer_us_ca_rwd_slice.jpg',
            h1: 'Hair Styling &',
            h2: 'Treatments',
            atag: 'https://www.sephora.com/shop/hair-products-treatments?icid2=homepage_soft-link_featuredcategories_hairtreatments_us_rwd_070122',
            url1: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/blush.png',
            h11: 'No Makeup',
            h21: 'Makeup',
            atag1: 'https://www.sephora.com/beauty/no-makeup-makeup?icid2=homepage_soft-link_guidedselling_nomakeupmakeup_us_rwd_070122'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png',
            h1: 'Foundation',
            atag: 'https://www.sephora.com/shop/foundation-makeup?icid2=homepage_soft-link_featuredcategories_foundation_us_rwd_070122',
            url1: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/fragrance_quiz.svg',
            h11: 'Fragrance',
            h21: 'Quiz',
            atag1: 'https://www.sephora.com/beauty/fragrance-gift-guide?icid2=rwd_soft_link_guidedselling_fragrance%20quiz_us_rwd_060222'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/sun.png',
            h1: 'SPF',
            atag: 'https://www.sephora.com/shop/sunscreen-sun-protection?icid2=homepage_soft-link_featuredcategories_spf_us_rwd_070122',
            url1: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_quiz.svg',
            h11: 'Skincare',
            h21: 'Routine',
            h31: 'Builder',
            atag1: 'https://www.sephora.com/beauty/skincare-routine-builder?icid2=homepage_soft-link_guidedselling_skincare%20routine%20builder_us_rwd_070122'
        },
        {
            url: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/healthy_hair_guide.svg',
            h1: 'Hair Masks',
            atag: 'https://www.sephora.com/shop/hair-masks?icid2=homepage_soft-link_featuredcategories_hair%20masks_us_rwd_070122',
            url1: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_quiz_us_ca_rwd_slice.png',
            h11: 'Complexion',
            h21: 'Routine',
            h31: 'Builder',
            atag1: 'https://www.sephora.com/beauty/face-makeup-routine-builder?icid2=homepage_soft-link_guidedselling_complexion%20routine%20builder_us_rwd_070122'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg',
            h1: 'Perfume',
            atag: 'https://www.sephora.com/shop/perfume?icid2=homepage_soft-link_featuredcategories_perfume_us_rwd_070122',
            url1: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/hair_quiz.svg',
            h11: 'Haircare Quiz',
            atag1: 'https://www.sephora.com/beauty/hair-care-quiz?icid2=homepage_soft-link_guidedselling_haircarequiz_us_rwd_070122'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_sephoracollection_SC_us_ca_rwd_slice.jpg',
            h1: 'Sephora',
            h2: 'Collection',
            atag: 'https://www.sephora.com/brand/sephora-collection?icid2=homepage_soft-link_featuredcategories_sephoracollection_us_rwd_060222',
            url1: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_BOB_us_rwd_slice.png',
            h11: 'Black-Owned',
            h21: 'Brands',
            atag1: 'https://www.sephora.com/beauty/black-owned-beauty-brands?icid2=rwd_soft_link_guidedselling_black%20owned%20brands_us_rwd_060222'
        },
        {
            url: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_makeup_mascara_lipstick_us_ca_rwd_slice.jpg',
            h1: 'Soft',
            h2: 'Contoured',
            h3: 'Makeup',
            atag: 'https://www.sephora.com/beauty/no-makeup-makeup?icid2=homepage_soft-link_featuredcategories_soft%20contoured%20makeup_us_rwd_070122',
            url1: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/luxury_beauty.svg',
            h11: 'Luxury Beauty',
            atag1: 'https://www.sephora.com/shop/luxury-beauty?icid2=homepage_soft-link_guidedselling_luxurybeauty_us_rwd_070122'
        }
    ]
  return (
      <>
            <div className='cat-div'>
                <div className='cat-txt-div'>
                    <h1>Featued Categories</h1>
                    <p>Shop what's popular now.</p>
                </div>  
                    <div className='cat-btn-div'>
                    {data.map((items) => (
                    <span className='popup'>
                        <a href={items.atag}>
                            <div className='cat-main'>
                                <div className='cat-innertxt'>
                                    <h1>{items.h1}</h1>
                                    <h2>{items.h2}</h2>
                                    <h3>{items.h3}</h3>
                                </div>
                                <div className='cat-innerimg'>
                                <img src={items.url} alt="" />
                                </div>                              
                            </div>
                        </a>
                    </span>
                     ))}    
                </div>                      
            </div>
            <div className='cat-div'>
            <div className='cat-txt-div'>
                    <h1>Need a Little Guidance?</h1>
                    <p>Check out our <span><a style={{textDecoration:'underline',color:'blue'}} href="https://www.sephora.com/beauty/best-beauty-products?icid2=homepage_soft-links_guidance_us_rwd_060222">quizzes and buying guides</a></span>
                        .
                    </p>
                </div>  
                    <div className='cat-btn-div'>
                    {data.map((items) => (
                    <span className='popup'>
                        <a href={items.atag1}>
                            <div className='cat-main'>
                                <div className='cat-innertxt'>
                                    <h1>{items.h11}</h1>
                                    <h2>{items.h21}</h2>
                                    <h3>{items.h31}</h3>
                                </div>
                                <div className='cat-innerimg'>
                                    <img src={items.url1} alt="" />
                                </div>                            
                            </div>
                        </a>
                    </span>
                     ))}    
                </div> 
            </div>
     </>
  )
}
