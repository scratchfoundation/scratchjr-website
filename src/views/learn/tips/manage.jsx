import React from 'react';
import {Section} from '../../../components/sectionitem/sectionitem.jsx'

export default class ManageSection extends React.Component {
    render () {
        return (
            <Section
                id='manage-projects-section'
                title='Making, Renaming, and Deleting Projects'
                description='Watch the video to learn how to make a new project, rename an existing project, anddelete a project.'>
                <div className='content-section-video'>
                  <iframe
                      width='640'
                      height='480'
                      src='https://www.youtube.com/embed/RXXDUxqBzBI?rel=0'
                      frameborder='0'
                      allowfullscreen></iframe>
                </div>
            </Section>
        );
    }
}
