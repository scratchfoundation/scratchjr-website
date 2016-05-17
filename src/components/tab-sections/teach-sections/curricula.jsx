import React from 'react';

var classNames = require('classnames');

var GenericSectionItem = require('../../../components/tab-sections/generic-section/generic-section-item.jsx');
var GenericSection = require('../../../components/tab-sections/generic-section/generic-section.jsx').generic;

var CurriculaSection = React.createClass({
  render: function() {
    return (
      <div>
        <div 
          className={classNames(
            "content-section", 
            {"content-section-selected": (this.props.sectionIndex == this.props.activeSectionIndex) && !this.props.activeSubsection }
          )}
          id="curricula-section">
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
            <GenericSectionItem
              title="Printable Block Images"
              thumbSrc="images/rightandleft.png"
              description="You can print high quality images of the ScratchJr blocks for classroom instruction... "
              href="pdfs/blocks.pdf"
              linkText="Download PDF"
            />
            <GenericSectionItem
              title="Animated Genres Curriculum"
              thumbSrc="images/slide1.png"
              description="This curriculum provides students with the opportunity to learn all of the concepts in ScratchJr and apply these concepts in their own personal creations. At the heart of the curriculum are three types of interactive projects that can be made with ScratchJr... "
              id="animated-genres"
              linkText="Read more"
              clickSubsection={this.props.clickSubsection}
            />
            <GenericSectionItem
              title="Playground Games Curriculum"
              thumbSrc="images/playground/playground.png"
              description="In the eight lessons of this curriculum, children learn how to use ScratchJr as they re-create familiar playground games. ... "
              id="playground-curriculum"
              linkText="Read more"
              clickSubsection={this.props.clickSubsection}
            />
            <GenericSectionItem
              title="Reinforcing the Common Core Curriculum"
              thumbSrc="images/commoncore/project1.png"
              description="These curricular modules describe ScratchJr projects that reinforce the Common Core Standards. They could serve as games programmed by older ScratchJr students to be played by younger ScratchJr students... "
              id="common-core-curriculum"
              linkText="Read more"
              clickSubsection={this.props.clickSubsection}
            />
          </div>
        </div>

        {/* Beginning of Curricula Pages */}
        <GenericSection
          id="animated-genres-section"
          activeSubsection={this.props.activeSubsection}
          title="Animated Genres Curriculum">
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
        </GenericSection>
        
        <GenericSection
          id="playground-curriculum-section"
          activeSubsection={this.props.activeSubsection}
          title="Playground Curriculum"
          description={["This curriculum provides an introduction to ScratchJr by re-creating familiar children's games using the ScratchJr characters and programming blocks. ", <a href="curricula/playground/playground-games-full.pdf">[Download all lessons as one file]</a>]}>
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
        </GenericSection>
        
        <GenericSection
          id="common-core-curriculum-section"
          activeSubsection={this.props.activeSubsection}
          title="Reinforcing the Common Core Curriculum"
          description="These curricular modules describe ScratchJr projects that reinforce the Common Core Standards.">
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
        </GenericSection>
        {/* End of Curricula Pages */}
      </div>
    );
  }
});

module.exports = CurriculaSection;