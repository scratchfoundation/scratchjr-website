import React from 'react';
import GuideButton from '../../components/guidebutton/guidebutton.jsx';
import GuideButtonLine from '../../components/guidebutton/guidebuttonline.jsx';
import GuideKey from '../../components/guidekey/guidekey.jsx';
import TxSpan from '../../components/transifex/txspan.jsx';

import paintKey from './paint.json';
import './paint.scss';

export default class PaintSection extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            // default to first key item
            currentIndex: 0
        };
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler (i) {
        this.setState({currentIndex: i});
    }
    render () {
        return (
            <div
                className="content-section learn-paint"
                id="paint-section"
            >
                <TxSpan
                    className="download-guide-link"
                    txContent="translate_urls block"
                >
                    <a
                        href="/pdfs/paint-editor-guide.pdf"
                    >
                        <span className="download-icon">&#x2193;</span>Download guide as pdf
                    </a>
                </TxSpan>
                <div className="paint-container">
                    <img
                        className="ipad-project-view"
                        src="/images/learnpaint.png"
                    />
                    {/* 1. Undo */}
                    <GuideButton
                        name="paint-button-undo"
                        index={0}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 0}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-undo"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-dot-undo"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 2. Redo */}
                    <GuideButton
                        name="paint-button-redo"
                        index={1}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 1}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-redo"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-dot-redo"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 3. Select Shape */}
                    <GuideButton
                        name="paint-button-select-shape"
                        index={2}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 2}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-select-shape-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-vertical-line-select-shape-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-select-shape-1"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-select-shape-2"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-select-shape-3"
                            type="horizontal"
                        />
                    </GuideButton>
                    {/* 4. Character Name */}
                    <GuideButton
                        name="paint-button-character-name"
                        index={3}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 3}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-character-name"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-dot-character-name"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 5. Cut */}
                    <GuideButton
                        name="paint-button-cut"
                        index={4}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 4}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-cut"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-cut"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-dot-cut"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 6. Duplicate */}
                    <GuideButton
                        name="paint-button-duplicate"
                        index={5}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 5}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-duplicate"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-duplicate"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-dot-duplicate"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 7. Rotate */}
                    <GuideButton
                        name="paint-button-rotate"
                        index={6}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 6}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-rotate"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-rotate"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-dot-rotate"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 8. Drag */}
                    <GuideButton
                        name="paint-button-drag"
                        index={7}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 7}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-drag"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-drag"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-dot-drag"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 9. Save */}
                    <GuideButton
                        name="paint-button-save"
                        index={8}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 8}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-save"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-dot-save"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 10. Fill */}
                    <GuideButton
                        name="paint-button-fill"
                        index={9}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 9}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-fill"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-fill"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-dot-fill"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 11. Camera */}
                    <GuideButton
                        name="paint-button-camera"
                        index={10}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 10}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-camera"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-camera"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-dot-camera"
                            type="dot"
                        />
                    </GuideButton>
                    {/* 12. Select Color */}
                    <GuideButton
                        name="paint-button-select-color"
                        index={11}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 11}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-select-color-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-vertical-line-select-color-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-vertical-line-select-color-3"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-select-color-1"
                            type="horizontal"
                        />
                    </GuideButton>
                    {/* 13. Select Line Size */}
                    <GuideButton
                        name="paint-button-select-line-size"
                        index={12}
                        clickHandler={this.changeHandler}
                        selected={this.state.currentIndex === 12}
                    >
                        <GuideButtonLine
                            id="paint-vertical-line-select-line-size-1"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-vertical-line-select-line-size-2"
                            type="vertical"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-select-line-size-1"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-select-line-size-2"
                            type="horizontal"
                        />
                        <GuideButtonLine
                            id="paint-horizontal-line-select-line-size-3"
                            type="horizontal"
                        />
                    </GuideButton>
                    <div id="right-column">
                        <GuideKey
                            id={this.state.currentIndex + 1}
                            {...paintKey[this.state.currentIndex]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
