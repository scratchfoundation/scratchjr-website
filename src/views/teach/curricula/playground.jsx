import React from 'react';
import {Section, StaticLinkSectionItem} from '../../../components/sectionitem/sectionitem.jsx';
import activities from './playground.json';

export default class AnimatedGenres extends React.Component {
    render () {
        return (
            <Section
                id='playground-curriculum-section'
                title='Playground Curriculum'
                description={["This curriculum provides an introduction to ScratchJr by re-creating familiar children's games using the ScratchJr characters and programming blocks. ", <a href="curricula/playground/playground-games-full.pdf">[Download all lessons as one file]</a>]}>
                <div className="content-section-items-container">
                    {activities.map((activity, index) => {
                        return (
                            <StaticLinkSectionItem
                                key={index}
                                format='half'
                                linkText='Read more'
                                { ...activity}
                                 />
                        );
                    })}
                </div>
            </Section>
        )
    }
}
