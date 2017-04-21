import React from 'react';
import {Section} from '../../../components/sectionitem/section.jsx';

export default class ManageSection extends React.Component {
    render () {
        return (
            <Section
                id="manage-projects-section"
                title="Making, Renaming, and Deleting Projects"
            >
                <div className="content-section-description">
                    Watch the video to learn how to make a new project, rename
                    an existing project, and delete a project.
                </div>
                <div className="content-section-video">
                    <iframe
                        width="640"
                        height="480"
                        src="https://www.youtube.com/embed/RXXDUxqBzBI?rel=0"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </Section>
        );
    }
}
