import React from 'react';
import SectionItem from '../../components/sectionitem/sectionitem.jsx';

const VideosSection = () => (
    <div
        className="content-section"
        id="videos-section"
    >
        <div className="content-section-title">
            Videos
        </div>
        <div className="content-section-description">
            Webinars for educators and parents
        </div>
        <div className="content-section-items-container">
            <SectionItem
                title="Pre-Launch Webinar (March 2014)"
                format="half"
                thumbnail={
                    <iframe
                        width="342"
                        height="192"
                        src="//www.youtube.com/embed/mZAawCvDlBM?rel=0"
                        frameBorder="0"
                        allowFullScreen
                    />
                }
                description="Project leaders Marina Bers and Mitch
                Resnick demonstrate how to create a simple project,
                discuss ScratchJr features, and share favorite stories
                from beta-testing the app in classrooms."
            />
            <SectionItem
                title="Post-Launch Webinar (August 2014)"
                format="half"
                thumbnail={
                    <iframe
                        width="342"
                        height="192"
                        src="//www.youtube.com/embed/owAA_IjdVUM?rel=0"
                        frameBorder="0"
                        allowFullScreen
                    />
                }
                description="Project leaders Marina Bers and Mitch Resnick
                respond to questions about the initial release of ScratchJr,
                and discuss future directions for the programming environment."
            />
            <SectionItem
                title="EdWeb Webinar"
                format="half"
                thumbnail={
                    <iframe
                        src="//player.vimeo.com/video/108504313?title=0&amp;byline=0&amp;portrait=0"
                        width="342"
                        height="214"
                        frameBorder="0"
                        allowFullScreen
                    />
                }
                description="Research Coordinator Amanda Strawhacker explores pedagogy
                around young children's programming languages, and presents affordances
                of digital playgrounds. She discusses why programming is an important
                skill for early education."
            />
        </div>
    </div>
);
export default VideosSection;
