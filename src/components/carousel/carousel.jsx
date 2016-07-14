var React = require('react');
var Slider = require('react-slick');

require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
require('./carousel.scss');

/**
 * Displays index page slideshow.
 */
var Carousel = React.createClass({
    type: 'Carousel',
    render: function () {
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
        var images= [
          {id:'s1', url:'images/slide1.png'},
          {id:'s2', url:'images/slide2.png'},
          {id:'s3', url:'images/slide3.png'},
          {id:'s4', url:'images/slide4.png'},
          {id:'s5', url:'images/slide5.png'},
          ];
        return (
          <Slider {... settings}>
              {images.map((item, i) => { return (<div key={item.id} ><img src={item.url} /></div>) })}
          </Slider>
        );
    }
});

module.exports = Carousel;
