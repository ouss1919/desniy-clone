import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'
import sliderImg1 from '../images/slider-badging.jpg'
import sliderImg2 from '../images/slider-badag.jpg'
import sliderImg3 from '../images/slider-scale.jpg'
import sliderImg4 from '../images/slider-scales.jpg'
const ImageSlider = () => {
    let settings = {
        dots: true,
        Infinite : true,
        speed: 500,
        slidesToShow: 1,
        SlidesToScroll: 1,
        autoplay: true,
    }
    return (
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src={sliderImg1} alt=""/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src={sliderImg2} alt=""/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src={sliderImg3} alt=""/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src={sliderImg4} alt=""/>
                    </a>
                </Wrap>
            </Carousel>
    )
}
const Wrap = styled.div`
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img{
            width: 100%;
            height: 100%;
        }
        &:hover{
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
    }
`

const Carousel = styled(Slider)`
    margin-top: 20px;
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover{
            opacity: 1;
            transition: opacity .2s ease 0s;
        }
    }
    ul li button {
        &:before{
            font-size: 20px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before {
            color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
` 

export default ImageSlider
