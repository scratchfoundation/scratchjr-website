import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import Carousel from '../../components/carousel/carousel.jsx';

import './index.scss';

const Index = () => {
    const images = [
        '/images/newslide1.png',
        '/images/newslide2.png',
        '/images/newslide3.png',
        '/images/newslide4.png',
        '/images/newslide5.png'
    ];
    return (
        <div>
            <NavBar />
            <Carousel items={images} />

            <div id="content">
                <div id="announcement-banner">ScratchJr is available as a free app.</div>

                <div id="content-text">
                    <div id="content-header-first">ScratchJr</div>
                    <div id="content-header-second">Coding for young children</div>
                    <div id="content-body">
                        With ScratchJr, young children (ages 5-7) can
                        program their own interactive stories and games. In the process, they learn
                        to solve problems, design projects, express themselves creatively, and develop
                        socio-emotional skills.
                        <div id="store-badges">
                            <a href="https://itunes.apple.com/us/app/scratchjr/id895485086?ls=1&mt=8">
                                <img
                                    alt="Download on the App Store"
                                    src="/images/Apple_appstore.svg"
                                />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=org.scratchjr.android">
                                <img
                                    alt="Get it on Google Play"
                                    src="/images/GooglePlay.svg"
                                />
                            </a>
                            <a href="https://www.amazon.com/Scratch-Foundation-ScratchJr/dp/B01AKGTD2E">
                                <img
                                    alt="Get it on Amazon Appstore"
                                    src="/images/amazon-appstore-badge-english-black.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div id="content-graphic">
                    <img
                        id="content-graphic-item"
                        src="/images/homegraphic.png"
                    />
                </div>

                <div id="stats-section">
                    <img
                        className="stat-image"
                        src="/images/Downloads.png"
                        alt="70M+ Downloads"
                    />
                    <img
                        className="stat-image"
                        src="/images/Projects.png"
                        alt="400M+ Projects Created"
                    />
                    <img
                        className="stat-image"
                        src="/images/Countries.png"
                        alt="194 Countries"
                    />
                    <img
                        className="stat-image"
                        src="/images/Languages.png"
                        alt="20+ Languages"
                    />
                </div>

                <div
                    id="last-updated"
                    style={{marginTop: '8px', paddingRight: '15px', color: '#808080', textAlign: 'right', fontSize: '12px'}}
                >
                    Last updated: June, 2026
                </div>

                <div className="content-news">
                    <div className="content-news-body">
                        The {' '}<a href="https://sites.bc.edu/codingasanotherlanguage/">
                            Coding as Another Language Curriculum (CAL)
                        </a>{' '}
                         is the official curriculum of ScratchJr.
                         It supports young learners in developing new ways
                         of thinking and expressing themselves.
                    </div>
                    <div className="content-news-body">
                        <a href="https://www.amazon.com/Official-ScratchJr-Book-Help-Learn/dp/1593276710/">
                            The Official ScratchJr Book
                        </a>{' '}
                        is the perfect companion to the app and makes coding easy and fun for all.
                    </div>
                    <div className="content-news-body">
                        The{' '}
                        <a href="https://www.amazon.com/ScratchJr-Coding-Cards-Creative-Activities/dp/1593278993/">
                            ScratchJr Coding Cards
                        </a>{' '}
                        are a deck of 75 activity cards covering fun and exciting projects designed
                        to educate young children with ScratchJr.
                    </div>
                    <div className="content-news-body">
                        Coming Soon: The Official ScratchJr Activity Book!
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

render(<Index />, document.getElementById('app'));
