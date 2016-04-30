import React from 'react';

var TipsSection = React.createClass({
    render: function() {
        return (
            <div>
                <div className="content-section learn-tips" id="tips-section">
                    <div className="content-section-title">
                        Tips &amp; Hints
                    </div>
                    <div className="content-section-description">
                        Tips and hints that you might find useful as you explore ScratchJr. For answers to more general questions about ScratchJr, see the <a href="about#faq">Frequently Asked Questions</a>.
                    </div>
                    <div className="content-section-items-container">
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Making, Renaming, and Deleting Projects
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/managing-projects.jpg"/>
                            </div>
                            <div className="content-section-item-description">
                                Learn how to make a new project, rename an existing project, and delete a project.  <a className="read-more" id="manage-projects" href="#manage-projects">Watch video</a>
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                 Character Animation using the ScratchJr Blocks
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/character-animation.jpg"/>
                            </div>
                            <div className="content-section-item-description">
                                 Make a simple script by connecting blocks together. <a className="read-more" id="character-animation" href="#character-animation">Watch video</a>
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Multiple Characters
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/multi-character.jpg"/>
                            </div>
                            <div className="content-section-item-description">
                                 Learn how to add characters to your project. <a className="read-more" id="multi-character" href="#multi-character">Watch video</a>
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Trigger Blocks
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/triggers.jpg"/>
                            </div>
                            <div className="content-section-item-description">
                                 Use trigger blocks to specify when a script should run. <a className="read-more" id="trigger-blocks" href="#trigger-blocks">Watch video</a>
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Sharing ScratchJr Projects
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/share.png"/>
                            </div>
                            <div className="content-section-item-description">
                                 You can share projects by email. On iPads you can also share project by AirDrop.  <a className="read-more" id="share-projects" href="#share-projects">Read more</a>
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Sample Projects
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/sample-projects.png"/>
                            </div>
                            <div className="content-section-item-description">
                                 The Sample Projects library is a collection of eight pre-made projects that use a range of blocks and features to show you the variety of projects you can make with ScratchJr. <a className="read-more" id="sample-projects" href="#sample-projects">Read more</a>
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Character List Scrolling
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/character-list.png"/>
                            </div>
                            <div className="content-section-item-description">
                                 If there's a scroll bar in the Character List on the left of the Stage it means you that you have more characters in your project than fit in the list on the screen. You can scroll through this list of characters by swiping up or down on the list, but not on the scroll bar. The order of the characters doesn't matter for any of the action in the project.
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Copying Characters
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/copy-character.png"/>
                            </div>
                            <div className="content-section-item-description">
                                 To copy a character and its scripts, you can drag the character from the list of characters on the left over to the list of pages on the right.
                                 This will work for copying characters to the same page and to other pages. The scripts and sounds will copy along with the character, but then the scripts are separate, so when you change the scripts or sounds of one of the copies, it won't affect the other existing copies of the character.
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Copying Scripts
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/copy-script.png"/>
                            </div>
                            <div className="content-section-item-description">
                                 You can copy a script (set of blocks) from one character to another in the same project.  <a className="read-more" id="copy-scripts" href="#copy-scripts">Read more</a>
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Multi-page projects
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/multi-page.png"/>
                            </div>
                            <div className="content-section-item-description">
                                 Projects can have up to four pages with their own characters and scripts.  <a className="read-more" id="pages" href="#pages">Read more</a>
                            </div>
                        </div>
                        <div className="content-section-full-item">
                            <div className="content-section-item-title">
                                Moving Backwards
                            </div>
                            <div className="content-section-item-thumbnail">
                                <img className="content-section-item-thumbnail-image" src="images/tips/backwards-thumb.png"/>
                            </div>
                            <div className="content-section-item-description">
                                 You can make a character move backwards by giving your motion blocks negative numbers. If you want to make your character face the opposite direction without moving forward or backward, add a motion block with a zero and tap on it.
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Learn-Tips Home Page */}

                {/* Beginning of Tips Pages */}
                {/* beginning of project management tips */}
                <div className="content-section content-subpage" id="manage-projects-section">
                    <div className="content-section-title">
                        Making, Renaming, and Deleting Projects
                    </div>
                    <div className="content-section-description">
                        Watch the video to learn how to make a new project, rename an existing project, and delete a project.
                    </div>
                    <div className="content-section-video">
                        <iframe width="640" height="480" src="https://www.youtube.com/embed/RXXDUxqBzBI?rel=0" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                {/* beginning of Character Animation tips */}
                <div className="content-section content-subpage" id="character-animation-section">
                    <div className="content-section-title">
                        Character Animation using the ScratchJr Blocks
                    </div>
                    <div className="content-section-description">
                        See how to make a simple script by connecting blocks together.
                    </div>
                    <div className="content-section-video">
                        <iframe width="640" height="480" src="https://www.youtube.com/embed/JoHpVzltafU?rel=0" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                {/* beginning of multiple character tips */}
                <div className="content-section content-subpage" id="multi-character-section">
                    <div className="content-section-title">
                        Multiple Characters
                    </div>
                    <div className="content-section-description">
                        See how to add characters to your project.
                    </div>
                    <div className="content-section-video">
                        <iframe width="640" height="480" src="https://www.youtube.com/embed/4qLVKpImrws?rel=0" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                {/* beginning of trigger block tips */}
                <div className="content-section content-subpage" id="trigger-blocks-section">
                    <div className="content-section-title">
                        Trigger Blocks
                    </div>
                    <div className="content-section-description">
                        See how to use trigger blocks to specify when a script should run.
                    </div>
                    <div className="content-section-video">
                        <iframe width="640" height="480" src="https://www.youtube.com/embed/123AdwR_JxI?rel=0" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                {/* beginning of Sharing projects tips */}
                <div className="content-section content-subpage" id="share-projects-section">
                    <div className="content-section-title">
                        Sharing ScratchJr Projects
                    </div>
                    <div className="content-section-description">
                        You can share your ScratchJr projects in one of two ways: by email or by AirDrop.
                    </div>
                    <div className="content-section-item-description">
                        When the project you want to share is open, tap the yellow tab in the top-right corner to go to the Project Information screen.
                        <img src="images/tips/top-bar.png" className="content-section-image" alt="ScratchJr top row icons" />
                    </div>
                    <div className="content-section-item-description">
                        Then select your sharing method: <em>Share by Email</em> or <em>Share by AirDrop</em>. Regardless of which method you use to send your project, the recipient tablet must have ScratchJr installed. If you choose to share by AirDrop, the sender and the recipient must both be iPads.
                        <img src="images/tips/share.png" className="content-section-image" alt="Share Project page" />
                    </div>
                    <div className="content-section-item-title">
                        Sharing by Email
                    </div>
                    <div className="content-section-item-description">
                        When you select Share by Email you'll see an email message with your project attached to it.
                        <img src="images/tips/send-email.png" className="content-section-image" alt="send email dialog" />
                    </div>
                    <div className="content-section-item-description">
                        Type in the email address of the person you want to share your project with and tap Send.
                        When the recipient taps on the email attachment, they will get the following pop-up:
                        <img src="images/tips/receive-email.png" className="content-section-image" alt="receive email pop-up" />
                    </div>
                    <div className="content-section-item-description">
                        When they tap Open in "ScratchJr", they will see the project you shared on the Home screen, wrapped in blue ribbon.
                        <img src="images/tips/shared-project.png" className="content-section-image" alt="shared project view" />
                        After they have opened the project once, the blue ribbon will disappear from the Home screen. <br/>
                        <em>Note: You can only send attachments on a iPad through the iPad's <strong>Mail</strong> app.</em>
                    </div>
                    <div className="content-section-item-title">
                        Sharing by AirDrop
                    </div>
                    <div className="content-section-item-description">
                        To use AirDrop, you need to know the name of the iPad you want to send your project to. You can find out the name of an iPad by going to <em>Settings > General > About > Name</em>.
                        Make sure Bluetooth and Wifi are also turned on for both iPads, and make sure you are within about 30 feet of the iPad you want to send to. When you select AirDrop, you will see which iPads are ready to receive your project.
                        <img src="images/tips/airdrop-1.png" className="content-section-image" alt="AirDrop devices available" />
                        These are the iPads that are available for AirDrop. If you don't see the iPad you're looking for, make sure it's on and not sleeping.
                    </div>
                    <div className="content-section-item-description">
                        When you select an iPad for AirDrop, the recipient will see the following message:
                        <img src="images/tips/airdrop-2.png" className="content-section-image" alt="AirDrop recipient dialog" />
                    </div>
                    <div className="content-section-item-description">
                        If the recipient taps Accept, ScratchJr will tell you that the project was accepted with a "Sent" message.<br/>
                        <img src="images/tips/airdrop-3.png" className="content-section-image" alt="AirDrop confirmation" />
                    </div>
                    <div className="content-section-item-description">
                        The recipient will see the shared project wrapped in blue ribbon on the Home screen.
                        <img src="images/tips/shared-project.png" className="content-section-image" alt="Shared Project view" />
                        After they've opened the project, the blue ribbon will disappear from the Home screen.
                    </div>
                    <div className="content-section-item-description">
                        If AirDrop isn't available on your iPad (earlier than 4th generation or iOS 7), you'll see this message:<br/>
                        <img src="images/tips/airdrop-4.png" className="content-section-image" alt="AirDrop unavailable dialog" />
                    </div>
                    <div className="content-section-item-description">
                        If the recipient iPad doesn't have ScratchJr installed, you'll see this message:
                        <img src="images/tips/airdrop-5.png" className="content-section-image" alt="AirDrop unavailable dialog" /><br/>
                        Install ScratchJr and the project should now be visible.<br/>
                        <em>Note: If you have several iPads with the same name,you won't know which iPad to send the file to. In that case, turn off AirDrop on all of the iPads except the one you want to send your project to. </em>
                    </div>
                    <div className="content-section-item-description">
                        To turn off AirDrop, swipe up from the bottom of the iPad. You will see the following:
                        <img src="images/tips/airdrop-6.png" className="content-section-image" alt="AirDrop controls" /><br/>
                        Tap on "AirDrop" and set the option to "Off".
                    </div>
                    <div className="content-section-item-title">
                        Notes on Sharing Projects
                    </div>
                    <div className="content-section-item-description">
                        When you share a project all the images, recordings, sounds, and any created characters or backgrounds in your project will be transferred from one device to the other.<br/><br/>
                        ScratchJr doesn't number or rename the project on the target device, so if you send it lots of times you can end up with multiple copies of the same project. ScratchJr treats each copy as a separate project even if each copy has the same name, so if you make any changes to a project make sure to rename it before you share it so that the recipient can distinguish between the versions.
                    </div>
                </div>
                {/* start of sample projects tips */}
                <div className="content-section content-subpage" id="sample-projects-section">
                    <div className="content-section-title">
                        Sample Projects Library
                    </div>
                    <div className="content-section-description">
                        The Sample Projects Library is a collection of eight pre-made ScratchJr projects that use a range of blocks and features to show you the variety of projects you can make with ScratchJr. You can run these projects to see how they work, and you can change the blocks around to see what effect it has on the action.
                    </div>
                    <div className="content-section-item-description">
                        Access the Sample Projects library from the Home screen by tapping on the question mark.
                        <img src="images/tips/home.png" className="content-section-image" alt="Home page" />
                    </div>
                    <div className="content-section-item-description">
                        To run the Sample Projects choose a project and then tap on the Green Flag in each one. You can have a look at the scripts of the various characters, and even try changing the scripts to see what effect it has. The things you can't do in a Sample Project are: add characters or pages, change the background, add a title, or save any changes that you make.<br/>
                        <img src="images/tips/sample-projects.png" className="content-section-image" alt="Sample Projects Library" /><br/>
                        After you have explored the sample projects, tap on the home button to create your own project using the full ScratchJr interface.
                    </div>
                </div>
                {/* start of copy scripts tips */}
                <div className="content-section content-subpage" id="copy-scripts-section">
                    <div className="content-section-title">
                        Copying Scripts
                    </div>
                    <div className="content-section-item-description">
                        You can copy a script from one character to another by dragging the script from the programming area to the character in the list on the left.
                        <img src="images/tips/copy-script.png" className="content-section-image" alt="copy a script" />
                    </div>
                    <div className="content-section-item-description">
                        But you can also duplicate a script in a single programming area if you drag the script to the same character  the script belongs to in the character list.
                        <img src="images/tips/duplicate.png" className="content-section-image" alt="duplicate a script" /><br/>
                        The copy will appear on top of the original script, but slightly offset. Just drag it over to one side to see both copies.<br/>
                        The only thing that can't be copied from one character to another is a recorded sound. If a script has a recorded sound, the sound will be replaced by the Pop sound in the copied script.  You can copy sounds for the same character though, so the recorded sound will duplicate itself in the duplicated script
                    </div>
                </div>
                {/* start of multi-page tips */}
                <div className="content-section content-subpage" id="pages-section">
                    <div className="content-section-title">
                        Multiple pages
                    </div>
                    <div className="content-section-item-description">
                        You can have up to four pages in a project. When you have more than one page connected by Go To Page blocks, you can get your scripts to run automatically by starting all the scripts with a Green Flag. Then, when the Go To Page block turns to a page, any scripts on that page with a Green Flag will run.
                        <img src="images/tips/multi-page.png" className="content-section-image" alt="multiple pages" /><br/>
                        When you tap the Green Flag, the action will start on whichever page is currently selected, so make sure you choose Page 1 of your project before tapping the Green Flag to get it to run from the beginning.
                    </div>
                    <div className="content-section-item-description">
                        You can change the order of the pages by dragging them to a new position in the page list on the right.
                        <img src="images/tips/reorder.png" className="content-section-image" alt="reorder pages" /><br/>
                        When you rearrange the pages, ScratchJr will also renumber the End blocks for those pages, even if you've already placed them in scripts, so that the pages still turn to the same page that you asked them to in the first place. If you want the script to go in the new order of the pages on the right, just replace the Go To Page blocks in the scripts.
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TipsSection;