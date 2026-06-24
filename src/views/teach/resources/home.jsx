import React from 'react';
import StaticLinkSectionItem from '../../../components/sectionitem/staticlinksectionitem.jsx';

const HomeSection = () => (
    <div>
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
                activities, see the ScratchJr Connect section on our{' '}
                <a href="/teach/activities">Activities page</a> or visit&nbsp;
                <a href="https://sites.bc.edu/devtech/">DevTech Research Group</a>.
                <br />
            </div>
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
                <StaticLinkSectionItem
                    title="ScratchJr Coding Cards"
                    format="full"
                    thumbnail="/images/scratchjr-coding-cards.png"
                    linkURL="https://www.amazon.com/ScratchJr-Coding-Cards-Creative-Activities/dp/1593278993/"
                    linkText="Purchase"
                >
                    A deck of 75 activity cards covering fun and exciting projects designed to
                    guide and inspire young children as they engage with ScratchJr.
                    The ScratchJr Coding Cards encourage kids to think creatively and
                    systematically while developing computational thinking skills.
                    As they work through the deck, kids will learn powerful ideas about computer science
                    by using ScratchJr programming blocks to make characters move, jump, dance, sing,
                    and more.
                     

                </StaticLinkSectionItem>
                <StaticLinkSectionItem
                    title="The Official ScratchJr Book"
                    format="full"
                    thumbnail="/images/scratchjr-book.png"
                    linkURL="https://www.amazon.com/Official-ScratchJr-Book-Help-Learn/dp/1593276710/"
                    linkText="Purchase"
                >
                    The perfect companion to the app, making coding easy and fun for all.
                    Each chapter includes several activities to help kids develop computational thinking, 
                    problem-solving, and design skills.
                    In each activity, you’ll find: step-by-step, easy-to-follow directions,
                    ways to connect the activity with literacy and math concepts,
                    tips for grown-ups,
                    and creative challenges to take the learning further.

                </StaticLinkSectionItem>
            </div>
        </div>

    </div>
);
export default HomeSection;
