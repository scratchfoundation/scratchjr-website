import React from 'react';
import GuideButton from '../../components/guidebutton/guidebutton.jsx';
import GuideKey from '../../components/guidekey/guidekey.jsx';

import interfaceKey from './interface.json';
import './interface.scss';

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
                    <img className="ipad-project-view" src="/images/learninterface.png" />
                    {/* 1. Save */}
                    <GuideButton
                        name='interface-button-save'
                        index={0}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-save"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-save"}
                        ]}
                        selected={this.state.currentIndex == 0}
                    />
                    {/* 2. Stage */}
                    <GuideButton
                        name='interface-button-stage'
                        index={1}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-stage-1"},
                            {"lineClass": "guide-horizontal-line", "lineId": "interface-horizontal-line-stage-1"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-stage-2"},
                            {"lineClass": "guide-horizontal-line", "lineId": "interface-horizontal-line-stage-2"},
                            {"lineClass": "guide-horizontal-line", "lineId": "interface-horizontal-line-stage-3"}
                        ]}
                        selected={this.state.currentIndex == 1}
                    />
                    {/* 3. Presentation Mode */}
                    <GuideButton
                        name='interface-button-presentation-mode'
                        index={2}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-presentation-mode"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-presentation-mode"}
                        ]}
                        selected={this.state.currentIndex == 2}
                    />
                    <div className="" id=""></div>
                    <div className="" id=""></div>
                    {/* 4. Grid */}
                    <GuideButton
                        name='interface-button-grid'
                        index={3}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-grid"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-grid"}
                        ]}
                        selected={this.state.currentIndex == 3}
                    />
                    {/* 5. Change Background */}
                    <GuideButton
                        name='interface-button-add-text'
                        index={4}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-add-text"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-add-text"}
                        ]}
                        selected={this.state.currentIndex == 4}
                    />
                    {/* 6. Add Text */}
                    <GuideButton
                        name='interface-button-change-background'
                        index={5}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-change-background"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-change-background"}
                        ]}
                        selected={this.state.currentIndex == 5}
                    />
                    {/* 7. Reset Characters */}
                    <GuideButton
                        name='interface-button-reset-characters'
                        index={6}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-reset-characters"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-reset-characters"}
                        ]}
                        selected={this.state.currentIndex == 6}
                    />
                    {/* 8. Green Flag */}
                    <GuideButton
                        name='interface-button-green-flag'
                        index={7}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-green-flag"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-green-flag"}
                        ]}
                        selected={this.state.currentIndex == 7}
                    />
                    {/* 9. Pages */}
                    <GuideButton
                        name='interface-button-pages'
                        index={8}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-pages"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-pages"}
                        ]}
                        selected={this.state.currentIndex == 8}
                    />
                    {/* 10. Project Information */}
                    <GuideButton
                        name='interface-button-project-information'
                        index={9}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-project-information"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-project-information"}
                        ]}
                        selected={this.state.currentIndex == 9}
                    />
                    {/* 16. Characters */}
                    <GuideButton
                        name='interface-button-characters'
                        index={15}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-characters-1"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-characters-3"},
                            {"lineClass": "guide-horizontal-line", "lineId": "interface-horizontal-line-characters"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-characters-2"}
                        ]}
                        selected={this.state.currentIndex == 15}
                    />
                    {/* 15. Block Categories */}
                    <GuideButton
                        name='interface-button-block-categories'
                        index={14}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-block-categories-1"},
                            {"lineClass": "guide-horizontal-line", "lineId": "interface-horizontal-line-block-categories"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-block-categories-2"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-block-categories-3"}
                        ]}
                        selected={this.state.currentIndex == 14}
                    />
                    {/* 14. Blocks Palette */}
                    <GuideButton
                        name='interface-button-block-palette'
                        index={13}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-horizontal-line", "lineId": "interface-horizontal-line-blocks-palette"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-blocks-palette-1"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-blocks-palette-2"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-blocks-palette-3"}
                        ]}
                        selected={this.state.currentIndex == 13}
                    />
                    {/* 13. Programming Area */}
                    <GuideButton
                        name='interface-button-programming-area'
                        index={12}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-programming-area"},
                            {"lineClass": "guide-dot", "lineId": "interface-dot-programming-area"}
                        ]}
                        selected={this.state.currentIndex == 12}
                    />
                    {/* 12. Programming Script */}
                    <GuideButton
                        name='interface-button-programming-script'
                        index={11}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-programming-script-1"},
                            {"lineClass": "guide-horizontal-line", "lineId": "interface-horizontal-line-programming-script"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-programming-script-2"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-programming-script-3"}
                        ]}
                        selected={this.state.currentIndex == 11}
                    />
                    {/* 11. Undo Redo */}
                    <GuideButton
                        name='interface-button-undo-redo'
                        index={10}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-undo-redo-1"},
                            {"lineClass": "guide-horizontal-line", "lineId": "interface-horizontal-line-undo-redo"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-undo-redo-2"},
                            {"lineClass": "guide-vertical-line", "lineId": "interface-vertical-line-undo-redo-3"}
                        ]}
                        selected={this.state.currentIndex == 10}
                    />
                    <div id="right-column">
                        <GuideKey id={this.state.currentIndex + 1} {...interfaceKey[this.state.currentIndex]} />
                    </div>
                </div>
            </div>
        );
    }
}
