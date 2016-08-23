import React from 'react';
import GuideButton from '../../components/guidebutton/guidebutton.jsx';
import GuideKey from '../../components/guidekey/guidekey.jsx';

import interfaceKey from './interface.json';

export default class InterfaceSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // default to first key item
            currentIndex: 0
        };
    }
    changeHandler (i) {
        this.setState({currentIndex: i});
    }
    render () {
        return (
            <div
                className="content-section learn-interface" id="interface-section">
                <a href="/pdfs/scratchjr-interface-guide.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
                <div className="interface-container">
                    {/* 1. Save */}
                    <GuideButton
                        name='interface-button-save'
                        index={0}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 0}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-save"></div>
                    <div className="interface-dot" id="interface-dot-save"></div>
                    {/* 2. Stage */}
                    <GuideButton
                        name='interface-button-stage'
                        index={1}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 1}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-stage-1"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-stage-1"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-stage-2"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-stage-2"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-stage-3"></div>
                    {/* 3. Presentation Mode */}
                    <GuideButton
                        name='interface-button-presentation-mode'
                        index={2}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 2}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-presentation-mode"></div>
                    <div className="interface-dot" id="interface-dot-presentation-mode"></div>
                    {/* 4. Grid */}
                    <GuideButton
                        name='interface-button-grid'
                        index={3}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 3}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-grid"></div>
                    <div className="interface-dot" id="interface-dot-grid"></div>
                    {/* 5. Change Background */}
                    <GuideButton
                        name='interface-button-add-text'
                        index={4}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 4}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-add-text"></div>
                    <div className="interface-dot" id="interface-dot-add-text"></div>
                    {/* 6. Add Text */}
                    <GuideButton
                        name='interface-button-change-background'
                        index={5}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 5}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-change-background"></div>
                    <div className="interface-dot" id="interface-dot-change-background"></div>
                    {/* 7. Reset Characters */}
                    <GuideButton
                        name='interface-button-reset-characters'
                        index={6}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 6}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-reset-characters"></div>
                    <div className="interface-dot" id="interface-dot-reset-characters"></div>
                    {/* 8. Green Flag */}
                    <GuideButton
                        name='interface-button-green-flag'
                        index={7}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 7}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-green-flag"></div>
                    <div className="interface-dot" id="interface-dot-green-flag"></div>
                    {/* 9. Pages */}
                    <GuideButton
                        name='interface-button-pages'
                        index={8}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 8}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-pages"></div>
                    <div className="interface-dot" id="interface-dot-pages"></div>
                    {/* 10. Project Information */}
                    <GuideButton
                        name='interface-button-project-information'
                        index={9}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 9}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-project-information"></div>
                    <div className="interface-dot" id="interface-dot-project-information"></div>
                    {/* 16. Characters */}
                    <GuideButton
                        name='interface-button-characters'
                        index={15}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 15}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-characters-1"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-characters-3"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-characters"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-characters-2"></div>
                    {/* 15. Block Categories */}
                    <GuideButton
                        name='interface-button-block-categories'
                        index={14}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 14}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-block-categories-1"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-block-categories"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-block-categories-2"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-block-categories-3"></div>
                    {/* 14. Blocks Palette */}
                    <GuideButton
                        name='interface-button-block-palette'
                        index={13}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 13}
                    />
                    <div className="interface-horizontal-line" id="interface-horizontal-line-blocks-palette"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-1"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-2"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-3"></div>
                    {/* 13. Programming Area */}
                    <GuideButton
                        name='interface-button-programming-area'
                        index={12}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 12}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-programming-area"></div>
                    <div className="interface-dot" id="interface-dot-programming-area"></div>
                    {/* 12. Programming Script */}
                    <GuideButton
                        name='interface-button-programming-script'
                        index={11}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 11}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-programming-script-1"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-programming-script"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-programming-script-2"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-programming-script-3"></div>
                    {/* 11. Undo Redo */}
                    <GuideButton
                        name='interface-button-undo-redo'
                        index={10}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 10}
                    />
                    <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-1"></div>
                    <div className="interface-horizontal-line" id="interface-horizontal-line-undo-redo"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-2"></div>
                    <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-3"></div>
                    <img className="ipad-project-view" src="/images/learninterface.png" />
                    <div id="right-column">
                        <GuideKey id={this.state.currentIndex + 1} {...interfaceKey[this.state.currentIndex]} />
                    </div>
                </div>
            </div>
        );
    }
}
