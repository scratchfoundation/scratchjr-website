import React from 'react';
import {Section} from '../../../components/sectionitem/sectionitem.jsx';

export default class SamplesSection extends React.Component {
    render () {
        return (
            <Section
                id="sample-projects-section"
                title="Sample Projects Library"
                description="The Sample Projects Library is a collection of
                    eight pre-made ScratchJr projects that use a range of blocks
                    and features to show you the variety of projects you can make
                    with ScratchJr. You can run these projects to see how they
                    work, and you can change the blocks around to see what effect
                    it has on the action.">
                <div className="content-section-item-description">
                    Access the Sample Projects library from the Home screen by tapping on the question mark.
                    <img
                        src="/images/tips/home.png"
                        className="content-section-image"
                        alt="Home page"/>
                </div>
                <div className="content-section-item-description">
                    To run the Sample Projects choose a project and then tap on
                    the Green Flag in each one. You can have a look at the scripts
                    of the various characters, and even try changing the scripts
                    to see what effect it has. The things you can't do in a Sample
                    Project are: add characters or pages, change the background,
                    add a title, or save any changes that you make.<br/>
                    <img
                        src="/images/tips/sample-projects.png"
                        className="content-section-image"
                        alt="Sample Projects Library"/><br/>
                    After you have explored the sample projects, tap on the home
                    button to create your own project using the full ScratchJr interface.
                </div>
            </Section>
        );
    }
}
