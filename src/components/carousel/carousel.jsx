import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss';

/**
 * Displays index page slideshow.
 * @param {array} items - array of images to Displays
 * @returns {React.Component} Slider Component
 */
const Carousel = ({items}) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        speed: 500,
        cssEase: 'linear'
    };
    return (
        <Slider {...settings}>
            {
                items.map((item, index) => (
                    <div key={index}><img src={item} /></div>
                ))
            }
        </Slider>
    );
};
 
Carousel.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.string
    )
};
export default Carousel;
