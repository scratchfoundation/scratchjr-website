import React from 'react';
import './footer.scss';

export default class Footer extends React.Component {
    render () {
        return (
            <div id="footer">
                <span id="footer-text">
                    <strong>ScratchJr</strong> is a collaboration between the
                    DevTech Research Group at Tufts University, the Lifelong
                    Kindergarten Group at the MIT Media Lab, and the Playful
                    Invention Company.
                </span>
                <div id="footer-social">
                    <div id="social-links">
                        <a
                            className="social-link sjr-icon-twitter"
                            href="https://twitter.com/ScratchJr"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Follow us on Twitter"
                        >
                            <span>Twitter</span>
                        </a>
                        <a
                            className="social-link sjr-icon-facebook"
                            href="https://www.facebook.com/scratchjr"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Like us on Facebook"
                        >
                            <span>Facebook</span>
                        </a>
                    </div>
                    <div id="footer-nav">
                        <a
                            href="https://docs.google.com/forms/d/1wBrCl5Dy4-5AAzcmkQigKplKpv37M0O8YQPKo0FjUpo/viewform?usp=send_form"
                        >
                            <div className="blue-button">
                                Join Mailing List
                            </div>
                        </a>
                        &nbsp;
                        <a href="mailto:info@scratchjr.org">
                            <div className="blue-button">
                                Contact Us
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
        );
    }
}
