import React from 'react';

const HostHomeSection = () => (
    <div>
        <div className="content-section">
            <div className="content-section-description">
                <p>{'The '}
                    <a
                        href="http://ase.tufts.edu/devtech/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        DevTech Research Group
                    </a>{ ' at ' }
                    <a
                        href="https://www.tufts.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tufts University
                    </a>,
                co-creator of ScratchJr, is conducting a study about how families
                learn programming together. We would like to invite you to participate in
                the research portion of ScratchJr
                Family Days, though it is not
                mandatory for running a ScratchJr family event.
                Should you wish to participate, please sign up by filling out a {' '}
                    <a
                        href="https://goo.gl/forms/h1LWQWPOZ8azHNAt2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            short questionaire
                    </a>.
                We appreciate your feedback!</p>
            </div>
        </div>
        
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd1I1N3ayxldpnDz2CBWa8KFRuZ5XB1yqz5PPC96dFd9qhTiA/viewform?embedded=true"
            width="900"
            height="2000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
        >
            Loading...
        </iframe>
    </div>
);
export default HostHomeSection;
