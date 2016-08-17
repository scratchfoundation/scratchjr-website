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
              {this.props.items.map((item) => { return (<div key={item.id} ><img src={item.url} /></div>) })}
          </Slider>
        );
    }
});

module.exports = Carousel;
