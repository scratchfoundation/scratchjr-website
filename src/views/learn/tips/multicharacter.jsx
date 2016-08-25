import React from 'react';
import {Section} from '../../../components/sectionitem/sectionitem.jsx'

export default class MultiCharacterSection extends React.Component {
    render () {
        return (
            <Section
                id='multi-character-section'
                title='Multiple Characters'
                description='See how to add characters to your project.'>
                <div className='content-section-video'>
                  <iframe
                      width='640'
                      height='480'
                      src='https://www.youtube.com/embed/4qLVKpImrws?rel=0'
                      frameborder='0'
                      allowfullscreen></iframe>
                </div>
            </Section>
        );
    }
}
