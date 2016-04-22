var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('../../components/navbar/navbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

require('../../../static/js/lib/content-nav.js');

require('./teach.scss');

var Teach = React.createClass({
	type: 'Teach',
	render: function() {
		return (
      <div>
        <NavBar selected="teach"/>
  			<div id="content">
          {/* Start of Nav */}
          <div id="content-nav">
            <a href="#activities">
              <div className="content-nav-item content-nav-item-selected content-nav-item-left" id="activities-nav">
                <div className="content-nav-item-icon activities-icon"> </div>
                <div className="content-nav-item-description">
                  Activities
                </div>
              </div>
            </a>
            <a href="#curricula">
              <div className="content-nav-item content-nav-item-middle" id="curricula-nav">
                <div className="content-nav-item-icon curricula-icon"> </div>
                <div className="content-nav-item-description">
                  Curricula
                </div>
              </div>
            </a>
            <a href="#assessments">
              <div className="content-nav-item content-nav-item-right" id="assessments-nav">
                <div className="content-nav-item-icon assessment-icon"> </div>
                <div className="content-nav-item-description">
                  Assessments
                </div>
              </div>
            </a>
          </div>
          {/* End of Nav */}

          {/* Start of Activities Home Page */}
          <div className="content-section content-section-selected" id="activities-section">
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
          {/* End of Activities Home Page */}

          {/* Start of Curricula Home Page */}
          <div className="content-section" id="curricula-section">
            <div className="content-section-title">
              Curricula
            </div>
            <div className="content-section-description">
              These curricula introduce powerful ideas from computer science that are not usually highlighted in early childhood education. We use the term "powerful idea" to mean a concept that children can learn and that will serve their critical thinking and problem
              solving abilities beyond the lifetime of a specific classroom technology. While these curricula were designed as tools for teaching ScratchJr, the ultimate goal is to equip students with skills that can be applied outside of the app. Abilities
              like programming, expressing through technology, and user-centered design are just a few of the powerful ideas covered in our lessons.
              <br/>
            </div>
            <div className="content-section-items-container">

              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Printable Block Images
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/rightandleft.png" />
                </div>
                <div className="content-section-item-description">
                  You can print high quality images of the ScratchJr blocks for classroom instruction... <a className="read-more" href="pdfs/blocks.pdf">Download PDF</a>
                  {/* <a className="read-more" id="animated-genres" href="#animated-genres">Read more</a> */}
                </div>
                {/* <div className="content-section-item-age">
                  Ages 5-7 &nbsp; | &nbsp;  1 year
                </div> */}
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Animated Genres Curriculum
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/slide1.png" />
                </div>
                <div className="content-section-item-description">
                  This curriculum provides students with the opportunity to learn all of the concepts in ScratchJr and apply these concepts in their own personal creations. At the heart of the curriculum are three types of interactive projects that can be made with ScratchJr...
                  <a className="read-more" id="animated-genres" href="#animated-genres">Read more</a>
                </div>
                {/* <div className="content-section-item-age">
                  Ages 5-7 &nbsp; | &nbsp;  1 year
                </div> */}
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Playground Games Curriculum
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/playground.png" />
                </div>
                <div className="content-section-item-description">
                  In the eight lessons of this curriculum, children learn how to use ScratchJr as they re-create familiar playground games. ... <a className="read-more" id="playground-curriculum" href="#playground-curriculum">Read more</a>
                </div>
                {/* <div className="content-section-item-age">
                  Ages 5-7 &nbsp; | &nbsp;  1 year
                </div> */}
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Reinforcing the Common Core Curriculum
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/commoncore/project1.png" />
                </div>
                <div className="content-section-item-description">
                  These curricular modules describe ScratchJr projects that reinforce the Common Core Standards. They could serve as games programmed by older ScratchJr students to be played by younger ScratchJr students... <a className="read-more" id="common-core-curriculum"
                  href="#common-core-curriculum">Read more</a>
                </div>
                {/* <div className="content-section-item-age">
                  Ages 5-7 &nbsp; | &nbsp;  1 year
                </div> */}
              </div>
            </div>
          </div>
          {/* End of Curricula Home Page */}

          {/* Start of Assessments Home Page */}
          <div className="content-section" id="assessments-section">
            <div className="content-section-title">
              Assessments
            </div>
            <div className="content-section-description">
              These assessments provide two different ways to help determine the depth of students' understanding of the relationship between the programming blocks and their associated behaviors. Both assessments use the same basic ScratchJr examples.
            </div>
            <div className="content-section-items-container">
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Circle-the-Blocks Assessment
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/assessments/circle-the-blocks.png" />
                </div>
                <div className="content-section-item-description">
                  In this basic assessment, students identify which programming blocks were used in a given ScratchJr project, but the students do not sequence the blocks... <a className="read-more" href="assessments/circle-the-blocks.pdf">Read more</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Reverse-Engineering Assessment
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/assessments/reverse-engineer.png" />
                </div>
                <div className="content-section-item-description">
                  In this more in-depth assessment, students view a ScratchJr project and then reconstruct the scripts of the project using pre-printed blocks... <a className="read-more" href="assessments/reverse-engineer-and-labels.pdf">Read more</a>
                </div>
              </div>
            </div>
          </div>
          {/* End of Assessments Home Page */}

          {/* Beginning of Activities Pages */}
          <div className="content-section" id="scratchjr-cards">
            <div className="content-section-title">
              ScratchJr Cards
            </div>
            {/* put scratch card html here */}
          </div>
          {/* End of Activities Pages */}

          {/* Beginning of Curricula Pages */}
          {/* Beginning of Common Core Curriculum */}
          <div className="content-section content-subpage" id="common-core-curriculum-section">
            <div className="content-section-title">
              Reinforcing the Common Core Curriculum
            </div>

            <div className="content-section-description">
              These curricular modules describe ScratchJr projects that reinforce the Common Core Standards.
            </div>
            <div className="content-section-items-container">
              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Uppercase and Lowercase Letters - Part 1
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/commoncore/project1.png" />
                </div>
                <div className="content-section-item-description">
                  This project reinforces a student's knowledge of writing and recognizing uppercase and lowercase letters... <a className="read-more" href="curricula/commoncore/cc-module-1.pdf">Read more</a>
                </div>
              </div>

              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Uppercase and Lowercase Letters - Part 2
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/commoncore/project2.png" />
                </div>
                <div className="content-section-item-description">
                  This project builds on Part 1 by adding the concept of messaging to connect an uppercase letter with its lowercase counterpart... <a className="read-more" href="curricula/commoncore/cc-module-2.pdf">Read more</a>
                </div>
              </div>
              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Counting and Cardinality
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/commoncore/project3.png" />
                </div>
                <div className="content-section-item-description">
                  This project reinforces a student's knowledge of counting and cardinality... <a className="read-more" href="curricula/commoncore/cc-module-3.pdf">Read more</a>
                </div>
              </div>
            </div>
          </div>
          {/* end of common core curriculum  */}
          {/* Beginning of Playground Curriculum */}
          <div className="content-section content-subpage" id="playground-curriculum-section">
            <div className="content-section-title">
              Playground Curriculum
            </div>

            <div className="content-section-description">
              This curriculum provides an introduction to ScratchJr by re-creating familiar children's games using the ScratchJr characters and programming blocks. <a href="curricula/playground/playground-games-full.pdf">[Download all lessons as one file]</a>
            </div>
            <div className="content-section-items-container">
              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Lesson 1: Explore the Playground
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/lesson1.png" />
                </div>
                <div className="content-section-item-description">
                  Use the movement blocks to make the cat travel to all four corners of the ScratchJr stage, and use the reset button to return the cat to its starting position ... <a className="read-more" href="curricula/playground/playground-1.pdf">Read more</a>
                </div>
              </div>

              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Lesson 2: Playground Acrobatics
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/lesson2.png" />
                </div>
                <div className="content-section-item-description">
                  Learn how to use the "Start on Green Flag" block, and see what you can do with two scripts that run simultaneously... <a className="read-more" href="curricula/playground/playground-2.pdf">Read more</a>
                </div>
              </div>

              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Lesson 3: Sharks and Minnows
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/lesson3.png" />
                </div>
                <div className="content-section-item-description">
                  Learn how to use the "Start on Tap" block... <a className="read-more" href="curricula/playground/playground-3.pdf">Read more</a>
                </div>
              </div>


              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Lesson 4: Dance the Hokey Pokey
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/lesson4.png" />
                </div>
                <div className="content-section-item-description">
                  Record your own voice, and use the Sound, Speed, and Wait blocks... <a className="read-more" href="curricula/playground/playground-4.pdf">Read more</a>
                </div>
              </div>

              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Lesson 5: Play a Game of Tag
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/lesson5.png" />
                </div>
                <div className="content-section-item-description">
                  Learn how to use the "Start on Touch" block... <a className="read-more" href="curricula/playground/playground-5.pdf">Read more</a>
                </div>
              </div>

              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Lesson 6: Monkey in the Middle
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/lesson6.png" />
                </div>
                <div className="content-section-item-description">
                  Use Message blocks to communicate between characters... <a className="read-more" href="curricula/playground/playground-6.pdf">Read more</a>
                </div>
              </div>

              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Lesson 7: Mini Golf
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/lesson7.png" />
                </div>
                <div className="content-section-item-description">
                  Learn how to make several scenes for one project... <a className="read-more" href="curricula/playground/playground-7.pdf">Read more</a>
                </div>
              </div>

              <div className="content-section-half-item">
                <div className="content-section-item-title">
                  Lesson 8: Free Choice
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/playground/lesson8.png" />
                </div>
                <div className="content-section-item-description">
                  Learn how to use Paint Editor to make your own characters and backgrounds... <a className="read-more" href="curricula/playground/playground-8.pdf">Read more</a>
                </div>
              </div>
            </div>
          </div>
          {/* end of common core curriculum  */}
          {/* beginning of animated genres curriculum */}
          <div className="content-section content-subpage" id="animated-genres-section">
            <div className="content-section-title">
              Animated Genres Curriculum
            </div>
            <div className="content-section-item-title">
              <a href="curricula/animatedgenres/full.pdf">Download all lessons as one file</a>
            </div>
            <div className="content-section-item-title">
              <a href="curricula/animatedgenres/intro.pdf">Introduction and Summary</a>
            </div>
            <div className="content-section-item-title">
              Module 1 - Making a ScratchJr Collage
            </div>
            <div className="content-section-item-description">
              In this module, students learn how to navigate around the ScratchJr iPad app, and they learn simple programming commands that will animate their characters. At the end of the module, students will create a ScratchJr collage project.
              <br/>
              <a href="curricula/animatedgenres/1.pdf">Lesson 1 - Instructions, Sequencing, and an Introduction to the ScratchJr iPad App</a>
              <br/>
              <a href="curricula/animatedgenres/2.pdf">Lesson 2 - Same Block Sequencing and Motion</a>
              <br/>
              <a href="curricula/animatedgenres/3.pdf">Lesson 3 - Start on Green Flag Block, End Block, and Choosing Characters</a>
              <br/>
              <a href="curricula/animatedgenres/4.pdf">Lesson 4 - Backgrounds and Review of Programming Multiple Characters</a>
              <br/>
              <a href="curricula/animatedgenres/collage.pdf">Collage Project</a>
              <br/>
            </div>
            <div className="content-section-item-title">
              Module 2 - Making a ScratchJr Story
            </div>
            <div className="content-section-item-description">
              In this module, students learn how to define more specific behavior for their characters, and they use tools such as speech bubbles and pages to help them weave a narrative. At the end of the module, students will create a ScratchJr story project.
              <br/>
              <a href="curricula/animatedgenres/5.pdf">Lesson 5 - Speed</a>
              <br/>
              <a href="curricula/animatedgenres/6.pdf">Lesson 6 - Numbers and Repeating Sentences</a>
              <br/>
              <a href="curricula/animatedgenres/7.pdf">Lesson 7 - Speech Bubbles, Sounds, Pages and Wait</a>
              <br/>
              <a href="curricula/animatedgenres/story.pdf">Story Project</a>
              <br/>
            </div>
            <div className="content-section-item-title">
              Module 3 - Making a ScratchJr Game
            </div>
            <div className="content-section-item-description">
              In this module, students learn more advanced concepts in ScratchJr. Most importantly, they discover how to program characters that interact with each other and with the iPad user. At the end of the module, students will create a ScratchJr game project.
              <br/>
              <a href="curricula/animatedgenres/8.pdf">Lesson 8 - Start on Bump, Start on Tap, Send and Receive Messages, Stop</a>
              <br/>
              <a href="curricula/animatedgenres/game.pdf">Game Project</a>
              <br/>
            </div>
          </div>
          {/* end of animated genres curriculum */}
          {/* End of Curricula Pages */}

          {/* Beginning of Assessments Pages */}
          {/* End of Assessments Pages */}


        </div>
        <Footer />
      </div>
		);
	}
});

ReactDOM.render(<Teach />, document.getElementById('app'));