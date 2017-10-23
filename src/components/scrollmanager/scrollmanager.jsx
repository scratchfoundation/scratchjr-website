import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import debounceFn from 'lodash.debounce';

class ScrollManager extends React.Component {

    constructor (props) {
        super(props);

        this.scrollSyncData = {
            x: 0,
            y: 0,
            attemptsRemaining: props.scrollSyncAttemptLimit
        };

        const scrollCapture = () => {
            requestAnimationFrame(() => {
                const {pageXOffset: x, pageYOffset: y} = window;
                let {pathname} = this.props.location;
                
                // router location does not include basename, since this function is setting
                // window.location later, pathname needs basename prepended
                if (typeof (this.props.basename) === 'string') {
                    pathname = this.props.basename + pathname;
                }

                // use browser history instead of router history to avoid infinite
                // history.replace loop
                const historyState = window.history.state || {};
                const {
                    state = {}
                } = historyState;
                if (!state.scroll || state.scroll.x !== pageXOffset || state.scroll.y !== pageYOffset) {
                    window.history.replaceState({
                        ...historyState,
                        state: {
                            ...state,
                            scroll: {x, y}
                        }
                    }, null, pathname);
                }
            });
        };

        const _scrollSync = () => {
            requestAnimationFrame(() => {
                const {x, y, attemptsRemaining} = this.scrollSyncData;

                if (attemptsRemaining < 1) {
                    return;
                }

                const {pageXOffset, pageYOffset} = window;
                if (y < window.document.body.scrollHeight && (x !== pageXOffset || y !== pageYOffset)) {
                    window.scrollTo(x, y);
                    this.scrollSyncData.attemptsRemaining = attemptsRemaining - 1;
                    _scrollSync();
                }
            });
        };

        const scrollSync = (x = 0, y = 0) => {
            this.scrollSyncData = {
                x,
                y,
                attemptsRemaining: this.props.scrollSyncAttemptLimit
            };
            _scrollSync();
        };

        this.debouncedScroll = debounceFn(scrollCapture, props.scrollCaptureDebounce);
        this.debouncedScrollSync = debounceFn(scrollSync, props.scrollSyncDebounce);
    }

    componentWillMount () {
        const {location, onLocationChange} = this.props;
        if (onLocationChange) {
            onLocationChange(location);
        }
    }

    componentDidMount () {
        this.onPop(this.props);
        window.addEventListener('scroll', this.debouncedScroll, {passive: true});
    }

    componentWillReceiveProps (nextProps) {
        switch (nextProps.history.action) {
        case 'PUSH':
        case 'REPLACE':
            this.onPush(nextProps);
            break;
        case 'POP':
            this.onPop(nextProps);
            break;
        default:
            console.warn( // eslint-disable-line no-console
                `Unrecognized location change action! "${nextProps.history.action}"`
            );
        }
        if (nextProps.onLocationChange) {
            nextProps.onLocationChange(nextProps.location);
        }
    }
    
    componentWillUnmount () {
        this.scrollSyncPending = false;
        window.removeEventListener('scroll', this.debouncedScroll, {passive: true});
    }

    onPush ({location}) {
        if (!location.hash) {
            this.debouncedScrollSync(0, 0);
        }
    }

    onPop ({
        location: {
            state = {}
        }
    }) {
        // attempt location restore
        const {
            x = 0,
            y = 0
        } = state.scroll || {};
        this.debouncedScrollSync(x, y);
    }

    render () {
        return this.props.children;
    }
}
ScrollManager.propTypes = {
    basename: PropTypes.string,
    children: PropTypes.node.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location,
    onLocationChange: PropTypes.func,
    scrollCaptureDebounce: PropTypes.number,
    scrollSyncAttemptLimit: PropTypes.number,
    scrollSyncDebounce: PropTypes.number
};
ScrollManager.defaultProps = {
    scrollCaptureDebounce: 50,
    scrollSyncDebounce: 100,
    scrollSyncAttemptLimit: 5
};
export default withRouter(ScrollManager);
