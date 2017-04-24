import React from 'react';
import {Section} from '../../../components/sectionitem/section.jsx';

export default class SolveitSection extends React.Component {
    render () {
        return (
            <Section
                id="solveit-section"
                title="ScratchJr Solve-Its"
                translateUrls
            >
                <div className="content-section-description">
                    Assess students&apos; understanding of the relationship between the programming
                    blocks and their associated behaviors.
                </div>
                <div className="content-section-video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/l9d9L9hc2o4?list=PLsXbKpJZTa6P2bt7GpZTAZuvZT1cmFKa5"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
                <div className="content-section-description">
                    Have your students watch the videos in the
                    playlist and record their answers on
                    an answer sheet.
                </div>
                <div className="content-section-description">
                    What you need:
                    <ul>
                        <li>
                            <a
                                href="https://www.youtube.com/embed/l9d9L9hc2o4?list=PLsXbKpJZTa6P2bt7GpZTAZuvZT1cmFKa5"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                YouTube Video Playlist (above)
                            </a>
                        </li>
                        <li>
                            <a
                                href="/assessments/solve-it-answer-sheet.pdf"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Student answer sheet
                            </a>
                        </li>
                        <li>
                            <a
                                href="/assessments/block-labels.png"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Block sheet
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="content-section-info">
                    The videos aim to assess students using 4 different methods:
                    <p>
                        <strong>Fix the Program:</strong> Students see a line of
                        code and see a character act out that program. Then, they
                        will see the character do a different action, and they must
                        correct the original code to reflect the new action.
                    </p>
                    <p>
                        <strong>Circle the Blocks:</strong> Students are shown a
                        list of ScratchJr programming blocks, then watch a character
                        perform a program full-screen without seeing the code for the
                        program. Students then circle the blocks from the list on their
                        answer sheet that they believe make up the program.
                    </p>
                    <p>
                        <strong>Match the Program:</strong> Students are given
                        several different lines of code on their answer sheet,
                        then watch a character perform a program full-screen without
                        seeing the code for the program. They then choose the code on
                        their answer sheet that they believe matches the program they saw.
                    </p>
                    <p>
                        <strong>Reverse Engineering:</strong> Students watch a
                        character perform a program in full-screen without seeing
                        the code for the program. While watching, they should think
                        in their head which ScratchJr blocks would make the character
                        move the way it did. Then, students cut out blocks from
                        their{' '}
                        <a
                            href="/assessments/block-labels.png"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            block sheet
                        </a> and arrange them in the order that best matches
                            what they saw.
                    </p>
                </div>
            </Section>
        );
    }
}
