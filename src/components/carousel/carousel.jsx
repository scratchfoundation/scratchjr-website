import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './carousel.scss'

/**
 * Displays index page slideshow.
 */
 var Carousel = React.createClass({
     type: 'Carousel',
     propTypes: {
         items: React.PropTypes.array
     },
     render: function () {
         /* TODO: allow override of default settings */
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
                         <div key={index} ><img src={item} /></div>
                     )
                 })}
             </Slider>
         );
     }
 });

module.exports = Carousel;
