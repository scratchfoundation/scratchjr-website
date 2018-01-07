import React from 'react';

const FAQSection = () => (
    <div
        className="content-section"
        id="faq-section"
    >
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
                    including all iPad minis, with iOS 7.0 or later installed.
                    Note that newer versions of ScratchJr will only run on
                    iOS 8+. It also runs on any
                    Android tablet, 7-inches or larger, that are running Android 4.2 (Jelly Bean MR1)
                    or higher. It does not need web-access to run.<br />
                    We recommend iPads running iOS 9 or greater and Android tablets
                    running Android 5 (Kit Kat) or higher.
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">Is there a book for ScratchJr?</div>
                <div className="content-description-answer">
                    <a
                        href="https://www.nostarch.com/scratchjr"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src="/images/scratchjr-book.png"
                            width="100"
                            height="auto"
                            style={{float: 'right'}}
                        />
                    </a>
                    Yes, there is a guide to ScratchJr. Written by app creators Professor Marina
                    Umaschi Bers of the DevTech Research Group at Tufts University
                    and Mitchel Resnick of the Lifelong Kindergarten Group at the MIT
                    Media Lab, this new book is an easy-to-use, hands-on resource for parents and
                    educators alike to teach children how to code with ScratchJr. Read
                    an <a
                        href="https://medium.com/scratchfoundation-blog/helping-young-children-experiment-explore-and-express-themselves-with-code-69a450d42005#.9fq210a4q"
                        rel="noopener noreferrer"
                        target="_blank"
                    >excerpt of the book</a>.
                    You can buy your copy
                    through <a
                        href="https://www.nostarch.com/scratchjr"
                        rel="noopener noreferrer"
                        target="_blank"
                    >No Starch Press</a>!
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">Will ScratchJr run on my Chromebook?</div>
                <div className="content-description-answer">
                    In March 2016 a version was released for Chromebooks. You can find <a
                        href="https://chrome.google.com/webstore/detail/scratchjr/oipimoeophamdcmjcfameoojlbhbgjda"
                    >
                    ScratchJr</a> in the <a
                        href="https://chrome.google.com/webstore/detail/scratchjr/oipimoeophamdcmjcfameoojlbhbgjda"
                    >
                    Chrome Web Store</a>.<br />
                    This version was built from the Android version. We have had to remove some features,
                    such as sharing, due to differences between Android and Chrome OS. We are providing
                    this application <b>AS IS</b>. If you run into problems, please do let us know, but
                    we cannot promise that we will fix bugs in this version.<br />
                    If you have a Chromebook that can install Android apps from the
                    Play store, we recommend that you install that version.
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
                    If Google Play doesn&apos;t recognize your tablet as meeting the minimum requirements
                    of ScratchJr, it will not allow it to be installed. If you believe that your tablet
                    does meet the minimum requirements (7-inch tablet) running Android 4.2 or greater,
                    and you are willing to side-load the apk, you can download and install a copy of
                    the <a href="//scratch-downloads.s3.amazonaws.com/jr/ScratchJr-1.2.5.apk">
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
                    If you are running ScratchJr version 1.1 or greater, you can share
                    projects via email or AirDrop (iPads). To access the sharing options, go to the Project
                    Information page by tapping on the yellow button in the top-right corner of the
                    ScratchJr editor.
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                    Why can&apos;t ScratchJr record a sound or take a  picture?
                </div>
                <div className="content-description-answer">
                    If ScratchJr can&apos;t record sounds or take a picture with the camera, it might be
                    that you didn&apos;t give ScratchJr access to the camera or microphone when you first
                    downloaded the app. You can change this by going
                    to <em>Settings &gt; Privacy &gt; Camera</em> on your device.
                    If the ScratchJr toggle is off, turn it on. Do the same for the microphone,
                    under <em>Settings &gt; Privacy &gt; Microphone</em>
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                    Will ScratchJr be available in other languages?
                </div>
                <div className="content-description-answer">
                    ScratchJr version 1.2.2+ (released September 2016) supports six languages
                    in addition to English, and we hope to include translation to other
                    languages in future versions of ScratchJr. If you&apos;re interested in
                    volunteering to help with translations, please fill out
                    the <a href="https://docs.google.com/a/media.mit.edu/forms/d/e/1FAIpQLSeskFZM3X6R9y7tsm51e6urAEhi5yW2fpBhnQea2yKwmqmWhw/viewform">translator
                    application form</a>, and we will contact you with details.
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                    Where does ScratchJr store my Projects?
                </div>
                <div className="content-description-answer">
                    ScratchJr saves project data in an internal database stored locally on your
                    device. ScratchJr is not currently set up for shared installation, so all users
                    of a device share the same project database.
                </div>
            </div>

            <div className="content-description-section">
                <em className="content-description-answer">Last updated: April, 2017</em>
            </div>
        </div>
    </div>
);

export default FAQSection;
