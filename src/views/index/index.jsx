var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('../../components/navbar.jsx');

var Index = React.createClass({
	type: 'Index',
	componentDidMount: function() {
		$(function () {
	    $("#slider1").responsiveSlides({
	      auto: true,
	      pager: true,
	      nav: false,
	      speed: 600,
	      maxwidth: 900,
	      namespace: "centered-btns",
	      navContainer: "#rslides_container"
	    });
		});
  },
  renderTwitterFeed: function(d,s,id) {
    {var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}};
  },
  render: function() {
    return (
      <div>
        <NavBar />
        <div id="rslides_container" className="slideshow">
          <ul className="rslides" id="slider1">
            <li><img src="images/slide1.png" className="slide-current" alt="ScratchJr Slide 1" /></li>
            <li><img src="images/slide2.png" className="slide-hidden" alt="ScratchJr Slide 2" /></li>
            <li><img src="images/slide3.png" className="slide-hidden" alt="ScratchJr Slide 3" /></li>
            <li><img src="images/slide4.png" className="slide-hidden" alt="ScratchJr Slide 4" /></li>
            <li><img src="images/slide5.png" className="slide-hidden" alt="ScratchJr Slide 5" /></li>
          </ul>
        </div>{/* end slideshow */}

        <div id="content">
          <div id="announcement-banner">
            ScratchJr is available as a free app for <a href="https://itunes.apple.com/us/app/scratchjr/id895485086?ls=1&mt=8">iPads</a> and <a href="https://play.google.com/store/apps/details?id=org.scratchjr.android">Android</a> tablets.
          </div>

          <div id="content-text">
            <div id="content-header-first">
              ScratchJr
            </div> {/* end content-header-first */}
            <div id="content-header-second">
              Coding for young children
            </div> {/* end content-header-second */}
            <div id="content-body">
              Coding is the new literacy! With ScratchJr, young children (ages 5-7) can program their own interactive stories and games. In the process, they learn to solve problems, design projects, and express themselves creatively on the computer.
                <div id="store-badges">
                  <a href="https://itunes.apple.com/us/app/scratchjr/id895485086?ls=1&mt=8">
                    <img alt="Download on the App Store"src="images/Apple_appstore.svg" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=org.scratchjr.android">
                    <img alt="Get it on Google Play" src="images/GooglePlay.svg" width="135px" height="40px"/>
                  </a>
              </div> {/* end store-badges */}
            </div> {/* end content-body */}
          </div> {/* end content-text */}
          <div id="content-graphic">
            <img id="content-graphic-item" src="images/homegraphic.png" />
          </div> {/* end content-graphic */}
          <div className="content-news">
            <div className="content-news-header">
              News
            </div>
            <div className="content-news-body">
              ScratchJr is available on <a href="http://www.amazon.com/Scratch-Foundation-ScratchJr/dp/B01AKGTD2E" target="_blank">Amazon</a>. Now, kids can create interactive stories and games on Kindle!
            </div>
            <div className="content-news-body">
              Newly released by <a href="https://www.nostarch.com/scratchjr" target="_blank">No Starch Press</a>, <a href="about.html#faq">The Official ScratchJr Book</a>The Official ScratchJr Book is now available in paperback or ebook format!
            </div>
          </div>

          <div id="discussion-container">
            <div id="discussion-text">
              <div id="discussion-header">
                Join the Discussion
              </div>
              <div id="discussion-body">
                We introduced ourselves. Now it's your turn. Drop us a line with feedback, report bugs &amp; glitches, or just say "hi!" <br></br>

                <a href=" https://twitter.com/intent/tweet?screen_name=ScratchJr">
                  <div className="blue-button">
                    Tweet @ScratchJr
                  </div>
                </a>
              </div>
            </div>
            <div id="disscussion-tweets">
              <a className="twitter-timeline" width="425" height="250" href="https://twitter.com/ScratchJr" data-widget-id="618881920324079616" data-chrome="noheader nofooter">Tweets by @ScratchJr</a>
              {this.renderTwitterFeed(document,"script","twitter-wjs")};
            </div>
          </div>
        </div> {/* end content */}


        <div id="footer">
          <span id="footer-text">
            <strong>ScratchJr</strong> is a collaboration between the DevTech Research Group at Tufts University, the Lifelong Kindergarten Group at the MIT Media Lab, and the Playful Invention Company.
          </span>
          <div id="footer-social">
            <div id="social-links">
              <a className="social-link sjr-icon-twitter" href="https://twitter.com/ScratchJr" title="Follow us on Twitter" target="_blank"><span>Twitter</span></a>
              <a className="social-link sjr-icon-facebook" href="https://www.facebook.com/scratchjr" title="Like us on Facebook" target="_blank"><span>Facebook</span></a>
            </div>
            <div id="footer-nav">
              <a href="https://docs.google.com/forms/d/1wBrCl5Dy4-5AAzcmkQigKplKpv37M0O8YQPKo0FjUpo/viewform?usp=send_form">
                <div className="blue-button">
                  Join Mailing List
                </div>
              </a>
              &nbsp;
              <a href="mailto:info@scratchjr.org">
                <div className="blue-button">
                  Contact Us
                </div>
              </a>
            </div> {/* end footer-nav */}
          </div> {/* end footer-social */}
        </div> {/* end footer */}
      </div>
    );
  }
});

ReactDOM.render(<Index />, document.getElementById('app'));