import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';

import './support.scss';

const Support = () => (
    <div>
        <NavBar selected="donate" />
        <div id="content">
            <div className="content-section">
                <h1>Donation Page Coming Soon</h1>

                <p>
                    We&apos;re setting up our donation page right now, and it will be linked
                    here shortly. Thank you for your patience!
                </p>

                <p>
                    In the meantime, if you&apos;d like to support ScratchJr and the DevTech
                    Research Group, please email us at{' '}
                    <a href="mailto:devtechresearch@bc.edu">devtechresearch@bc.edu</a>{' '}
                    to let us know you&apos;re interested. We&apos;ll reach back out as soon as
                    the donation page is ready.
                </p>

                <p>
                    Thank you for supporting our work!
                </p>
            </div>
        </div>
        <Footer />
    </div>
);

render(<Support />, document.getElementById('app'));
