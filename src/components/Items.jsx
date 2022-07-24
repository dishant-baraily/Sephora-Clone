import React from 'react'
import '../styles/Items.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Items = () => {
    const data = [
        {
            url: 'https://www.sephora.com/productimages/sku/s2588762-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320',
            head: 'Farmacy',
            a: 'https://www.sephora.com/product/1-vitamin-a-retinol-serum-P500288?skuId=2588762&icid2=products%20grid:p500288:product',
            p: '1% Vitamin A Retional',
            p1: 'Serum'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2538858-main-zoom.jpg?imwidth=320',
            head: 'amika',
            a: 'https://www.sephora.com/product/amika-bust-your-brass-blonde-purple-conditioner-P471531?icid2=just%20dropped',
            p: 'Bust Your Brass',
            p1: 'Blonde Purple'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2577484-main-zoom.jpg?imwidth=320',
            head: 'Lancôme',
            a: 'https://www.sephora.com/product/P500503',
            p: 'Le 8 Hypnôse Serum-',
            p1: 'Infused Volumizing...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2585628-main-zoom.jpg?imwidth=320',
            head: 'tarte',
            a: 'https://www.sephora.com/product/tartelette-tubing-mascara-P500182?icid2=just%20dropped',
            p: 'tartelette tubing',
            p1: 'mascara'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2538874-main-zoom.jpg?imwidth=320',
            head: 'amika',
            a: 'https://www.sephora.com/product/amika-the-kure-shampoo-P468626?icid2=just%20dropped',
            p: 'The Kure Bond Repair',
            p1: 'Conditioner for ...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2569366-main-zoom.jpg?imwidth=320',
            head: 'Charlotte Tilbury',
            a: 'https://www.sephora.com/product/beautiful-skin-sun-kissed-glow-cream-bronzer-P500285?icid2=just%20dropped',
            p: 'Beautiful Skin Sun-',
            p1: 'Kissed Glow Cream ...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2594448-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320',
            head: 'Glow Recipie',
            a: 'https://www.sephora.com/product/P479327',
            p: 'Mini Plum Plump',
            p1: 'Hyaluronic Acid ...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2592012-main-zoom.jpg?imwidth=320',
            head: 'Natasha Denona',
            a: 'https://www.sephora.com/product/P500627',
            p: 'Mini Bronze',
            p1: 'Eyeshadow Palette'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2407328-main-zoom.jpg?imwidth=320',
            head: 'Charlotte Tilbury',
            a: 'https://www.sephora.com/product/airbrush-flawless-finish-setting-powder-P433526?icid2=just%20dropped',
            p: 'Airbrush Flawless',
            p1: 'Finish Setting Powder'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2567451-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320',
            head: 'WASO',
            a: 'https://www.sephora.com/product/P501165',
            p: 'SHIKULIME Mega',
            p1: 'Hydrating Moisturizer'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2572865-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320',
            head: 'MILK MAKEUP',
            a: 'https://www.sephora.com/product/P483674',
            p: 'Mini Pore Eclipse',
            p1: 'Mattifying + Blurring...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2572485-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320',
            head: 'HAUS LABS BY LAD...',
            a: 'https://www.sephora.com/product/P500301',
            p: 'Power Sculpt Velvet',
            p1: 'Bronzer with ...'
        }
    ]
  return (
    <div>
        <div className='item-title' style={{display:'flex'}}>
            <h1>Just Dropped</h1>
            <a href="https://www.sephora.com/beauty/new-releases?icid2=homepage_productlist_justdropped_us_rwd_060222">Show more</a>
        </div>
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel-div"
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
            items: 6,
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
        slidesToSlide={6}
        swipeable
        >     
           {data.map((items) => (
               <span>
                <a href={items.a}>
               <div className='item-div popup'>
                   <div className='item-img-div'>
                       <img src={items.url} alt="" />
                   </div>
                   <div className='item-txt'>
                       <h1>{items.head}</h1>
                       <p>{items.p}</p>
                       <h2>{items.p1}</h2>
                   </div>
               </div>
               </a>
               </span>
           ))}
        </Carousel>
        <div className='item-title item-marg' style={{display:'flex'}}>
            <h1>Chosen For You</h1>
        </div>
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel-div"
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
            items: 6,
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
        slidesToSlide={6}
        swipeable
        >
            
           {data.map((items) => (
               <span>
               <a href={items.a}>
              <div className='item-div popup'>
                  <div className='item-img-div'>
                      <img src={items.url} alt="" />
                  </div>
                  <div className='item-txt'>
                      <h1>{items.head}</h1>
                      <p>{items.p}</p>
                      <h2>{items.p1}</h2>
                  </div>
              </div>
              </a>
              </span>
           ))}
        </Carousel>
    </div>
  )
}
