import React from 'react';
import StaticLinkSectionItem from '../../../components/sectionitem/staticlinksectionitem.jsx';

const HomeSection = () => (
    <div
        className="content-section"
        id="curricula-section"
    >
        <div className="content-section-title">
            Resources
        </div>
        <div className="content-section-description">
            These resources are here to support teachers by offering guidance and
            supplemental materials to be used in and out of the classroom. We hope
            that by using these materials, teachers are better able to bring
            ScratchJr to life! For further ideas and inspiration for teaching
            activities, see our ScratchJr Connect page or visit&nbsp; 
             <a href="https://sites.tufts.edu/devtech/">DevTech Research Group</a>.
            <br />
        </div>
        <StaticLinkSectionItem
            title="Introduction"
            format="full"
            thumbnail="/images/activitycards/intro.png"
            description="Watch this video for a brief introduction to ScratchJr's interface..."
            linkText="See more"
            linkURL="https://www.youtube.com/watch?v=ciWPaEgscr0&feature=youtu.be"
        />
        <div className="content-section-items-container">
            <StaticLinkSectionItem
                title="Printable Block Images"
                format="full"
                thumbnail="/images/rightandleft.png"
                linkURL="/pdfs/blocks.pdf"
                linkText="Download PDF"
                translateUrls
            >
                You can print high quality images of the ScratchJr blocks for classroom instruction...
            </StaticLinkSectionItem>
            <StaticLinkSectionItem
                title="Printable Blocks for Stickers"
                format="full"
                thumbnail="/images/assessments/reverse-engineer.png"
                linkURL="/assessments/block-labels.png"
                linkText="Download PNG"
                translateUrls
            >
                You can print these specially sized images of the ScratchJr blocks onto sticker paper
                and use ScratchJr stickers for classroom activities...
            </StaticLinkSectionItem>
        </div>
    </div>
);
export default HomeSection;
