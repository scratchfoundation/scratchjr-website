import React from 'react';
import {Section} from '../../../components/sectionitem/sectionitem.jsx'

export default class AnimationSection extends React.Component {
    render () {
        return (
            <Section
                id='character-animation-section'
                title='Character Animation using the ScratchJr Blocks'
                description='See how to make a simple script by connecting blocks together.'>
                <div className='content-section-video'>
                  <iframe
                      width='640'
                      height='480'
                      src='https://www.youtube.com/embed/JoHpVzltafU?rel=0'
                      frameborder='0'
                      allowfullscreen></iframe>
                </div>
            </Section>
        );
    }
}
