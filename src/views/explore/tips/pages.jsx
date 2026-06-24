import React from 'react';
import Section from '../../../components/sectionitem/section.jsx';

const PagesSection = () => (
    <Section
        id="pages-section"
        title="Multiple pages"
        translateUrls
        description=""
    >
        <div className="content-section-item-description">
            You can have up to four pages in a project. When you have more
            than one page connected by Go To Page blocks, you can get your
            scripts to run automatically by starting all the scripts with a
            Green Flag. Then, when the Go To Page block turns to a page,
            any scripts on that page with a Green Flag will run.
            <img
                alt="multiple pages"
                className="content-section-image"
                src="/images/tips/multi-page.png"
            /><br />
            When you tap the Green Flag, the action will start on whichever
            page is currently selected, so make sure you choose Page 1 of
            your project before tapping the Green Flag to get it to run from
            the beginning.
        </div>
        <div className="content-section-item-description">
            You can change the order of the pages by dragging them to a new
            position in the page list on the right.
            <img
                alt="reorder pages"
                className="content-section-image"
                src="/images/tips/reorder.png"
            /><br />
            When you rearrange the pages, ScratchJr will also renumber the End
            blocks for those pages, even if you&apos;ve already placed them in scripts,
            so that the pages still turn to the same page that you asked them to
            in the first place. If you want the script to go in the new order of
            the pages on the right, just replace the Go To Page blocks in the scripts.
        </div>
    </Section>
);
export default PagesSection;
