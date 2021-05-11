import React from 'react';
import LinkedSectionItem from '../../../components/sectionitem/linkedsectionitem.jsx';
import TxDiv from '../../../components/transifex/txdiv.jsx';

const ActivitiesHome = () => (
    <TxDiv
        className="content-section"
        id="activities-section"
        txContent="translate_urls"
    >
        <div className="content-section-title">
            Activities
        </div>
        <div className="content-section-description">
            Each of these activities gives you a quick way to learn how
            to do new things with ScratchJr. They are listed here in
            order of simplest to hardest, but feel free to play around
            in any order you&apos;d like! For more information and a brief
            introduction to ScratchJr see the <a href="/teach/resources">Resources page</a>.
        </div>
        <div className="content-section-items-container">
            <LinkedSectionItem
                title="1. Drive Across the City"
                format="half"
                thumbnail="/images/activitycards/card01-car.png"
                description="Pick a background and a character, and use a motion block to make a car drive across the city..." // eslint-disable-line max-len
                linkText="Read more"
                linkURL="/activities/drive-across-the-city"
            />
            <LinkedSectionItem
                title="2. Run a Race"
                format="half"
                thumbnail="/images/activitycards/card03-race.png"
                description="Use the speed block to speed up or slow down a character..."
                linkText="Read more"
                linkURL="/activities/run-a-race"
            />
            <LinkedSectionItem
                title="3. Sunset"
                format="half"
                thumbnail="/images/activitycards/card06-sun.png"
                description="Learn how to make a character disappear..."
                linkText="Read more"
                linkURL="/activities/sunset"
            />
            <LinkedSectionItem
                title="4. Moonrise after Sunset"
                format="half"
                thumbnail="/images/activitycards/card07-moon.png"
                description="Learn how to add a new page to change scene..."
                linkText="Read more"
                linkURL="/activities/moonrise-after-sunset"
            />
            <LinkedSectionItem
                title="5. Spooky Forest"
                format="half"
                thumbnail="/images/activitycards/card05-forest.png"
                description="Make multiple characters with their own scripts..."
                linkText="Read more"
                linkURL="/activities/spooky-forest"
            />
            <LinkedSectionItem
                title="6. Dribble a Basketball"
                format="half"
                thumbnail="/images/activitycards/card04-dribble.png"
                description="Learn how to use the repeat block to dribble a basketball..."
                linkText="Read more"
                linkURL="/activities/dribble-a-basketball"
            />
            <LinkedSectionItem
                title="7. Dance Party"
                format="half"
                thumbnail="/images/activitycards/card02-dance.png"
                description="Use sound and motion blocks and a start again block to make characters dance..."
                linkText="Read more"
                linkURL="/activities/dance-party"
            />
            <LinkedSectionItem
                title="8. Meet and Greet"
                format="half"
                thumbnail="/images/activitycards/card08-greet.png"
                description="Use the envelope to send a message from one character to another..."
                linkText="Read more"
                linkURL="/activities/meet-and-greet"
            />
            <LinkedSectionItem
                title="9. Conversation"
                format="half"
                thumbnail="/images/activitycards/card09-talk.png"
                description="Send multiple messages among characters using different colored envelopes..."
                linkText="Read more"
                linkURL="/activities/conversation"
            />
        </div>
    </TxDiv>
);
export default ActivitiesHome;
