import React from 'react';

var BlocksSection = React.createClass({
    render: function() {
        return (
            <div className="content-section learn-blocks" id="blocks-section">
                <a href="pdfs/block_descriptions.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
                {/* Yellow Blocks */}
                <div className="block-category-header" id="yellow-block-category-header">
                    Triggering Blocks
                </div>
                <div className="block-category-header-line" id="yellow-block-category-header-line"></div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Start on Green Flag
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/onflag.png" />
                        </div>
                        <div className="block-description">
                            Starts the script when the Green Flag is tapped.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Start on Tap
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/ontap.png" />
                        </div>
                        <div className="block-description">
                            Starts the script when you tap on the character.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Start on Bump
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/onbump.png" />
                        </div>
                        <div className="block-description">
                            Starts the script when the character is touched by another character.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Start on Message
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/messagereceive.png" />
                        </div>
                        <div className="block-description">
                            Starts the script whenever a message of the specified color is sent.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Send Message
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/messagesend.png" />
                        </div>
                        <div className="block-description">
                            Sends a message of the specified color.
                        </div>
                    </div>
                </div>
                {/* Blue Blocks */}
                <div className="block-category-header" id="blue-block-category-header">
                    Motion Blocks
                </div>
                <div className="block-category-header-line" id="blue-block-category-header-line"></div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Move Right
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/right.png" />
                        </div>
                        <div className="block-description">
                            Moves the character a specified number of grid squares to the right.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Move Left
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/left.png" />
                        </div>
                        <div className="block-description">
                            Moves the character a specified number of grid squares to the left.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Move Up
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/up.png" />
                        </div>
                        <div className="block-description">
                            Moves the character a specified number of grid squares up.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Move Down
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/down.png" />
                        </div>
                        <div className="block-description">
                            Moves the character a specified number of grid squares down.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Turn Right
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/turnright.png" />
                        </div>
                        <div className="block-description">
                            Rotates the character clockwise a specified amount. Turn 12 for a full rotation.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Turn Left
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/turnleft.png" />
                        </div>
                        <div className="block-description">
                            Rotates the character counterclockwise a specified amount. Turn 12 for a full rotation.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Hop
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/hop.png" />
                        </div>
                        <div className="block-description">
                            Moves the character up a specified number of grid squares and then down again.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Go Home
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/gohome.png" />
                        </div>
                        <div className="block-description">
                            Resets the character's location to its starting position. (To set a new starting position, drag the character to the location).
                        </div>
                    </div>
                </div>
                {/* Purple Blocks */}
                <div className="block-category-header" id="purple-block-category-header">
                    Looks Blocks
                </div>
                <div className="block-category-header-line" id="purple-block-category-header-line"></div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Say
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/say.png" />
                        </div>
                        <div className="block-description">
                            Shows a specified message in a speech bubble above the character.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Grow
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/grow.png" />
                        </div>
                        <div className="block-description">
                            Increases the character's size.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Shrink
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/shrink.png" />
                        </div>
                        <div className="block-description">
                            Decreases the character's size.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Reset Size
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/reset.png" />
                        </div>
                        <div className="block-description">
                            Returns the character to its default size.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Hide
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/hide.png" />
                        </div>
                        <div className="block-description">
                            Fades out the character until it is invisible.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Show
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/show.png" />
                        </div>
                        <div className="block-description">
                            Fades in the character until it is fully visible.
                        </div>
                    </div>
                </div>
                <div className="block-category-header" id="green-block-category-header">
                    Sound Blocks
                </div>
                <div className="block-category-header-line" id="green-block-category-header-line"></div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Pop
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/pop.png" />
                        </div>
                        <div className="block-description">
                            Plays a "Pop" Sound
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Play Recorded Sound
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/playsound.png" />
                        </div>
                        <div className="block-description">
                            Plays a sound recorded by the user.
                        </div>
                    </div>
                </div>
                <div className="block-category-header" id="orange-block-category-header">
                    Control Blocks
                </div>
                <div className="block-category-header-line" id="orange-block-category-header-line"></div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Wait
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/wait.png" />
                        </div>
                        <div className="block-description">
                            Pauses the script for a specified amount of time (in tenths of seconds).
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Stop
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/stop.png" />
                        </div>
                        <div className="block-description">
                            Stops all the characters' scripts.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Set Speed
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/speed.png" />
                        </div>
                        <div className="block-description">
                            Changes the rate at which certain blocks are run.
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Repeat
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image-repeat" src="images/repeat.png" />
                        </div>
                        <div className="block-description-repeat">
                            Runs the blocks inside a specified number of times.
                        </div>
                    </div>
                </div>
                <div className="block-category-header" id="red-block-category-header">
                    End Blocks
                </div>
                <div className="block-category-header-line" id="red-block-category-header-line"></div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            End
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/end.png" />
                        </div>
                        <div className="block-description">
                            Indicates the end of the script (but does not affect the script in any way).
                        </div>
                    </div>
                    <div className="block-wrapper-right">
                        <div className="block-title">
                            Repeat Forever
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/forever.png" />
                        </div>
                        <div className="block-description">
                            Runs the script over and over.
                        </div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-wrapper-left">
                        <div className="block-title">
                            Go to Page
                        </div>
                        <div className="block-image-wrapper">
                            <img className="block-image" src="images/page.png" />
                        </div>
                        <div className="block-description">
                            Changes to the specified page of the project.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = BlocksSection;