import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';

import './research.scss';

const Research = () => (
    <div>
        <NavBar selected="research" />
        <div id="content">
            <div
                className="content-section"
                id="research-section"
            >
                <div className="content-section-title">Research</div>
                <div className="content-section-description">
                    ScratchJr emerged from research into how young children learn to code and
                    how programming supports their overall development. Since its launch, the
                    DevTech Research Group has{' '}
                    <a href="https://sites.bc.edu/devtech/research/scratchjr-around-the-world-2/">
                        studied ScratchJr&rsquo;s global impact
                    </a>, using findings to design evidence-based curricula and assessments.
                </div>

                <div className="content-description-answer">
                    {/*
                        Drop the five images into static/images/research/ using the filenames
                        below (recommended size ~360x360 to match the home page stat images),
                        or swap the src/alt values for your own assets.
                    */}
                    <div id="stats-section">
                        <img
                            className="stat-image"
                            src="/images/research/sites.png"
                            alt="Number of research sites"
                        />
                        <img
                            className="stat-image"
                            src="/images/research/students.png"
                            alt="Number of students involved"
                        />
                        <img
                            className="stat-image"
                            src="/images/research/teachers.png"
                            alt="Number of teachers trained"
                        />
                        <img
                            className="stat-image"
                            src="/images/research/papers.png"
                            alt="Number of research papers published"
                        />
                        {/* <img
                            className="stat-image"
                            src="/images/research/curricula.png"
                            alt="Number of curricula created"
                        /> */}
                    </div>
                </div>

                <div id="content-description">
                    <div className="content-description-section">
                        <div className="content-description-question">
                            Global Research Partnerships
                        </div>
                        <div className="content-description-answer">
                            The DevTech Research Group worked with over 10 international
                            partners to study ScratchJr around the world. Explore the{' '}
                            <a href="https://sites.bc.edu/devtech/research/scratchjr-around-the-world-2/">
                                ScratchJr international studies here
                            </a>.
                        </div>
                    </div>
                    
                    <div className="content-description-section">
                        <div className="content-description-question">
                            Assessments
                        </div>
                        <div className="content-description-answer">
                            The DevTech Research Group has developed many play-based
                            assessments to help evaluate how children learn with ScratchJr,
                            including a project rubric and a series of task-based challenges.
                            Explore the{' '}
                            <a href="https://sites.bc.edu/devtech/assessments/scratchjr-instruments/">
                                ScratchJr assessment instruments
                            </a>.
                        </div>
                    </div>

                    <div className="content-description-section">
                        <div className="content-description-question">
                            Publications
                        </div>
                        <div className="content-description-answer">
                            The DevTech Research Group has shared ScratchJr research through
                            conferences, journals, and other publications. See{' '}
                            <a href="https://sites.bc.edu/devtech/research/">
                                publications here
                            </a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

render(<Research />, document.getElementById('app'));
