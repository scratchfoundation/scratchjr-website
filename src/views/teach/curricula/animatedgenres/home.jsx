import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import {Link} from 'react-router-dom';
import Section from '../../../../components/sectionitem/section.jsx';

const AnimatedGenresHome = ({match}) => (
    <Section
        id="animated-genres-section"
        title="Animated Genres Curriculum"
        description=""
        translateUrls
    >
        <div className="content-section-item-title">
            <Link to={`${match.url}/full`}>View all lessons as one page (printable)</Link>
        </div>
        <div className="content-section-item-title">
            <Link to={`${match.url}/full#intro`}>Introduction and Summary</Link>
        </div>
        <div className="content-section-item-title">
          Module 1 - Making a ScratchJr Collage
        </div>
        <div className="content-section-item-description">
            In this module, students learn how to navigate around the ScratchJr
            iPad app, and they learn simple programming commands that will animate
            their characters. At the end of the module, students will create a
            ScratchJr collage project.
            <br />
            <Link to={`${match.url}/full#lesson1`}>
                Lesson 1 - Instructions, Sequencing, and an Introduction to the ScratchJr iPad App
            </Link>
            <br />
            <Link to={`${match.url}/full#lesson2`}>
                Lesson 2 - Same Block Sequencing and Motion
            </Link>
            <br />
            <Link to={`${match.url}/full#lesson3`}>
                Lesson 3 - Start on Green Flag Block, End Block, and Choosing Characters
            </Link>
            <br />
            <Link to={`${match.url}/full#lesson4`}>
                Lesson 4 - Backgrounds and Review of Programming Multiple Characters
            </Link>
            <br />
            <Link to={`${match.url}/full#project1`}>
                Collage Project
            </Link>
            <br />
        </div>
        <div className="content-section-item-title">
          Module 2 - Making a ScratchJr Story
        </div>
        <div className="content-section-item-description">
            In this module, students learn how to define more specific behavior
            for their characters, and they use tools such as speech bubbles and
            pages to help them weave a narrative. At the end of the module,
            students will create a ScratchJr story project.
            <br />
            <Link to={`${match.url}/full#lesson5`}>
                Lesson 5 - Speed
            </Link>
            <br />
            <Link to={`${match.url}/full#lesson6`}>
                Lesson 6 - Numbers and Repeating Sequences
            </Link>
            <br />
            <Link to={`${match.url}/full#lesson7`}>
                Lesson 7 - Speech Bubbles, Sounds, Pages and Wait
            </Link>
            <br />
            <Link to={`${match.url}/full#project2`}>
                Story Project
            </Link>
            <br />
        </div>
        <div className="content-section-item-title">
          Module 3 - Making a ScratchJr Game
        </div>
        <div className="content-section-item-description">
            In this module, students learn more advanced concepts in ScratchJr.
            Most importantly, they discover how to program characters that
            interact with each other and with the iPad user. At the end of
            the module, students will create a ScratchJr game project.
            <br />
            <Link to={`${match.url}/full#lesson8`}>
                Lesson 8 - Start on
                Bump, Start on Tap, Send and Receive Messages, Stop
            </Link>
            <br />
            <Link to={`${match.url}/full#project3`}>
                Game Project
            </Link>
            <br />
        </div>
    </Section>
);
AnimatedGenresHome.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default AnimatedGenresHome;
