import React from 'react';
import GuideButton from '../../components/guidebutton/guidebutton.jsx';
import GuideButtonLine from '../../components/guidebutton/guidebuttonline.jsx';
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
                <a href="/pdfs/paint-editor-guide.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
                <div className="paint-container">
                    <img className="ipad-project-view" src="/images/learnpaint.png" />
                    {/* 1. Undo */}
                    <GuideButton
                        name='paint-button-undo'
                        index={0}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 0}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-undo' />
                        <GuideButtonLine type='dot' id='paint-dot-undo' />
                    </GuideButton>
                    {/* 2. Redo */}
                    <GuideButton
                        name='paint-button-redo'
                        index={1}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 1}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-redo' />
                        <GuideButtonLine type='dot' id='paint-dot-redo' />
                    </GuideButton>
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
                        selected={this.state.currentIndex == 2}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-select-shape-1' />
                        <GuideButtonLine type='vertical' id='paint-vertical-line-select-shape-2' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-select-shape-1' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-select-shape-2' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-select-shape-3' />
                    </GuideButton>
                    {/* 4. Character Name */}
                    <GuideButton
                        name='paint-button-character-name'
                        index={3}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 3}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-character-name' />
                        <GuideButtonLine type='dot' id='paint-dot-character-name' />
                    </GuideButton>
                    {/* 5. Cut */}
                    <GuideButton
                        name='paint-button-cut'
                        index={4}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 4}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-cut' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-cut' />
                        <GuideButtonLine type='dot' id='paint-dot-cut' />
                    </GuideButton>
                    {/* 6. Duplicate */}
                    <GuideButton
                        name='paint-button-duplicate'
                        index={5}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 5}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-duplicate' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-duplicate' />
                        <GuideButtonLine type='dot' id='paint-dot-duplicate' />
                    </GuideButton>
                    {/* 7. Rotate */}
                    <GuideButton
                        name='paint-button-rotate'
                        index={6}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 6}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-rotate' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-rotate' />
                        <GuideButtonLine type='dot' id='paint-dot-rotate' />
                    </GuideButton>
                    {/* 8. Drag */}
                    <GuideButton
                        name='paint-button-drag'
                        index={7}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 7}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-drag' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-drag' />
                        <GuideButtonLine type='dot' id='paint-dot-drag' />
                    </GuideButton>
                    {/* 9. Save */}
                    <GuideButton
                        name='paint-button-save'
                        index={8}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 8}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-save' />
                        <GuideButtonLine type='dot' id='paint-dot-save' />
                    </GuideButton>
                    {/* 10. Fill */}
                    <GuideButton
                        name='paint-button-fill'
                        index={9}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 9}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-fill' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-fill' />
                        <GuideButtonLine type='dot' id='paint-dot-fill' />
                    </GuideButton>
                    {/* 11. Camera */}
                    <GuideButton
                        name='paint-button-camera'
                        index={10}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 10}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-camera' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-camera' />
                        <GuideButtonLine type='dot' id='paint-dot-camera' />
                    </GuideButton>
                    {/* 12. Select Color */}
                    <GuideButton
                        name='paint-button-select-color'
                        index={11}
                        clickHandler={this.changeHandler.bind(this)}
                        selected={this.state.currentIndex == 11}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-select-color-1' />
                        <GuideButtonLine type='vertical' id='paint-vertical-line-select-color-2' />
                        <GuideButtonLine type='vertical' id='paint-vertical-line-select-color-3' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-select-color-1' />
                    </GuideButton>
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
                        selected={this.state.currentIndex == 12}>
                        <GuideButtonLine type='vertical' id='paint-vertical-line-select-line-size-1' />
                        <GuideButtonLine type='vertical' id='paint-vertical-line-select-line-size-2' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-select-line-size-1' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-select-line-size-2' />
                        <GuideButtonLine type='horizontal' id='paint-horizontal-line-select-line-size-3' />
                    </GuideButton>
                    <div id="right-column">
                        <GuideKey id={this.state.currentIndex + 1} {...paintKey[this.state.currentIndex]} />
                    </div>
                </div>
            </div>
        );
    }
}
