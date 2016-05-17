import React from 'react';

var classNames = require('classnames');

var PressSection = React.createClass({
  render: function() {
    return (
      <div 
        className={classNames(
          "content-section", 
          {"content-section-selected": this.props.sectionIndex == this.props.activeSectionIndex}
        )}
        id="press-section">
        <div className="content-section-title">
          Press
        </div>
        <div className="content-section-description">
          Read what people are saying about ScratchJr.
        </div>
        <div className="content-description-answer"><a href="http://www.forbes.com/sites/jordanshapiro/2015/06/30/your-kids-can-learn-to-code-during-summer-vacation/">How Your Kids Can Learn To Code During Summer Vacation</a> - Forbes. June 30, 2015</div>
        <div className="content-description-answer"><a href="http://yourniskayuna.com/blog/2015/04/23/birchwood-elementary-students-first//">First graders give grown-ups programming lesson</a> - Your Niskayuna. April 23, 2015</div>
        <div className="content-description-answer"><a href="http://cacm.acm.org/news/183337-bringing-coding-to-kindergarten/fulltext/">Bringing Coding to Kindergarten</a> - ACM News. February 17, 2015</div>
        <div className="content-description-answer"><a href="http://bestappsforkids.com/2014/scratchjr/">ScratchJr Review</a> - bestappsforkids.com December 16, 2014</div>
        <div className="content-description-answer"><a href="http://www.cbsnews.com/news/scratch-jr-app-teaches-kindergarteners-the-basics-of-computer-coding/">Coding for kindergarteners: App teaches kids computer basics</a> - CBS News. October 1, 2014</div>
        <div className="content-description-answer"><a href="http://makelearn.org/2014/09/16/scratchjr-peel21st-blog-hop/">Introduction to ScratchJr</a> - makelearn.org September 16, 2014</div>
        <div className="content-description-answer"><a href="http://www.necn.com/news/tech/Making-the-Grade-Coding-for-Kids-272817181.html">Making the Grade: Coding for Kids </a> - New England Cable News. August 26, 2014</div>
        <div className="content-description-answer"><a href="http://www.forbes.com/sites/jordanshapiro/2014/08/06/your-five-year-old-can-learn-to-code-with-an-ipad-app/">Your Five Year Old Can Learn To Code With An iPad App</a> - Forbes. August 6, 2014</div>
        <div className="content-description-answer">
        <a href="http://bostonherald.com/business/technology/2014/07/app_that_teaches_kids_to_code_is_the_future">App That Teaches Kids To Code is the Future</a> - Boston Herald. August 1, 2014</div>
        <div className="content-description-answer"><a href="http://www.ipadeducators.com/#!review-scratchjr/c1bpu">ScratchJr Review</a> - iPadEducators.com August 2014</div>
        <div className="content-description-answer"><a href="http://www.wired.com/2014/07/finally-a-way-to-teach-coding-to-the-touchscreen-generation/">Finally, a Way to Teach Coding to the Touchscreen Generation</a> - WIRED. July 31, 2014</div>
      </div>
    );
  }
});

module.exports = PressSection;