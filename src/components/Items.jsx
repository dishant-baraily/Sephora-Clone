import React from 'react'
import '../styles/Items.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Items = () => {
    const data = [
        {
            url: 'https://www.sephora.com/productimages/sku/s2588762-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320',
            head: 'Farmacy',
            p: '1% Vitamin A Retional',
            p1: 'Serum'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2538858-main-zoom.jpg?imwidth=320',
            head: 'amika',
            p: 'Bust Your Brass',
            p1: 'Blonde Purple'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2577484-main-zoom.jpg?imwidth=320',
            head: 'Lancôme',
            p: 'Le 8 Hypnôse Serum-',
            p1: 'Infused Volumizing...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2585628-main-zoom.jpg?imwidth=320',
            head: 'tarte',
            p: 'tartelette tubing',
            p1: 'mascara'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2538874-main-zoom.jpg?imwidth=320',
            head: 'amika',
            p: 'The Kure Bond Repair',
            p1: 'Conditioner for ...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2569366-main-zoom.jpg?imwidth=320',
            head: 'Charlotte Tilbury',
            p: 'Beautiful Skin Sun-',
            p1: 'Kissed Glow Cream ...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2594448-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=320',
            head: 'Glow Recipie',
            p: 'Mini Plum Plump',
            p1: 'Hyaluronic Acid ...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2592012-main-zoom.jpg?imwidth=320',
            head: 'Natasha Denona',
            p: 'Mini Bronze',
            p1: 'Eyeshadow Palette'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2407328-main-zoom.jpg?imwidth=320',
            head: 'Charlotte Tilbury',
            p: 'Airbrush Flawless',
            p1: 'Finish Setting Powder'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2567451-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320',
            head: 'WASO',
            p: 'SHIKULIME Mega',
            p1: 'Hydrating Moisturizer'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2572865-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320',
            head: 'MILK MAKEUP',
            p: 'Mini Pore Eclipse',
            p1: 'Mattifying + Blurring...'
        },
        {
            url: 'https://www.sephora.com/productimages/sku/s2572485-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=320',
            head: 'HAUS LABS BY LAD...',
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
               <div className='item-div popup '>
                   <div className='item-img-div'>
                       <img src={items.url} alt="" />
                   </div>
                   <div className='item-txt'>
                       <h1>{items.head}</h1>
                       <p>{items.p}</p>
                       <h2>{items.p1}</h2>
                   </div>
               </div>
           ))}
        </Carousel>
    </div>
  )
}
