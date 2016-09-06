import React from 'react';
import GuideButton from '../../components/guidebutton/guidebutton.jsx';
import GuideButtonLine from '../../components/guidebutton/guidebuttonline.jsx';
import GuideKey from '../../components/guidekey/guidekey.jsx';

import interfaceKey from './interface.json';
import './interface.scss';

export default class InterfaceSection extends React.Component {
    constructor (props) {
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
                <a
                    href="/pdfs/scratchjr-interface-guide.pdf"
                    className="download-guide-link">
                    <span className="download-icon">&#x2193;</span>Download guide as pdf
                </a>
                <div className="interface-container">
                    <img className="ipad-project-view" src="/images/learninterface.png" />
                    {/* 1. Save */}
                    <GuideButton
                        name="interface-button-save"
                        index={0}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 0} >
                        <GuideButtonLine type="vertical" id="interface-vertical-line-save" />
                        <GuideButtonLine type="dot" id="interface-dot-save" />
                    </GuideButton>
                    {/* 2. Stage */}
                    <GuideButton
                        name="interface-button-stage"
                        index={1}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 1} >
                        <GuideButtonLine type="vertical" id="interface-vertical-line-stage-1" />
                        <GuideButtonLine type="horizontal" id="interface-horizontal-line-stage-1" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-stage-2" />
                        <GuideButtonLine type="horizontal" id="interface-horizontal-line-stage-2" />
                        <GuideButtonLine type="horizontal" id="interface-horizontal-line-stage-3" />
                    </GuideButton>
                    {/* 3. Presentation Mode */}
                    <GuideButton
                        name="interface-button-presentation-mode"
                        index={2}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 2} >
                        <GuideButtonLine type="vertical" id="interface-vertical-line-presentation-mode" />
                        <GuideButtonLine type="dot" id="interface-dot-presentation-mode" />
                    </GuideButton>
                    <div className="" id=""></div>
                    <div className="" id=""></div>
                    {/* 4. Grid */}
                    <GuideButton
                        name="interface-button-grid"
                        index={3}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 3} >
                        <GuideButtonLine type="vertical" id="interface-vertical-line-grid" />
                        <GuideButtonLine type="dot" id="interface-dot-grid" />
                    </GuideButton>
                    {/* 5. Change Background */}
                    <GuideButton
                        name="interface-button-add-text"
                        index={4}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 4} >
                        <GuideButtonLine type="vertical" id="interface-vertical-line-add-text" />
                        <GuideButtonLine type="dot" id="interface-dot-add-text" />
                    </GuideButton>
                    {/* 6. Add Text */}
                    <GuideButton
                        name="interface-button-change-background"
                        index={5}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 5}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-change-background" />
                        <GuideButtonLine type="dot" id="interface-dot-change-background" />
                    </GuideButton>
                    {/* 7. Reset Characters */}
                    <GuideButton
                        name="interface-button-reset-characters"
                        index={6}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 6}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-reset-characters" />
                        <GuideButtonLine type="dot" id="interface-dot-reset-characters" />
                    </GuideButton>
                    {/* 8. Green Flag */}
                    <GuideButton
                        name="interface-button-green-flag"
                        index={7}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 7}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-green-flag" />
                        <GuideButtonLine type="dot" id="interface-dot-green-flag" />
                    </GuideButton>
                    {/* 9. Pages */}
                    <GuideButton
                        name="interface-button-pages"
                        index={8}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 8}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-pages" />
                        <GuideButtonLine type="dot" id="interface-dot-pages" />
                    </GuideButton>
                    {/* 10. Project Information */}
                    <GuideButton
                        name="interface-button-project-information"
                        index={9}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 9}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-project-information" />
                        <GuideButtonLine type="dot" id="interface-dot-project-information" />
                    </GuideButton>
                    {/* 11. Undo Redo */}
                    <GuideButton
                        name="interface-button-undo-redo"
                        index={10}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 10}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-undo-redo-1" />
                        <GuideButtonLine type="horizontal" id="interface-horizontal-line-undo-redo" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-undo-redo-2" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-undo-redo-3" />
                    </GuideButton>
                    {/* 12. Programming Script */}
                    <GuideButton
                        name="interface-button-programming-script"
                        index={11}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 11} >
                        <GuideButtonLine type="vertical" id="interface-vertical-line-programming-script-1" />
                        <GuideButtonLine type="horizontal" id="interface-horizontal-line-programming-script" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-programming-script-2" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-programming-script-3" />
                    </GuideButton>
                    {/* 13. Programming Area */}
                    <GuideButton
                        name="interface-button-programming-area"
                        index={12}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 12}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-programming-area" />
                        <GuideButtonLine type="dot" id="interface-dot-programming-area" />
                    </GuideButton>
                    {/* 14. Blocks Palette */}
                    <GuideButton
                        name="interface-button-block-palette"
                        index={13}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 13}>
                        <GuideButtonLine type="horizontal" id="interface-horizontal-line-blocks-palette" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-blocks-palette-1" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-blocks-palette-2" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-blocks-palette-3" />
                    </GuideButton>
                    {/* 15. Block Categories */}
                    <GuideButton
                        name="interface-button-block-categories"
                        index={14}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 14}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-block-categories-1" />
                        <GuideButtonLine type="horizontal" id="interface-horizontal-line-block-categories" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-block-categories-2" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-block-categories-3" />
                    </GuideButton>
                    {/* 16. Characters */}
                    <GuideButton
                        name="interface-button-characters"
                        index={15}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 15}>
                        <GuideButtonLine type="vertical" id="interface-vertical-line-characters-1" />
                        <GuideButtonLine type="horizontal" id="interface-horizontal-line-characters" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-characters-2" />
                        <GuideButtonLine type="vertical" id="interface-vertical-line-characters-3" />
                    </GuideButton>
                    <div id="right-column">
                        <GuideKey id={this.state.currentIndex + 1} {...interfaceKey[this.state.currentIndex]} />
                    </div>
                </div>
            </div>
        );
    }
}
