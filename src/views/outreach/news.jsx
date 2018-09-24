import React from 'react';
import {Timeline} from 'react-twitter-widgets';

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
        <div className="fd-news-feed">
            <Timeline
                dataSource={{
                    sourceType: 'url',
                    url: 'https://twitter.com/ScratchJr/timelines/1021452548371288064?ref_src=twsrc%5Etfw'
                }}
                options={{
                    username: 'ScratchJr',
                    width: '600',
                    height: '800',
                    chrome: 'noheader nofooter'
                }}
            />
        </div>
    </div>
);
export default NewsSection;
