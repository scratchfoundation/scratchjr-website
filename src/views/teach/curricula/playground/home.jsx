import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import {Link} from 'react-router-dom';
import Section from '../../../../components/sectionitem/section.jsx';
import LinkedSectionItem from '../../../../components/sectionitem/linkedsectionitem.jsx';


const PlaygroundHome = ({match}) => (
    <Section
        id="playground-curriculum-section"
        title="Playground Curriculum"
    >
        <div className="content-section-description">
            This curriculum provides an introduction to ScratchJr by re-creating
            familiar children&apos;s games using the ScratchJr characters and programming
            blocks. <Link to={`${match.url}/full`}>View all lessons as one page (printable)</Link>
        </div>
        <div className="content-section-items-container">
            <LinkedSectionItem
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/full#lesson1`}
                thumbnail="/images/playground/lesson1.png"
                title="Lesson 1: Explore the Playground"
            >
                Use the movement blocks to make the cat travel to all four corners of the ScratchJr stage,
                and use the reset button to return the cat to its starting position ...
            </LinkedSectionItem>
            <LinkedSectionItem
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/full#lesson2`}
                thumbnail="/images/playground/lesson2.png"
                title="Lesson 2: Playground Acrobatics"
            >
                Learn how to use the &#39;Start on Green Flag&#39; block, and see what you can do with two
                scripts that run simultaneously...
            </LinkedSectionItem>
            <LinkedSectionItem
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/full#lesson3`}
                thumbnail="/images/playground/lesson3.png"
                title="Lesson 3: Sharks and Minnows"
            >
                Learn how to use the &#39;Start on Tap&#39; block...
            </LinkedSectionItem>
            <LinkedSectionItem
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/full#lesson4`}
                thumbnail="/images/playground/lesson4.png"
                title="Lesson 4: Dance the Hokey Pokey"
            >
                Record your own voice, and use the Sound, Speed, and Wait blocks...   
            </LinkedSectionItem>
            <LinkedSectionItem
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/full#lesson5`}
                thumbnail="/images/playground/lesson5.png"
                title="Lesson 5: Play a Game of Tag"
            >
                Learn how to use the &#39;Start on Bump&#39; block...
            </LinkedSectionItem>
            <LinkedSectionItem
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/full#lesson6`}
                thumbnail="/images/playground/lesson6.png"
                title="Lesson 6: Monkey in the Middle"
            >
                Use Message blocks to communicate between characters...
            </LinkedSectionItem>
            <LinkedSectionItem
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/full#lesson7`}
                thumbnail="/images/playground/lesson7.png"
                title="Lesson 7: Mini Golf"
            >
                Learn how to make several scenes for one project...
            </LinkedSectionItem>
            <LinkedSectionItem
                description=""
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/full#lesson8`}
                thumbnail="/images/playground/lesson8.png"
                title="Lesson 8: Free Choice"
            >
                Learn how to use Paint Editor to make your own characters and backgrounds...    
            </LinkedSectionItem>
        </div>
    </Section>
);
PlaygroundHome.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default PlaygroundHome;
