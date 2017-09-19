import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Section from '../../../../components/sectionitem/section.jsx';
import LinkedSectionItem from '../../../../components/sectionitem/linkedsectionitem.jsx';

const LitMathHome = ({match}) => (
    <Section
        id="literacy-math-curriculum-section"
        title="Reinforcing Literacy and Math Curriculum"
        description="These curricular modules describe ScratchJr projects
        that reinforce literacy and math standards."
        translateUrls
    >
        <div className="content-section-items-container">
            <LinkedSectionItem
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/letters-pt1`}
                thumbnail="/images/literacymath/project1.png"
                title="Uppercase and Lowercase Letters - Part 1"
            >
                This project reinforces a student&apos;s knowledge of writing and recognizing
                uppercase and lowercase letters...
            </LinkedSectionItem>
            <LinkedSectionItem
                description=""
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/letters-pt2`}
                thumbnail="/images/literacymath/project2.png"
                title="Uppercase and Lowercase Letters - Part 2"
            >
                This project builds on Part 1 by adding the concept of messaging to connect an
                uppercase letter with its lowercase counterpart...
            </LinkedSectionItem>
            <LinkedSectionItem
                description=""
                format="half"
                linkText="Read more"
                linkURL={`${match.url}/numbers`}
                thumbnail="/images/literacymath/project3.png"
                title="Counting and Cardinality"
            >
                This project reinforces a student&apos;s knowledge of counting and cardinality...
            </LinkedSectionItem>
        </div>
    </Section>
);
LitMathHome.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default LitMathHome;
