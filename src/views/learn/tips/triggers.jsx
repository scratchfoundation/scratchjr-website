import React from 'react';
import {Section} from '../../../components/sectionitem/sectionitem.jsx';

export default class TriggersSection extends React.Component {
    render () {
        return (
            <Section
                id="trigger-blocks-section"
                title="Trigger Blocks"
                description="See how to use trigger blocks to specify when a script should run.">
                <div className="content-section-video">
                  <iframe
                      width="640"
                      height="480"
                      src="https://www.youtube.com/embed/123AdwR_JxI?rel=0"
                      frameBorder="0"
                      allowFullScreen></iframe>
                </div>
            </Section>
        );
    }
}
