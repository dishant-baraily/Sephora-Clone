import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/SliderImg.css';
import { Sliderdata } from '../SliderData'

export const SliderImg = () => {
    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <div>
        <Slider {...settings}>
            {Sliderdata.map((item) => (
                <>
                    <span>
                        <a href={item.p2a}>
                            <div className='img-div'>
                                <div className='img-css'>
                                    <img src={item.url} alt="" />
                                </div>
                                <div className='txt-div'>
                                    <h3>{item.head}</h3>
                                    <p>{item.p1}</p>
                                    <h2>{item.p2}</h2>
                                </div>
                            </div>
                        </a>
                    </span>
                </>
            ))}
        </Slider>
    </div>
  )
}
