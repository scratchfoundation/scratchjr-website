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
        <div className="fd-news-feed">
            <Timeline
                dataSource={{
                    sourceType: 'widget',
                    widgetId: '900362519658848256'
                }}
                options={{
                    username: 'Scratch',
                    width: '600',
                    height: '800',
                    chrome: 'noheader nofooter'
                }}
            />
        </div>
    </div>
);
export default NewsSection;
