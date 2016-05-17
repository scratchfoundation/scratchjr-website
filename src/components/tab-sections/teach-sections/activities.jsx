import React from 'react';

var classNames = require('classnames');

var ActivitiesSection = React.createClass({
	render: function() {
		return (
			<div 
				className={classNames(
					"content-section", 
					{"content-section-selected": this.props.sectionIndex == this.props.activeSectionIndex}
				)}
				id="activities-section">
				<div className="content-section-title">
					Activities
				</div>
				<div className="content-section-description">
					Each of these activities gives you a quick way to learn how to do new things with
					ScratchJr. They are listed here in order of simplest to hardest, but feel free to play around in any order you'd like!
				</div>
				<div className="content-section-items-container">
					<div className="content-section-full-item">
					<div className="content-section-item-title">
						Introduction
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/intro.png" />
					</div>
					<div className="content-section-item-description">
						Watch this video for a brief introduction to ScratchJr's interface... <a className="read-more" href="https://www.youtube.com/watch?v=ciWPaEgscr0&feature=youtu.be" target="_blank"> See more</a>
						{/* <a className="read-more" href="https://www.youtube.com/watch?v=17OoBBdZQtI" target="_blank"> Read more</a>  */}
						{/* <a  className="read-more" id="scratchjr-cards" href="#" >Read more</a> */}
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						1 Drive Across the City
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card01-car.png" />
					</div>
					<div className="content-section-item-description">
						Pick a background and a character, and use a motion block to make a car drive across the city... <a className="read-more" href="activities/card01-car.pdf"> Read more</a>
						{/* <a  className="read-more" id="scratchjr-cards" href="#" >Read more</a> */}
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						2 Run a Race
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card03-race.png" />
					</div>
					<div className="content-section-item-description">
						Use the speed block to speed up or slow down a character... <a className="read-more" href="activities/card03-race.pdf">Read more</a>
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						3 Sunset
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card06-sun.png" />
					</div>
					<div className="content-section-item-description">
						Learn how to make a character disappear... <a className="read-more" href="activities/card06-sun.pdf">Read more</a>
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						4 Moonrise after Sunset
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card07-moon.png" />
					</div>
					<div className="content-section-item-description">
						Learn how to add a new page to change scene... <a className="read-more" href="activities/card07-moon.pdf">Read more</a>
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						5 Spooky Forest
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card05-forest.png" />
					</div>
					<div className="content-section-item-description">
						Make multiple characters with their own scripts... <a className="read-more" href="activities/card05-forest.pdf">Read more</a>
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						6 Dribble a Basketball
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card04-dribble.png" />
					</div>
					<div className="content-section-item-description">
						Learn how to use the repeat block to dribble a basketball... <a className="read-more" href="activities/card04-dribble.pdf">Read more</a>
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						7 Dance Party
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card02-dance.png" />
					</div>
					<div className="content-section-item-description">
						Use sound and motion blocks and a start again block to make characters dance... <a className="read-more" href="activities/card02-dance.pdf">Read more</a>
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						8 Meet and Greet
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card08-greet.png" />
					</div>
					<div className="content-section-item-description">
						Use the envelope to send a message from one character to another... <a className="read-more" href="activities/card08-greet.pdf">Read more</a>
					</div>
					</div>
					<div className="content-section-half-item">
					<div className="content-section-item-title">
						9 Conversation
					</div>
					<div className="content-section-item-thumbnail">
						<img className="content-section-item-thumbnail-image" src="images/activitycards/card09-talk.png" />
					</div>
					<div className="content-section-item-description">
						Send multiple messages among characters using different colored envelopes... <a className="read-more" href="activities/card09-talk.pdf">Read more</a>
					</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ActivitiesSection;