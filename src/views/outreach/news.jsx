import React from 'react';

const NewsSection = () => (
    <div
        className="content-section"
        id="news-section"
    >
        <div className="content-section-title">
            ScratchJr Family Days News
        </div>
        <div className="content-section-description">
            See what other people are doing in their Family Days.
        </div>
        <div className="content-section-description">
            Tweet your Family Day news with the hashtag #ScratchJrFamily<br />
            <a href=" https://twitter.com/intent/tweet?screen_name=ScratchJr&hashtags=ScratchJrFamily">
                <div className="blue-button">
                    Tweet #ScratchJrFamily
                </div>
            </a>
        </div>
    </div>
);
export default NewsSection;
