import React from 'react';
import StaticLinkSectionItem from '../../../components/sectionitem/staticlinksectionitem.jsx';
import LinkedSectionItem from '../../../components/sectionitem/linkedsectionitem.jsx';
import TxDiv from '../../../components/transifex/txdiv.jsx';

const AssessmentsHome = () => (
    <TxDiv
        className="content-section teach-assessment"
        id="assessments-section"
        txContent="translate_urls"
    >
        <div className="content-section-title">
            Assessments
        </div>
        <div className="content-section-description">
            These assessments provide different ways to help determine the depth of
            students&apos; understanding of the relationship between the programming
            blocks and their associated behaviors.
        </div>
        <LinkedSectionItem
            title="ScratchJr Solve-Its"
            format="full"
            thumbnail="/images/assessments/circle-the-blocks.png"
            linkURL="/assessments/solveit"
            linkText="Read more"
        >
            A video playlist of full-screen ScratchJr programs,
            and accompanying directions for how to assess students in the classroom
            on their understanding of programming concepts.
        </LinkedSectionItem>

        <StaticLinkSectionItem
            title="Reverse-Engineering Assessment"
            format="full"
            thumbnail="/images/assessments/reverse-engineer.png"
            linkURL="/assessments/reverse-engineer-and-labels.pdf"
            linkText="Read more"
        >
            In this more in-depth assessment, students can build on the
            Reverse Engineering Solve-It activities they did with the
            YouTube videos. This assessment can be off-screen, if you are
            able to project videos on a projector. Students view a full-screen
            ScratchJr project without seeing the code for the characters&apos;
            programs. They then reconstruct the scripts of the project
            using pre-printed blocks, provided at the end of the document...
        </StaticLinkSectionItem>
    </TxDiv>
);
export default AssessmentsHome;
