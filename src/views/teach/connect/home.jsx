import React from 'react';
import TxDiv from '../../../components/transifex/txdiv.jsx';

import './connect.scss';

const ConnectHome = () => (
    <TxDiv
        className="content-section teach-assessment"
        id="assessments-section"
        txContent="translate_urls"
    >
        <div className="content-section-title">
            ScratchJr Connect
        </div>
        <div className="content-section-description">
            ScratchJr Connect is a free, curated database for sharing ScratchJr
            resources, lessons, and projects. Anyone may register for free and submit
            a resource or project to be approved and added into our public database.
        </div>

        <div>
            <img
                className="center"
                src="/images/scratchjrconnect.png"
            />
        </div>

        <div className="connect-block">
            <a
                href="https://scratchjrconnect.tufts.edu/"
                id="connect-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="blue-button">
                    Go to ScratchJr Connect
                </div>
            </a>
        </div>
    </TxDiv>
);
export default ConnectHome;
