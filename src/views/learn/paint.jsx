import React from 'react';

var classNames = require('classnames');

var PaintSection = React.createClass({
    render: function() {
        return (
            <div 
                className={classNames(
                    "content-section", 
                    "learn-paint", 
                    {"content-section-selected": this.props.sectionIndex == this.props.activeSectionIndex}
                )}
                id="paint-section">
                <a href="pdfs/paint_editor_guide.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
                <div className="paint-container">
                    {/* 1. Undo */}
                    <div className="paint-button paint-button-selected" id="paint-button-undo">
                        <div className="paint-button-text">1</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-undo"></div>
                    <div className="paint-dot" id="paint-dot-undo"></div>
                    {/* 2. Redo */}
                    <div className="paint-button" id="paint-button-redo">
                        <div className="paint-button-text">2</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-redo"></div>
                    <div className="paint-dot" id="paint-dot-redo"></div>
                    {/* 3. Select Shape */}
                    <div className="paint-button" id="paint-button-select-shape">
                        <div className="paint-button-text">3</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-select-shape-1"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-select-shape-1"></div>
                    <div className="paint-vertical-line" id="paint-vertical-line-select-shape-2"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-select-shape-2"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-select-shape-3"></div>
                    {/* 4. Character Name */}
                    <div className="paint-button" id="paint-button-character-name">
                        <div className="paint-button-text">4</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-character-name"></div>
                    <div className="paint-dot" id="paint-dot-character-name"></div>
                    {/* 5. Cut */}
                    <div className="paint-button" id="paint-button-cut">
                        <div className="paint-button-text">5</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-cut"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-cut"></div>
                    <div className="paint-dot" id="paint-dot-cut"></div>
                    <img className="ipad-project-view" src="images/learnpaint.png" />
                    {/* 6. Duplicate */}
                    <div className="paint-button" id="paint-button-duplicate">
                        <div className="paint-button-text">6</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-duplicate"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-duplicate"></div>
                    <div className="paint-dot" id="paint-dot-duplicate"></div>
                    {/* 7. Rotate */}
                    <div className="paint-button" id="paint-button-rotate">
                        <div className="paint-button-text">7</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-rotate"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-rotate"></div>
                    <div className="paint-dot" id="paint-dot-rotate"></div>
                    {/* 8. Drag */}
                    <div className="paint-button" id="paint-button-drag">
                        <div className="paint-button-text">8</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-drag"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-drag"></div>
                    <div className="paint-dot" id="paint-dot-drag"></div>
                    {/* 9. Save */}
                    <div className="paint-button" id="paint-button-save">
                        <div className="paint-button-text">9</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-save"></div>
                    <div className="paint-dot" id="paint-dot-save"></div>
                    {/* 10. Fill */}
                    <div className="paint-button" id="paint-button-fill">
                        <div className="paint-button-text">10</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-fill"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-fill"></div>
                    <div className="paint-dot" id="paint-dot-fill"></div>
                    {/* 11. Camera */}
                    <div className="paint-button" id="paint-button-camera">
                        <div className="paint-button-text">11</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-camera"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-camera"></div>
                    <div className="paint-dot" id="paint-dot-camera"></div>
                    {/* 12. Select Color */}
                    <div className="paint-button" id="paint-button-select-color">
                        <div className="paint-button-text">12</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-select-color-1"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-select-color-1"></div>
                    <div className="paint-vertical-line" id="paint-vertical-line-select-color-2"></div>
                    <div className="paint-vertical-line" id="paint-vertical-line-select-color-3"></div>
                    {/* 13. Select Line Size */}
                    <div className="paint-button" id="paint-button-select-line-size">
                        <div className="paint-button-text">13</div>
                    </div>
                    <div className="paint-vertical-line" id="paint-vertical-line-select-line-size-1"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-select-line-size-1"></div>
                    <div className="paint-vertical-line" id="paint-vertical-line-select-line-size-2"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-select-line-size-2"></div>
                    <div className="paint-horizontal-line" id="paint-horizontal-line-select-line-size-3"></div>
                    <div id="paint-key" className="txlive-dynamic">
                        <div id="paint-key-header">
                            1 | Undo
                        </div>
                        <div id="paint-key-description">
                            Reverses the most recent change.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PaintSection;