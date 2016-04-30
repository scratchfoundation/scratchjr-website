import React from 'react';

var InterfaceSection = React.createClass({
    render: function() {
        return (
            <div className="content-section content-section-selected learn-interface" id="interface-section">
                <a href="pdfs/scratchjr-interface-guide.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
                <div className="interface-container">
                    {/* 1. Save */}
                    <div className="interface-button interface-button-selected" id="interface-button-save">
                        <div className="interface-button-text">1</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-save"></div>
                    <div className="interface-dot" id="interface-dot-save"></div>
                    {/* 2. Stage */}
                    <div className="interface-button" id="interface-button-stage">
                        <div className="interface-button-text">2</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-stage-1"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-stage-1"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-stage-2"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-stage-2"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-stage-3"></div>
                    {/* 3. Presentation Mode */}
                    <div className="interface-button" id="interface-button-presentation-mode">
                        <div className="interface-button-text">3</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-presentation-mode"></div>
                    <div className="interface-dot" id="interface-dot-presentation-mode"></div>
                    {/* 4. Grid */}
                    <div className="interface-button" id="interface-button-grid">
                        <div className="interface-button-text">4</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-grid"></div>
                    <div className="interface-dot" id="interface-dot-grid"></div>
                    {/* 5. Change Background */}
                    <div className="interface-button" id="interface-button-add-text">
                        <div className="interface-button-text">5</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-add-text"></div>
                    <div className="interface-dot" id="interface-dot-add-text"></div>
                    {/* 6. Add Text */}
                    <div className="interface-button" id="interface-button-change-background">
                        <div className="interface-button-text">6</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-change-background"></div>
                    <div className="interface-dot" id="interface-dot-change-background"></div>
                    {/* 7. Reset Characters */}
                    <div className="interface-button" id="interface-button-reset-characters">
                        <div className="interface-button-text">7</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-reset-characters"></div>
                    <div className="interface-dot" id="interface-dot-reset-characters"></div>
                    {/* 8. Green Flag */}
                    <div className="interface-button" id="interface-button-green-flag">
                        <div className="interface-button-text">8</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-green-flag"></div>
                    <div className="interface-dot" id="interface-dot-green-flag"></div>
                    {/* 9. Pages */}
                    <div className="interface-button" id="interface-button-pages">
                        <div className="interface-button-text">9</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-pages"></div>
                    <div className="interface-dot" id="interface-dot-pages"></div>
                    {/* 10. Project Information */}
                    <div className="interface-button" id="interface-button-project-information">
                        <div className="interface-button-text">10</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-project-information"></div>
                    <div className="interface-dot" id="interface-dot-project-information"></div>
                    {/* 16. Characters */}
                    <div className="interface-button" id="interface-button-characters">
                        <div className="interface-button-text">16</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-characters-1"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-characters-3"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-characters"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-characters-2"></div>
                    {/* 15. Block Categories */}
                    <div className="interface-button" id="interface-button-block-categories">
                        <div className="interface-button-text">15</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-block-categories-1"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-block-categories"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-block-categories-2"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-block-categories-3"></div>
                    {/* 14. Blocks Palette */}
                    <div className="interface-button" id="interface-button-block-palette">
                        <div className="interface-button-text">14</div>
                    </div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-blocks-palette"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-1"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-2"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-3"></div>
                    {/* 13. Programming Area */}
                    <div className="interface-button" id="interface-button-programming-area">
                        <div className="interface-button-text">13</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-programming-area"></div>
                    <div className="interface-dot" id="interface-dot-programming-area"></div>
                    {/* 12. Programming Script */}
                    <div className="interface-button" id="interface-button-programming-script">
                        <div className="interface-button-text">12</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-programming-script-1"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-programming-script"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-programming-script-2"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-programming-script-3"></div>
                    {/* 11. Undo Redo */}
                    <div className="interface-button" id="interface-button-undo-redo">
                        <div className="interface-button-text">11</div>
                    </div>
                    <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-1"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-undo-redo"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-2"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-3"></div>
                    <img className="ipad-project-view" src="images/learninterface.png" />
                    <div id="right-column">
                        <div id="interface-key" className="txlive-dynamic">
                            <div id="interface-key-header">
                                1 | Save
                            </div>
                            <div id="interface-key-description">
                                Save the current project and exit to the list of projects.
                            </div>
                        </div>
                        <div id="video-wrapper">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = InterfaceSection;