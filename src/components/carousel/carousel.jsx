import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './carousel.scss';
/**
 * Displays index page slideshow.
 */
export default class Carousel extends React.Component {
    render () {
        var settings = {
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
            <Slider {... settings}>
                {this.props.items.map((item, index) => {
                    return (
                        <div key={index}><img src={item}/></div>
                    );
                })}
            </Slider>
        );
    }
}
Carousel.propTypes = {
    items: React.PropTypes.array
};
