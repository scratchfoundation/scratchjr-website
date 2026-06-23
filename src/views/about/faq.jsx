/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';

const FAQSection = () => (
    <div className="content-section" id="faq-section">
        <div className="content-section-title">Frequently Asked Questions</div>
        <div className="content-section-description">
            Find answers to your troubleshooting questions here. For additional help, please contact us at <a href="mailto: info@scratchjr.org">info@scratchjr.org</a>
        </div>
        <div id="content-description">
            <div className="content-description-section">
                <div className="content-description-question">
                    What devices can I run ScratchJr on?
                </div>
                <div className="content-description-answer">
                    <p>
        ScratchJr has been developed for iPads and Android tablets. You can install the latest version on iPads running iOS 10+ or tablets running Android 5+. It can be downloaded from the Apple App store, Google Play store, or Amazon App store. If you have an older device, the store may offer to install the last compatible version.
      </p>
      
      <p>
        Other devices, including Chromebooks, Macbooks with an M1 or M2 chip, or Windows 11 PCs are able to run the app with some limitations. The main limitation is that the app runs in its own virtual container on the device, which must be enabled and limits certain capabilities such as project exporting and importing.
      </p>
      
      <p>
        Below are the full parameters and links for downloading ScratchJr on available devices:
      </p>
      
      <ul>
        <li>
          The current iPad version will work on devices running iOS 10.0+, again, we recommend a device with a screen that is 7 inches or larger for optimal user experience
        </li>
        <li>
          Any Chromebook that has the capability of installing apps from the Google Play store can install the Android version of ScratchJr.
        </li>
        <li>
          Any Fire tablet created after 2014 can download from the Amazon store.
        </li>
        <li>
          The current Android version will work on devices that are running Android 5.0+, we recommend a device with a screen that is 7 inches or larger for optimal user experience
        </li>
        <li>
          Macbooks with an M1 or M2 chip can download from the Apple App store (see "for iPads and iPhones" in the App store)
        </li>
        <li>
          Any Windows 11 PC, with the amazon app store installed from the Microsoft store can download ScratchJr from the Amazon App Store.
        </li>
      </ul>
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
                    Umaschi Bers of the DevTech Research Group at Tufts University, now at Boston College, and Mitchel
                    Resnick of the Lifelong Kindergarten Group at the MIT Media Lab, this book
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

            {/* <div className="content-description-section">
                <div className="content-description-question">
                    Will ScratchJr run on my Chromebook?
                </div>
                <div className="content-description-answer">
                    The Android version of ScratchJr that is available on
                    the <a href="https://play.google.com/store/apps/details?id=org.scratchjr.android">Google Play Store</a> will run on all Chromebooks with the capability of running android apps. This will work on both touchscreen and non-touchscreen Chromebooks.
                </div>
            </div> */}

            {/* <div className="content-description-section">
                <div className="content-description-question">
                    Are you planning to release a Web version of ScratchJr?
                </div>
                <div className="content-description-answer">
                    We are still in the early planning stages for a Web version.
                </div>
            </div> */}

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
                    interested in volunteering to help with translations, please fill out the&nbsp;
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
                <em className="content-description-answer">Last updated: April, 2026</em>
            </div>
        </div>
    </div>
);

export default FAQSection;
