import React from 'react';
import {SectionItem} from '../../../components/sectionitem/sectionitem.jsx';
import {LinkedSectionItem} from '../../../components/sectionitem/linkedsectionitem.jsx';

export default class TipsHome extends React.Component {
    render () {
        return (
            <div
                className="content-section learn-tips"
                id="tips-section"
            >
                <div className="content-section-title">
                    Tips &amp; Hints
                </div>
                <div className="content-section-description">
                    Tips and hints that you might find useful as you explore ScratchJr.
                    For answers to more general questions about ScratchJr, see
                    the <a href="/about/faq">Frequently Asked Questions</a>.
                </div>
                <div className="content-section-items-container">
                    <LinkedSectionItem
                        title="Making, Renaming, and Deleting Projects"
                        format="full"
                        thumbnail="/images/tips/managing-projects.jpg"
                        linkURL="/learn/tips/manage-projects"
                        linkText="Watch video"
                    >
                        Learn how to make a new project, rename an existing project, and delete a project.
                    </LinkedSectionItem>
                    <LinkedSectionItem
                        title="Character Animation using the ScratchJr Blocks"
                        format="full"
                        thumbnail="/images/tips/character-animation.jpg"
                        description="Make a simple script by connecting blocks together."
                        linkURL="/learn/tips/character-animation"
                        linkText="Watch video"
                    />
                    <LinkedSectionItem
                        title="Multiple Characters"
                        format="full"
                        thumbnail="/images/tips/multi-character.jpg"
                        description="Learn how to add characters to your project."
                        linkURL="/learn/tips/multi-character"
                        linkText="Watch video"
                    />
                    <LinkedSectionItem
                        title="Trigger Blocks"
                        format="full"
                        thumbnail="/images/tips/triggers.jpg"
                        description="Use trigger blocks to specify when a script should run."
                        linkURL="/learn/tips/trigger-blocks"
                        linkText="Watch video"
                    />
                    <LinkedSectionItem
                        title="Sharing ScratchJr Projects"
                        format="full"
                        thumbnail="/images/tips/share.png"
                        description="You can share projects by email. On iPads you can also share project by AirDrop."
                        linkURL="/learn/tips/share-projects"
                        linkText="Read more"
                        translateUrls
                    />
                    <LinkedSectionItem
                        title="Sample Projects"
                        format="full"
                        thumbnail="/images/tips/sample-projects.png"
                        linkURL="/learn/tips/sample-projects"
                        linkText="Read more"
                        translateUrls
                    >
                        The Sample Projects library is a collection of
                        eight pre-made projects that use a range of blocks and
                        features to show you the variety of projects you can make
                        with ScratchJr.
                    </LinkedSectionItem>
                    <SectionItem
                        title="Character List Scrolling"
                        format="full"
                        thumbnail="/images/tips/character-list.png"
                    >
                        If there&apos;s a scroll bar in the Character List
                        on the left of the Stage it means you that you have more
                        characters in your project than fit in the list on the screen.
                        You can scroll through this list of characters by swiping
                        up or down on the list, but not on the scroll bar. The order
                        of the characters doesn&apos;t matter for any of the action in the project
                    </SectionItem>
                    <SectionItem
                        title="Copying Characters"
                        format="full"
                        thumbnail="/images/tips/copy-character.png"
                    >
                        To copy a character and its scripts, you can
                        drag the character from the list of characters on the left
                        over to the list of pages on the right. This will work for
                        copying characters to the same page and to other pages.
                        The scripts and sounds will copy along with the character,
                        but then the scripts are separate, so when you change the
                        scripts or sounds of one of the copies, it won&apos;t affect the
                        other existing copies of the character.
                    </SectionItem>
                    <LinkedSectionItem
                        title="Copying Scripts"
                        format="full"
                        thumbnail="/images/tips/copy-script.png"
                        description=""
                        linkURL="/learn/tips/copy-scripts"
                        linkText="Read more"
                    >
                        You can copy a script (set of blocks) from one character to another in the same project.
                    </LinkedSectionItem>
                    <LinkedSectionItem
                        title="Multi-page projects"
                        format="full"
                        thumbnail="/images/tips/multi-page.png"
                        description="Projects can have up to four pages with their own characters and scripts."
                        linkURL="/learn/tips/pages"
                        linkText="Read more"
                    />
                    <SectionItem
                        title="Moving Backwards"
                        format="full"
                        thumbnail="/images/tips/backwards-thumb.png"
                    >
                        You can make a character move backwards by giving
                        your motion blocks negative numbers. If you want to make your
                        character face the opposite direction without moving forward or
                        backward, add a motion block with a zero and tap on it.
                    </SectionItem>
                </div>
            </div>
        );
    }
}
