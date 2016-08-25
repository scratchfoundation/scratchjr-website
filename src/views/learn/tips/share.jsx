import React from 'react';
import {Section} from '../../../components/sectionitem/sectionitem.jsx'

export default class ShareSection extends React.Component {
    render() {
        return (
            <Section id='share-projects-section' title='Sharing ScratchJr Projects' description='You can shareyour ScratchJr projects in one of two ways: by email or by AirDrop.'>
                <div className='content-section-item-description'>
                    When the project you want to share is open, tap the yellow tab
                    in the top-right corner to go to the Project Information screen.
                    <img src='/images/tips/top-bar.png' className='content-section-image' alt='ScratchJr toprow icons'/>
                </div>
                <div className='content-section-item-description'>
                    Then select your sharing method:
                    <em>Share by Email</em>
                    or
                    <em>Share by AirDrop</em>. Regardless of which method you use
                        to send your project, the recipient tablet must have ScratchJr
                        installed. If you choose to share by AirDrop, the sender and
                        the recipient must both be iPads.
                    <img src='/images/tips/share.png' className='content-section-image' alt='Share Projectpage'/>
                </div>
                <div className='content-section-item-title'>
                    Sharing by Email
                </div>
                <div className='content-section-item-description'>
                    When you select Share by Email you'll see an email message
                    with your project attached to it.
                    <img src='/images/tips/send-email.png' className='content-section-image' alt='send emaildialog'/>
                </div>
                <div className='content-section-item-description'>
                    Type in the email address of the person you want to share
                    your project with and tap Send. When the recipient taps on
                    the email attachment, they will get the following pop-up:
                    <img src='/images/tips/receive-email.png' className='content-section-image' alt='receiveemail pop-up'/>
                </div>
                <div className='content-section-item-description'>
                    When they tap Open in 'ScratchJr', they will see the project
                    you shared on the Home screen, wrapped in blue ribbon.
                    <img src='/images/tips/shared-project.png' className='content-section-image' alt='sharedproject view'/>
                    After they have opened the project once, the blue ribbon
                    will disappear from the Home screen.
                    <br/>
                    <em>Note: You can only send attachments on a iPad through the iPad's
                        <strong>Mail</strong>
                        app.</em>
                </div>
                <div className='content-section-item-title'>
                    Sharing by AirDrop
                </div>
                <div className='content-section-item-description'>
                    To use AirDrop, you need to know the name of the iPad you
                    want to send your project to. You can find out the name
                    of an iPad by going to
                    <em>Settings > General > About > Name</em>. Make sure
                        Bluetooth and Wifi are also turned on for both iPads,
                        and make sure you are within about 30 feet of the iPad
                        you want to send to. When you select AirDrop, you will
                        see which iPads are ready to receive your project.
                    <img src='/images/tips/airdrop-1.png' className='content-section-image' alt='AirDropdevices available'/>
                    These are the iPads that are available for AirDrop. If you
                    don't see the iPad you're looking for, make sure it's on
                    and not sleeping.
                </div>
                <div className='content-section-item-description'>
                    When you select an iPad for AirDrop, the recipient will see the following message:
                    <img src='/images/tips/airdrop-2.png' className='content-section-image' alt='AirDroprecipient dialog'/>
                </div>
                <div className='content-section-item-description'>
                    If the recipient taps Accept, ScratchJr will tell you that
                    the project was accepted with a 'Sent' message.<br/>
                    <img src='/images/tips/airdrop-3.png' className='content-section-image' alt='AirDropconfirmation'/>
                </div>
                <div className='content-section-item-description'>
                    The recipient will see the shared project wrapped in blue
                    ribbon on the Home screen.
                    <img src='/images/tips/shared-project.png' className='content-section-image' alt='SharedProject view'/>
                    After they've opened the project, the blue ribbon will
                    disappear from the Home screen.
                </div>
                <div className='content-section-item-description'>
                    If AirDrop isn't available on your iPad (earlier than 4th
                        generation or iOS 7), you'll see this message:<br/>
                    <img src='/images/tips/airdrop-4.png' className='content-section-image' alt='AirDropunavailable dialog'/>
                </div>
                <div className='content-section-item-description'>
                    If the recipient iPad doesn't have ScratchJr installed,
                    you'll see this message:
                    <img src='/images/tips/airdrop-5.png' className='content-section-image' alt='AirDropunavailable dialog'/><br/>
                    Install ScratchJr and the project should now be visible.<br/>
                    <em>Note: If you have several iPads with the same name,
                        you won't know which iPad to send the file to. In
                        that case, turn off AirDrop on all of the iPads except
                        the one you want to send your project to.
                    </em>
                </div>
                <div className='content-section-item-description'>
                    To turn off AirDrop, swipe up from the bottom of the iPad.
                    You will see the following:
                    <img src='/images/tips/airdrop-6.png' className='content-section-image' alt='AirDropcontrols'/><br/>
                    Tap on 'AirDrop' and set the option to 'Off'.
                </div>
                <div className='content-section-item-title'>
                    Notes on Sharing Projects
                </div>
                <div className='content-section-item-description'>
                    When you share a project all the images, recordings, sounds,
                    and any created characters or backgrounds in your project
                    will be transferred from one device to the other.<br/><br/>
                    ScratchJr doesn't number or rename the project on the target
                    device, so if you send it lots of times you can end up with
                    multiple copies of the same project. ScratchJr treats each
                    copy as a separate project even if each copy has the same
                    name, so if you make any changes to a project make sure to
                    rename it before you share it so that the recipient can
                    distinguish between the versions.
                </div>
            </Section>
        );
    }
}
