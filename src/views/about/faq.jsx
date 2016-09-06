import React from 'react';

export default class FAQSection extends React.Component {
    render () {
        return (
            <div className="content-section" id="faq-section">
                <div className="content-section-title">
                    Frequently Asked Questions
                </div>
                <div className="content-section-description">
                    Find answers to your troubleshooting questions here.
                </div>
                <div id="content-description">
                    <div className="content-description-section">
                        <div className="content-description-question">Will ScratchJr run on my iPad or tablet?</div>
                        <div className="content-description-answer">
                            ScratchJr runs on both iPads and Android tablets. It will run on any iPad 2 or later,
                            including all iPad minis, with iOS 7.0 or later installed. It also runs on any
                            Android tablet, 7-inches or larger, that are running Android 4.2 (Jelly Bean MR1)
                            or higher. It does not need web-access to run.
                        </div>
                    </div>

                    <div className="content-description-section">
                        <div className="content-description-question">Is there a book for ScratchJr?</div>
                        <div className="content-description-answer">
                            <a href="https://www.nostarch.com/scratchjr" target="_blank">
                                <img
                                    src="/images/scratchjr-book.png"
                                    width="100"
                                    height="auto"
                                    style={{'float':'right'}}
                                />
                            </a>
                            Yes, there is a guide to ScratchJr. Written by app creators Professor Marina
                            Umaschi Bers and Mitchel Resnick of the Lifelong Kindergarten Group at the MIT
                            Media Lab, this new book is an easy-to-use, hands on resource for parents and
                            educators alike to teach children how to code with ScratchJr. Read
                            an <a
                                href="https://medium.com/scratchfoundation-blog/helping-young-children-experiment-explore-and-express-themselves-with-code-69a450d42005#.9fq210a4q"
                                target="_blank">
                                excerpt of the book</a>.
                            You can buy your copy
                            through <a href="https://www.nostarch.com/scratchjr" target="_blank">No Starch Press</a>!
                        </div>
                    </div>

                    <div className="content-description-section">
                        <div className="content-description-question">Will ScratchJr run on my Chromebook?</div>
                        <div className="content-description-answer">
                            In March 2016 a version was released for Chromebooks. You can find <a
                            href="https://chrome.google.com/webstore/detail/scratchjr/oipimoeophamdcmjcfameoojlbhbgjda">
                            ScratchJr</a> in the <a
                            href="https://chrome.google.com/webstore/detail/scratchjr/oipimoeophamdcmjcfameoojlbhbgjda">
                            Chrome Web Store</a>.<br />
                            This version was built from the Android version. We have had to remove some features,
                            such as sharing, due to differences between Android and Chrome OS. We are providing
                            this application <b>AS IS</b>. If you run into problems, please do let us know, but
                            we cannot promise that we will fix bugs in this version.
                        </div>
                    </div>

                    <div className="content-description-section">
                        <div className="content-description-question">
                            Are you planning to release a Web version of ScratchJr?
                        </div>
                        <div className="content-description-answer">
                            We are still in the early planning stages for a Web version.
                        </div>
                    </div>

                    <div className="content-description-section">
                        <div className="content-description-question">
                            I have an Android tablet that is running 4.2+,
                            but Google Play still says that my device is incompatible.
                        </div>
                        <div className="content-description-answer">
                            If Google Play doesn't recognize your tablet as meeting the minimum requirements
                            of ScratchJr, it will not allow it to be installed. If you believe that your tablet
                            does meet the minimum requirements (7-inch tablet) running Android 4.2 or greater,
                            and you are willing to side-load the apk, you can download and install a copy of
                            the <a href="http://scratch-downloads.s3.amazonaws.com/jr/ScratchJr-1.2.1.apk">
                            current version of ScratchJr APK</a>. <br /><br />
                            Please note that this version will not automatically update when there are new
                            versions available. We recommend that you sign up for the ScratchJr mailing list
                            so you are notified when there are new releases.
                        </div>
                    </div>

                    <div className="content-description-section">
                        <div className="content-description-question">
                            Can I share a ScratchJr project from one tablet to another?
                        </div>
                        <div className="content-description-answer">
                            If you are running ScratchJr version 1.0.3 or greater on the iPad, you can share
                            projects via email or AirDrop. To access the sharing options, go to the Project
                            Information page by tapping on the yellow button in the top-right corner of the
                            ScratchJr editor.
                            <br /><br />
                            Project sharing will become available on Android tablets in version 1.1.
                        </div>
                    </div>

                    <div className="content-description-section">
                        <div className="content-description-question">
                            Why can't ScratchJr record a sound or take a  picture
                        </div>
                        <div className="content-description-answer">
                            If ScratchJr can't record sounds or take a picture with the camera, it might be
                            that you didn't give ScratchJr access to the camera or microphone when you first
                            downloaded the app. You can change this by going
                            to <em>Settings > Privacy > Camera</em> on your device.
                            If the ScratchJr toggle is off, turn it on. Do the same for the microphone,
                            under <em>Settings > Privacy > Microphone</em>
                        </div>
                    </div>

                    <div className="content-description-section">
                        <div className="content-description-question">
                            Will ScratchJr be available in other languages?
                        </div>
                        <div className="content-description-answer">
                            ScratchJr version 1.2 (released April 2016) supports both
                            English and Spanish, and we hope to include translation to other
                            languages in future versions of ScratchJr. If you're
                            interested in volunteering to help with translations, please email <a
                            href="mailto:info@scratchjr.org">info@scratchjr.org</a> with your
                            name and the language you can help with.
                        </div>
                    </div>

                    <div className="content-description-section">
                        <em className="content-description-answer">Last updated: April 21, 2016</em>
                    </div>
                </div>
            </div>
        );
    }
}
