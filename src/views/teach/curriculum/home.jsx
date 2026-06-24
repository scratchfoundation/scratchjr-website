import React from 'react';
import TxDiv from '../../../components/transifex/txdiv.jsx';

const CurriculumHome = () => (
    <TxDiv
        className="content-section"
        id="curricula-section"
        txContent="translate_urls"
    >
        <div className="content-section-title">
            Curriculum
        </div>
        <div className="content-section-description">
            The DevTech Research Group has developed many free{' '}
            <a
                href="https://sites.bc.edu/devtech/curricula"
                rel="noopener noreferrer"
                target="_blank"
            >
                curricula
            </a>{' '}
            to support educators using ScratchJr. These include{' '}
            <a
                href="https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Reinforcing-Math-and-Literacy-Curriculum.pdf"
                rel="noopener noreferrer"
                target="_blank"
            >
                Reinforcing Math and Literacy
            </a>,{' '}
            <a
                href="https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Animated-Genres.pdf"
                rel="noopener noreferrer"
                target="_blank"
            >
                Animated Genres
            </a>,{' '}
            <a
                href="https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Art-Curriculum-Self-Portraits.pdf"
                rel="noopener noreferrer"
                target="_blank"
            >
                Self Portraits in ScratchJr
            </a>,{' '}
            <a
                href="https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Playground-Games.pdf"
                rel="noopener noreferrer"
                target="_blank"
            >
                ScratchJr Playground Games
            </a>,{' '}
            <a
                href="https://sites.bc.edu/devtech/wp-content/uploads/sites/181/2022/10/Scavenger-Hunt.pdf"
                rel="noopener noreferrer"
                target="_blank"
            >
                ScratchJr Scavenger Hunt
            </a>,{' '}
            <a
                href="https://sites.bc.edu/devtech/scratchjr/multiple-tablet-curricula/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Multi-tablet collaborative projects
            </a>,{' '}
            <a
                href="https://sites.bc.edu/devtech/scratchjr/scratchjr-to-scratch-curricula/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Transitioning from ScratchJr to Scratch
            </a>, {' '}
            <a
                href="https://sites.bc.edu/devtech/beit-midrash/limudei-code-esh/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Limudei Code-Esh
            </a>, and the{' '}
            <a
                href="https://sites.bc.edu/codingasanotherlanguage/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Coding as Another Language (CAL) &mdash; ScratchJr Curriculum
            </a>: the official curriculum of ScratchJr.
            <br /><br />
            <a
                href="https://sites.bc.edu/codingasanotherlanguage/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img
                    src="/images/cal-logo.png"
                    alt="Coding as Another Language (CAL)"
                    style={{display: 'block', margin: 'auto', maxWidth: '800px', width: '100%'}}
                />
            </a>
            <br />
            CAL is designed to teach literacy and programming alongside one another through
            storytelling, songs, games, and more. CAL covers four grade levels, from
            Pre-Kindergarten to 2nd grade, each made up of 24 lessons of about 45 minutes.
            CAL has been translated into 8 languages and has been implemented in over 25
            countries.
        </div>
    </TxDiv>
);
export default CurriculumHome;
