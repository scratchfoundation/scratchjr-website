import React from 'react';
import {Section, StaticLinkSectionItem} from '../../components/sectionitem/sectionitem.jsx';

export default class AssessmentsSection extends React.Component {
    render () {
        return(
            <Section
                id="assessments-section"
                title="Assessments">
                <div className="content-section-description">
                    These assessments provide two different ways to help determine
                    the depth of students' understanding of the relationship between
                    the programming blocks and their associated behaviors.
                    Both assessments use the same basic ScratchJr examples
                </div>
                <StaticLinkSectionItem
                    title="Circle-the-Blocks Assessment"
                    format="full"
                    thumbnail="/images/assessments/circle-the-blocks.png"
                    linkURL="/assessments/circle-the-blocks.pdf"
                    linkText="Read more">
                    In this basic assessment, students identify which programming
                    blocks were used in a given ScratchJr project, but the students
                    do not sequence the blocks...
                </StaticLinkSectionItem>
                <StaticLinkSectionItem
                    title="Reverse-Engineering Assessment"
                    format="full"
                    thumbnail="/images/assessments/reverse-engineer.png"
                    linkURL="/assessments/reverse-engineer-and-labels.pdf"
                    linkText="Read more">
                    In this more in-depth assessment, students view a ScratchJr project
                    and then reconstruct the scripts of the project using pre-printed blocks...
                </StaticLinkSectionItem>
            </Section>
        );
    }
}
