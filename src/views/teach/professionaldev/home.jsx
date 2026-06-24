import React from 'react';
import StaticLinkSectionItem from '../../../components/sectionitem/staticlinksectionitem.jsx';

const ProfessionalDevHome = () => (
    <div
        className="content-section"
        id="profdev-section"
    >
        <div className="content-section-title">
            Professional Development
        </div>
        <div className="content-section-description">
            Professional development opportunities help educators bring ScratchJr and the
            Coding as Another Language (CAL) curriculum into their classrooms with confidence.
        </div>
        <div className="content-section-items-container">
            {/* Thumbnails are placeholders — add images at static/images/profdev/. */}
            <StaticLinkSectionItem
                title="TeachCAL"
                format="full"
                thumbnail="/images/profdev/teachcal.png"
                linkURL="https://sites.bc.edu/codingasanotherlanguage/teachcal/"
                linkText="Learn more"
            >
                TeachCAL offers online professional development for educators teaching the
                Coding as Another Language curriculum. This free, self-paced, asynchronous
                course is designed to help educators learn how to teach coding and computational
                thinking with ScratchJr in conversation with natural language and literacy skills.
            </StaticLinkSectionItem>
            <StaticLinkSectionItem
                title="DevTech In-Person PD Opportunities"
                format="full"
                thumbnail="/images/profdev/devtech.png"
                linkURL="https://sites.bc.edu/devtech/professional-development/"
                linkText="Learn more"
            >
                The DevTech Research Group also offers in-person professional development workshops
                and trainings.
            </StaticLinkSectionItem>
        </div>
    </div>
);
export default ProfessionalDevHome;
