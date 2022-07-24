import React from 'react'
import '../styles/SliderImg.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Sliderdata } from '../SliderData'

export const SliderImg = () => {
  return (
    <div>
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="carousel-div-big"
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
            items: 2.5,
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
        slidesToSlide={3}
        swipeable
        >
            {Sliderdata.map((item) => (
                <span>
                <a href={item.p2a}>
                    <div style={{backgroundColor:`${item.bg}`}} className='img-div'>
                        <div className='img-css'>
                            <img src={item.url} alt="" />
                        </div>
                        <div style={{color:`${item.color}`}} className='txt-div'>
                            <h3>{item.head}</h3>
                            <p>{item.p1}</p>
                            <h2>{item.p2}</h2>
                        </div>
                    </div>
                </a>
                </span>
            ))}
        </Carousel>
        
    </div>
  )
}
