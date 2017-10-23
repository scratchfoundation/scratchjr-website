import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';

import './donate.scss';

const Donate = () => (
    <div>
        <NavBar selected="donate" />
        <div id="content">
            <div className="content-section">

                <h1>Donate</h1>

                <p>
                    If you enjoy using the free ScratchJr app, please consider
                    making a donation to the Scratch Foundation (
                    <a href="//www.scratchfoundation.org/">www.scratchfoundation.org</a>),
                    a nonprofit organization that provides ongoing support for ScratchJr.
                    We appreciate donations of all sizes, large and small.
                </p>

                <div className="donation-block">
                    <a
                        href="https://secure.donationpay.org/scratchfoundation/"
                        id="donate-button"
                    >
                        <div className="blue-button">
                            Donate
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

render(
    <Donate />,
    document.getElementById('app'));
