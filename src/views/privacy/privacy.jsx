import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';

import './privacy.scss';

export default class Privacy extends React.Component {
    render () {
        return (
            <div>
                <NavBar/>
                <div id='content'>
                    <h1>Privacy Policy</h1>
                    <p>
                        We created ScratchJr so that children can create their own
                        interactive stories and games. We understand how important
                        privacy is to our community, especially children and their
                        parents. We wrote this privacy policy to explain what
                        information we collect, how we use it, and what we're doing
                        to keep it safe. If you have any questions regarding this
                        privacy policy, you can <a href='mailto:info@scratchjr.org'>
                        contact us</a>.
                    </p>
                    <h2>What information does ScratchJr collect?</h2>
                    <p>
                        We collect some data on where you click and which parts of
                        the app you use. This 'click data' (collected through a
                        tool called Google Analytics) helps us figure out ways
                        to improve the app. We also collect information about
                        your geographic location (using IP address and network
                        location) to help us understand where ScratchJr is being used.
                    </p>
                    <p>
                        Although it uses Google Analytics, ScratchJr does not
                        share any information it collects with Google, and Google
                        does not collect any personal identifying information about you.
                    </p>
                    <p>
                        Google Analytics acquires information by installing a 'cookie'
                         on your device. Cookies are small bits of information that
                         are stored on your device, without any personally
                         identifiable information.
                    </p>
                    <h2>How does the ScratchJr Team use the information it collects?</h2>
                    <ul>
                        <li>
                            We may use the information in research studies intended
                            to improve our understanding of how people learn with
                            ScratchJr. The results of this research are shared
                            with educators and researchers through conferences,
                            journals, and other publications.
                        </li>
                        <li>
                            We analyze the information to understand and improve
                            ScratchJr, such as determining which sample projects
                            are most popular, which characters are most used,
                            and how long users spend in the app.
                        </li>
                        <li>
                            We may disclose some of the information to third-party
                            service providers that help us perform various support
                            functions (such as usage analytics). We are satisfied
                            that these service providers have privacy policies that
                            restrict them from further disclosing any of your information.
                        </li>
                        <li>
                            Other than the cases described above, we will never
                            share personally identifiable information about you
                            with any other person, company, or organization, except:
                            <ul>
                                <li>
                                    As required to comply with our obligations under the law.
                                </li>
                                <li>
                                    For technical reasons, if we are required to
                                    transfer the data on our servers to another
                                    location or organization.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
        );
    }
}

render(
    <Privacy/>,
    document.getElementById('app')
);
