import React from 'react';
import Section from '../../../components/sectionitem/section.jsx';
import TxDiv from '../../../components/transifex/txdiv.jsx';

const ShareSection = () => (
    <Section
        id="share-projects-section"
        title="Sharing ScratchJr Projects"
        translateUrls
        description="You can share your ScratchJr projects in one of two ways: by email or by AirDrop."
    >
        <TxDiv
            className="content-section-item-description"
            txContent="notranslate_urls"
        >
            When the project you want to share is open, tap the yellow tab
            in the top-right corner to go to the Project Information screen.
            <img
                alt="ScratchJr toprow icons"
                className="content-section-image"
                src="/images/tips/top-bar.png"
            />
        </TxDiv>
        <div className="content-section-item-description">
            Then select your sharing method: <em>Share by Email</em> or <em>Share
            by AirDrop</em>. Regardless of which method you use
            to send your project, the recipient tablet must have ScratchJr
            installed. If you choose to share by AirDrop, the sender and
            the recipient must both be iPads.
            <img
                alt="Share Projectpage"
                className="content-section-image"
                src="/images/tips/share.png"
            />
        </div>
        <div className="content-section-item-description">
            For both sharing by email and AirDrop, the sender must first
            answer a simple math problem to ensure that an adult approves
            sharing the project with others.
            <img
                alt="Share parental gate"
                className="content-section-image"
                src="/images/tips/share-parent-gate.png"
            />
        </div>
        <div className="content-section-item-title">
            Sharing by Email
        </div>
        <div className="content-section-item-description">
            When you select Share by Email you&apos;ll see an email message
            with your project attached to it.
            <img
                alt="send email dialog"
                className="content-section-image"
                src="/images/tips/share-email1.png"
            />
        </div>
        <div className="content-section-item-description">
            Type in the email address of the person you want to share
            your project with and tap Send. When the recipient taps on
            the email attachment, they will get the following pop-up:
            <img
                alt="receive email pop-up"
                className="content-section-image"
                src="/images/tips/share-email2.png"
            />
        </div>
        <div className="content-section-item-description">
            When they tap Open in &apos;ScratchJr&apos;, they will see the project
            you shared on the Home screen, wrapped in blue ribbon.
            <img
                alt="shared project view"
                className="content-section-image"
                src="/images/tips/shared-project.png"
            />
            After they have opened the project once, the blue ribbon
            will disappear from the Home screen.
            <br />
            <em>Note: You can only send attachments on a iPad through the iPad&apos;s
                <strong>Mail</strong>
                app.</em>
        </div>
        <div className="content-section-item-title">
            Sharing by AirDrop
        </div>
        <div className="content-section-item-description">
            To use AirDrop, you need to know the name of the iPad you
            want to send your project to. You can find out the name
            of an iPad by going to <em>Settings &gt; General &gt; About &gt; Name</em>. Make sure
            Bluetooth and Wifi are also turned on for both iPads,
            and make sure you are within about 30 feet of the iPad
            you want to send to. When you select AirDrop, you will
            see which iPads are ready to receive your project.
            <img
                alt="AirDropdevices available"
                className="content-section-image"
                src="/images/tips/share-airdrop1.png"
            />
            These are the iPads that are available for AirDrop. If you
            don&apos;t see the iPad you&apos;re looking for, make sure it&apos;s on
            and not sleeping.
        </div>
        <div className="content-section-item-description">
            When you select an iPad for AirDrop, the recipient will see the following message:
            <img
                alt="AirDroprecipient dialog"
                className="content-section-image"
                src="/images/tips/share-airdrop2.png"
            />
        </div>
        <div className="content-section-item-description">
            If the recipient taps Accept, ScratchJr will tell you that
            the project was accepted with a &apos;Sent&apos; message.<br />
            <img
                alt="AirDropconfirmation"
                className="content-section-image"
                src="/images/tips/share-airdrop3.png"
            />
        </div>
        <div className="content-section-item-description">
            The recipient will see the shared project wrapped in blue
            ribbon on the Home screen.
            <img
                alt="SharedProject view"
                className="content-section-image"
                src="/images/tips/shared-project.png"
            />
            After they&apos;ve opened the project, the blue ribbon will
            disappear from the Home screen.
        </div>
        <div className="content-section-item-description">
            If AirDrop isn&apos;t available on your iPad (earlier than 4th
                generation or iOS 7), you&apos;ll see the message &quot;No share actions available.&quot;<br />
        </div>
        <div className="content-section-item-description">
            If the recipient iPad doesn&apos;t have ScratchJr installed,
            you&apos;ll see this message:
            <img
                alt="AirDropunavailable dialog"
                className="content-section-image"
                src="/images/tips/share-airdrop5.png"
            /><br />
            Install ScratchJr and the project should now be visible.<br />
            <em>Note: If you have several iPads with the same name,
                you won&apos;t know which iPad to send the file to. In
                that case, turn off AirDrop on all of the iPads except
                the one you want to send your project to.
            </em>
        </div>
        <div className="content-section-item-description">
            To turn off AirDrop, swipe up from the bottom of the iPad.
            You will see the following:
            <img
                alt="AirDrop controls"
                className="content-section-image"
                src="/images/tips/share-airdrop6.png"
            /><br />
            Tap on &apos;AirDrop&apos; and set the option to &apos;Off&apos;.
        </div>
        <div className="content-section-item-title">
            Notes on Sharing Projects
        </div>
        <div className="content-section-item-description">
            When you share a project all the images, recordings, sounds,
            and any created characters or backgrounds in your project
            will be transferred from one device to the other.<br /><br />
            ScratchJr doesn&apos;t number or rename the project on the target
            device, so if you send it lots of times you can end up with
            multiple copies of the same project. ScratchJr treats each
            copy as a separate project even if each copy has the same
            name, so if you make any changes to a project make sure to
            rename it before you share it so that the recipient can
            distinguish between the versions.
        </div>
    </Section>
);
export default ShareSection;
