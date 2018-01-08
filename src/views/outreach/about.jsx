import React from 'react';

const AboutSection = () => (
    <div>
        <div
            className="content-section"
            id="about-fd-section"
        >
            <div className="content-section-title">
                About ScratchJr Family Days
            </div>
            <div id="content-description">
                <div className="content-description-section">
                    <div className="content-description-answer">
                        ScratchJr Family Day is a community event where parents, grandparents, siblings,
                        extended family members, and children can work together to create projects in
                        ScratchJr! The goal of Family Day is not only to help adults and children feel
                        more comfortable using ScratchJr, but also to encourage collaboration between
                        adults and children while creating ScratchJr projects.
                    </div>
                    <div className="content-description-question">Who are Family Days intended for?</div>
                    <div className="content-description-answer">
                        This event is for anyone who wants to create a ScratchJr community! It can be
                        done through schools, museum, after-school programs, community centers, or
                        anywhere else where families can come together. Children between the ages of 5-7
                        as well as their family members (including siblings or family members who are
                        older or younger) are encouraged to participate!
                    </div>
                </div>
            </div>
            <div className="content-section-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rPRH9B-gvUQ"
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                />
            </div>

        </div>
        <div className="content-photos">
            <img src="/images/outreach/familydays1.jpg" />
            <img src="/images/outreach/familydays2.jpg" />
            <img src="/images/outreach/familydays3.jpg" />
            <img src="/images/outreach/familydays4.jpg" />
        </div>
    </div>
);
export default AboutSection;
