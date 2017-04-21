import React from 'react';
import {StaticLinkSectionItem} from '../../components/sectionitem/staticlinksectionitem.jsx';
import activities from './activities.json';

export default class ActivitiesSection extends React.Component {
    render () {
        return (
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
                <div className="content-section-items-container">
                    {activities.map((activity, index) => (
                        <StaticLinkSectionItem
                            key={index}
                            format="half"
                            {...activity}
                            linkText="Read more"
                        />
                        ))}

                </div>
            </div>

        );
    }
}
