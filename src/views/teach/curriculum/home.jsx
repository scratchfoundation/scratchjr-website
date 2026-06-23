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
            The DevTech Research Group has developed many  {' '}
                            <a href="https://sites.bc.edu/devtech/curricula" rel="noopener noreferrer" target="_blank">
                                curricula 
    
                            </a> {' '}to support
            educators using ScratchJr including the  {' '}
                            <a href="https://sites.bc.edu/codingasanotherlanguage/" rel="noopener noreferrer" target="_blank">
                                Coding as Another Language
            (CAL) - ScratchJr Curriculum
    
                            </a>: the official curriculum of ScratchJr. 
            <br /><a
            href="https://sites.bc.edu/codingasanotherlanguage/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <img
                src="/images/cal-logo.png"
                alt="Coding as Another Language (CAL)"
                style={{display: 'block', margin: 'auto', maxWidth: '800px', width: '100%'}}
            />
        </a><br />
            CAL is designed to teach literacy and programming alongside one another through
            storytelling, songs, games, and more. CAL covers 4 grade-levels: Pre-Kindergarten to 2nd grade, 
            each made up of 24, 45 minute
            lessons. 
        </div>
        
    </TxDiv>
);
export default CurriculumHome;
