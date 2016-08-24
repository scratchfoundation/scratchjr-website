import React from 'react';
import GuideButton from '../../components/guidebutton/guidebutton.jsx';
import GuideKey from '../../components/guidekey/guidekey.jsx';

import paintKey from './paint.json';
import './paint.scss';

export default class PaintSection extends React.Component {
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
            <div className="content-section learn-paint" id="paint-section">
                <a href="/pdfs/paint_editor_guide.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
                <div className="paint-container">
                    <img className="ipad-project-view" src="/images/learnpaint.png" />
                    {/* 1. Undo */}
                    <GuideButton
                        name='paint-button-undo'
                        index={0}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-undo"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-undo"}
                        ]}
                        selected={this.state.currentIndex == 0}
                    />
                    {/* 2. Redo */}
                    <GuideButton
                        name='paint-button-redo'
                        index={1}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-redo"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-redo"}
                        ]}
                        selected={this.state.currentIndex == 1}
                    />
                    {/* 3. Select Shape */}
                    <GuideButton
                        name='paint-button-select-shape'
                        index={2}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-select-shape-1"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-select-shape-1"},
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-select-shape-2"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-select-shape-2"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-select-shape-3"}
                        ]}
                        selected={this.state.currentIndex == 2}
                    />
                    {/* 4. Character Name */}
                    <GuideButton
                        name='paint-button-character-name'
                        index={3}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-character-name"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-character-name"}
                        ]}
                        selected={this.state.currentIndex == 3}
                    />
                    {/* 5. Cut */}
                    <GuideButton
                        name='paint-button-cut'
                        index={4}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-cut"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-cut"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-cut"}
                        ]}
                        selected={this.state.currentIndex == 4}
                    />
                    {/* 6. Duplicate */}
                    <GuideButton
                        name='paint-button-duplicate'
                        index={5}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-duplicate"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-duplicate"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-duplicate"}
                        ]}
                        selected={this.state.currentIndex == 5}
                    />
                    {/* 7. Rotate */}
                    <GuideButton
                        name='paint-button-rotate'
                        index={6}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-rotate"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-rotate"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-rotate"}
                        ]}
                        selected={this.state.currentIndex == 6}
                    />
                    {/* 8. Drag */}
                    <GuideButton
                        name='paint-button-drag'
                        index={7}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-drag"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-drag"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-drag"}
                        ]}
                        selected={this.state.currentIndex == 7}
                    />
                    {/* 9. Save */}
                    <GuideButton
                        name='paint-button-save'
                        index={8}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-save"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-save"}
                        ]}
                        selected={this.state.currentIndex == 8}
                    />
                    {/* 10. Fill */}
                    <GuideButton
                        name='paint-button-fill'
                        index={9}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-fill"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-fill"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-fill"}
                        ]}
                        selected={this.state.currentIndex == 9}
                    />
                    {/* 11. Camera */}
                    <GuideButton
                        name='paint-button-camera'
                        index={10}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-camera"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-camera"},
                            {"lineClass":"guide-dot", "lineId": "paint-dot-camera"}
                        ]}
                        selected={this.state.currentIndex == 10}
                    />
                    {/* 12. Select Color */}
                    <GuideButton
                        name='paint-button-select-color'
                        index={11}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-select-color-1"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-select-color-1"},
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-select-color-2"},
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-select-color-3"}
                        ]}
                        selected={this.state.currentIndex == 11}
                    />
                    {/* 13. Select Line Size */}
                    <GuideButton
                        name='paint-button-select-line-size'
                        index={12}
                        clickHandler={this.changeHandler.bind(this)}
                        lines={[
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-select-line-size-1"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-select-line-size-1"},
                            {"lineClass":"guide-vertical-line", "lineId": "paint-vertical-line-select-line-size-2"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-select-line-size-2"},
                            {"lineClass":"guide-horizontal-line", "lineId": "paint-horizontal-line-select-line-size-3"}
                        ]}
                        selected={this.state.currentIndex == 12}
                    />
                    <div id="right-column">
                        <GuideKey id={this.state.currentIndex + 1} {...paintKey[this.state.currentIndex]} />
                    </div>
                </div>
            </div>
        );
    }
}
