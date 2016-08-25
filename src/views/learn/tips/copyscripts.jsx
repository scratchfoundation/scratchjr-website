import React from 'react';
import {Section} from '../../../components/sectionitem/sectionitem.jsx'

export default class CopyScriptSection extends React.Component {
    render() {
        return (
            <Section id='copy-scripts-section' title='Copying Scripts' description=''>
                <div className='content-section-item-description'>
                    You can copy a script from one character to another by dragging the
                    script from the programming area to the character in the list on the left.
                    <img src='/images/tips/copy-script.png' className='content-section-image' alt='copy a script'/>
                </div>
                <div className='content-section-item-description'>
                    But you can also duplicate a script in a single programming area if you
                    drag the script to the same character the script belongs to in the character list.
                    <img src='/images/tips/duplicate.png' className='content-section-image' alt='duplicate a script'/><br/>
                    The copy will appear on top of the original script, but slightly offset.
                    Just drag it over to one side to see both copies.<br/>
                    The only thing that can't be copied from one character to another is a
                    recorded sound. If a script has a recorded sound, the sound will be replaced
                    by the Pop sound in the copied script. You can copy sounds for the same
                    character though, so the recorded sound will duplicate itself in the duplicated script
                </div>
            </Section>
        );
    }
}
