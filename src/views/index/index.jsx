import React from 'react';
import {render} from 'react-dom';
import {Timeline} from 'react-twitter-widgets';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import Carousel from '../../components/carousel/carousel.jsx';

import './index.scss';

export default class Index extends React.Component {
    render () {
        var images = [
            '/images/slide1.png',
            '/images/slide2.png',
            '/images/slide3.png',
            '/images/slide4.png',
            '/images/slide5.png'
        ];
        return (
            <div>
                <NavBar/>
                <Carousel items={images}/>

                <div id='content'>
                    <div id='announcement-banner'>
                        ScratchJr is available as a free app for <a
                        href='https://itunes.apple.com/us/app/scratchjr/id895485086?ls=1&mt=8'>
                        iPads</a> and <a
                        href='https://play.google.com/store/apps/details?id=org.scratchjr.android'>
                        Android</a> tablets.
                    </div>

                    <div id='content-text'>
                        <div id='content-header-first'>
                            ScratchJr
                        </div>
                        {/* end content-header-first */}
                        <div id='content-header-second'>
                            Coding for young children
                        </div>
                        {/* end content-header-second */}
                        <div id='content-body'>
                            Coding is the new literacy! With ScratchJr, young children (ages 5-7) can
                            program their own interactive stories and games. In the process, they learn to
                            solve problems, design projects, and express themselves creatively on the
                            computer.
                            <div id='store-badges'>
                                <a href='https://itunes.apple.com/us/app/scratchjr/id895485086?ls=1&mt=8'>
                                    <img alt='Download on the App Store' src='/images/Apple_appstore.svg'/>
                                </a>
                                <a href='https://play.google.com/store/apps/details?id=org.scratchjr.android'>
                                    <img
                                        alt='Get it on Google Play'
                                        src='/images/GooglePlay.svg' />
                                </a>
                                <a
                                    href='https://chrome.google.com/webstore/detail/scratchjr/oipimoeophamdcmjcfameoojlbhbgjda'>
                                    <img
                                        alt='Download on the Chrome Web Store'
                                        src='/images/ChromeWebStore_Badge.svg'/>
                                </a>
                                <a href='https://www.amazon.com/gp/product/B01AKGTD2E'>
                                    <img
                                        alt='Get it on Amazon'
                                        src='/images/amazon-underground-app-us-black.svg'/>
                                </a>
                            </div>
                            {/* end store-badges */}
                        </div>
                        {/* end content-body */}
                    </div>
                    {/* end content-text */}
                    <div id='content-graphic'>
                        <img id='content-graphic-item' src='/images/homegraphic.png'/>
                    </div>
                    {/* end content-graphic */}
                    <div className='content-news'>
                        <div className='content-news-header'>
                            News
                        </div>
                        <div className='content-news-body'>
                            ScratchJr is now available in Spanish for <a href='https://play.google.com/store/apps/details?id=org.scratchjr.android'>
                                Android
                            </a> and <a
                            href='https://itunes.apple.com/us/app/scratchjr/id895485086?ls=1&mt=8'>
                                iOS
                            </a> tablets!
                        </div>
                        <div className='content-news-body'>
                            No Starch Press has re-released <a href='https://www.nostarch.com/scratchjr' target='_blank'>
                                The Official ScratchJr Book</a> in Spanish paperback and ebook format!
                        </div>
                    </div>

                    <div id='discussion-container'>
                        <div id='discussion-text'>
                            <div id='discussion-header'>
                                Join the Discussion
                            </div>
                            <div id='discussion-body'>
                                We introduced ourselves. Now it's your turn. Drop us a line with feedback,
                                report bugs &amp; glitches, or just say 'hi!'
                                <br></br>
                                <a href=' https://twitter.com/intent/tweet?screen_name=ScratchJr'>
                                    <div className='blue-button'>
                                        Tweet @ScratchJr
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id='disscussion-tweets'>
                            <Timeline
                                widgetId={'618881920324079616'}
                                options={{
                                username: 'ScratchJr',
                                width: '425',
                                height: '250',
                                chrome: 'noheader nofooter'
                            }}/>
                        </div>
                    </div>
                </div>
                {/* end content */}
                <Footer/>
            </div>
        );
    }
}

render(
    <Index/>, document.getElementById('app'));
