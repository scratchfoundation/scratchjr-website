import React from 'react';
import {Section, StaticLinkSectionItem} from '../../components/sectionitem/sectionitem.jsx';

export default class AssessmentsSection extends React.Component {
    render () {
        return(
            <Section
                id="assessments-section"
                title="Assessments">
                <div className="content-section-description">
                    These assessments provide different ways to help determine the depth of
                    students' understanding of the relationship between the programming
                    blocks and their associated behaviors.
                </div>
                <StaticLinkSectionItem
                    title="ScratchJr Solve-Its"
                    format="full"
                    thumbnail="/images/assessments/circle-the-blocks.png"
                    linkURL="//youtu.be/l9d9L9hc2o4?list=PLsXbKpJZTa6P2bt7GpZTAZuvZT1cmFKa5"
                    linkText="See more">
                    This <a href="//youtu.be/l9d9L9hc2o4?list=PLsXbKpJZTa6P2bt7GpZTAZuvZT1cmFKa5"
                    target="_blank">YouTube playlist</a> includes videos of full-screen ScratchJr programs,
                    and accompanying directions for how to assess students in the classroom
                    on their understanding of programming concepts. Students can record
                    their answer on this <a href="/assessments/solve-it-answer-sheet.pdf"
                    target="_blank">answer sheet</a>...
                </StaticLinkSectionItem>
                <div className="content-section-info">
                    The videos aim to assess students using 4 different methods:
                    <ul>
                        <li><strong>Fix the Program:</strong> Students see a line of
                        code and see a character act out that program. Then, they
                        will see the character do a different action, and they must
                        correct the original code to reflect the new action.</li>
                        <li><strong>Circle the Blocks:</strong> Students are shown a
                        list of ScratchJr programming blocks, then watch a character
                        perform a program full-screen without seeing the code for the
                        program. Students then circle the blocks from the list on their
                        answer sheet that they believe make up the program.</li>
                        <li><strong>Match the Program:</strong> Students are given
                        several different lines of code on their answer sheet,
                        then watch a character perform a program full-screen without
                        seeing the code for the program. They then choose the code on
                        their answer sheet that they believe matches the program they saw.</li>
                        <li><strong>Reverse Engineering:</strong> Students watch a
                        character perform a program in full-screen without seeing
                        the code for the program. While watching, they should think
                        in their head which ScratchJr blocks would make the character
                        move the way it did. Then, students cut out blocks from
                        their <a href="/assessments/block-labels.png" target="_blank">
                        block sheet</a> and arrange them in the order that best matches
                        what they saw.</li>
                    </ul>
                </div>
                <StaticLinkSectionItem
                    title="Reverse-Engineering Assessment"
                    format="full"
                    thumbnail="/images/assessments/reverse-engineer.png"
                    linkURL="/assessments/reverse-engineer-and-labels.pdf"
                    linkText="Read more">
                    In this more in-depth assessment, students can build on the
                    Reverse Engineering Solve-It activities they did with the
                    YouTube videos. This assessment can be off-screen, if you are
                    able to project videos on a projector. Students view a full-screen
                    ScratchJr project without seeing the code for the characters'
                    programs. They then reconstruct the scripts of the project
                    using pre-printed blocks, provided at the end of the document...
                </StaticLinkSectionItem>
            </Section>
        );
    }
}
