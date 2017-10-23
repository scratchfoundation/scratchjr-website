import React from 'react';
import StaticLinkSectionItem from '../../components/sectionitem/staticlinksectionitem.jsx';
import TxDiv from '../../components/transifex/txdiv.jsx';

import activities from './activities.json';

const ActivitiesSection = () => (
    <div
        className="content-section"
        id="activities-section"
    >
        <div className="content-section-title">
            Activities
        </div>
        <div className="content-section-description">
            Each of these activities gives you a quick way to learn how
            to do new things with ScratchJr. They are listed here in
            order of simplest to hardest, but feel free to play around
            in any order you&apos;d like!
        </div>
        <TxDiv
            className="content-section-items-container"
            txContent="translate_urls"
        >
            <StaticLinkSectionItem
                title="Introduction"
                format="full"
                thumbnail="/images/activitycards/intro.png"
                description="Watch this video for a brief introduction to ScratchJr's interface..."
                linkText="See more"
                linkURL="https://www.youtube.com/watch?v=ciWPaEgscr0&feature=youtu.be"
            />
        </TxDiv>
        <TxDiv
            className="content-section-items-container"
            txContent="translate_urls"
        >
            {activities.map((activity, index) => (
                <StaticLinkSectionItem
                    key={index}
                    format="half"
                    {...activity}
                    linkText="Read more"
                />
            ))}

        </TxDiv>
    </div>
);
export default ActivitiesSection;
