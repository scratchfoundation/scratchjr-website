/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';

const FAQSection = () => (
    <div className="content-section" id="faq-section">
        <div className="content-section-title">Frequently Asked Questions</div>
        <div className="content-section-description">
            Find answers to your troubleshooting questions here.
        </div>
        <div id="content-description">
            <div className="content-description-section">
                <div className="content-description-question">
                    Will ScratchJr run on my iPad or tablet?
                </div>
                <div className="content-description-answer">
                    ScratchJr runs on both iPads and Android tablets. ScratchJr can be installed on
                    any iPad running iOS 9.3 or greater. Previous versions of ScratchJr running on
                    earlier versions of iOS will not receive any more updates. ScratchJr can also be
                    installed on any Android tablet, 7 inches or larger, that are running Android
                    5.0 (Lollipop) or greater. You may be able to install earlier versions of
                    ScratchJr from the Google Play store that are compatible with earlier versions
                    of Android, but they are no longer supported and are not receiving updates.
                    <br />
                    <br />
                    We recommend iPads running iOS 11 or higher and Android tablets running Android
                    7 or higher.
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
                    Umaschi Bers of the DevTech Research Group at Tufts University and Mitchel
                    Resnick of the Lifelong Kindergarten Group at the MIT Media Lab, this new book
                    is an easy-to-use, hands-on resource for parents and educators alike to teach
                    children how to code with ScratchJr. Read
                    an <a
                        href="https://medium.com/scratchfoundation-blog/helping-young-children-experiment-explore-and-express-themselves-with-code-69a450d42005#.9fq210a4q"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        excerpt of the book
                    </a>
                    . You can buy your copy
                    through <a
                        href="https://www.nostarch.com/scratchjr"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        No Starch Press
                    </a>
                    !
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                    Will ScratchJr run on my Chromebook?
                </div>
                <div className="content-description-answer">
                    The Android version of ScratchJr that is available on
                    the <a href="https://play.google.com/store/apps/details?id=org.scratchjr.android">Google Play Store</a> will run on all Chromebooks with the capability of running android apps. This will work on both touchscreen and non-touchscreen Chromebooks.
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
                    Can I share a ScratchJr project from one tablet to another?
                </div>
                <div className="content-description-answer">
                    If you are running ScratchJr version 1.2 or greater, you can share projects via
                    email. On iPads you can also share by AirDrop. To access the sharing options, go
                    to the Project Information page by tapping on the yellow button in the top-right
                    corner of the ScratchJr editor.
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                Why can&apos;t ScratchJr record a sound or take a picture?
                </div>
                <div className="content-description-answer">
                    If ScratchJr can&apos;t record sounds or take a picture with the camera,
                    it might be that you didn&apos;t give ScratchJr access to the camera or
                    microphone when you first downloaded the app.
                    You can change this by going to <em>Settings &gt; Privacy &gt; Camera</em> on your device.
                    If the ScratchJr toggle is off, turn it on. Do the same for the microphone,
                    under <em>Settings &gt; Privacy &gt; Microphone</em>
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                    Will ScratchJr be available in other languages?
                </div>
                <div className="content-description-answer">
                    Currently ScratchJr supports 20 languages including English, we hope to include
                    translation to other languages in future versions of ScratchJr. If you&apos;re
                    interested in volunteering to help with translations, please fill out the
                    <a href="https://forms.gle/sRDtwWwnmkihCUtu8">
                        translator application form
                    </a>
                    , and we will contact you with details.
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
                <em className="content-description-answer">Last updated: April, 2022</em>
            </div>
        </div>
    </div>
);

export default FAQSection;
