import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';

import './privacy.scss';

const Privacy = () => (
    <div>
        <NavBar />
        <div id="content">
            <h1>Privacy Policy</h1>
            <p>
                We understand how important privacy is to our community,
                especially children and their parents. We wrote this privacy
                policy to explain what information we collect through the
                Scratch Jr. mobile application (the &quot;App&quot;), how we use
                it, and what we&apos;re doing to keep it safe. If you have any
                questions regarding this privacy policy, you can{' '}
                <a href="mailto:info@scratchjr.org">contact us</a>.
            </p>
            <h2>What information does ScratchJr collect?</h2>
            <p>
                The Scratch Team is always looking to better understand how
                Scratch is used around the world. To help support this effort,
                Scratch only collects anonymous usage information from the
                ScratchJr app. This information does not include any Personal
                Information. For purposes of this Privacy Policy, “Personal
                Information” means any information relating to an identified or
                identifiable individual.
            </p>
            <p>
                The anonymous usage information we collect includes data about
                what parts of the app you use and basic information about your
                network that allows us to roughly estimate what part of the
                world you are located in. We also collect general information
                about the device that you are using ScratchJr with, such as
                make, model, operating system and screen resolution. We do not
                collect device identifiers, such as advertising IDs, MAC
                addresses, or IP addresses. We may also ask you what type of
                location you are using ScratchJr in (e.g. School, Home, etc.).
                We do not associate any of this information with an identified
                or identifiable individual.
            </p>
            <h2>How does the ScratchJr Team use the information it collects?</h2>
            <ul>
                <li>
                    We may use anonymous usage information in research studies
                    intended to improve our understanding of how people learn
                    with ScratchJr. The results of this research are shared with
                    educators and researchers through conferences, journals, and
                    other publications.
                </li>
                <li>
                    We analyze the information to understand and improve
                    ScratchJr, such as determining which characters are most
                    used and how long users spend in the app.
                </li>
                <li>
                    We will never share anonymous usage data with any other
                    person, company, or organization, except:
                    <ul>
                        <li>
                            As required to comply with our obligations under the
                            law
                        </li>
                        <li>
                            For technical reasons, if we are required to
                            transfer the data on our servers to another location
                            or organization
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <Footer />
    </div>
);

render(
    <Privacy />,
    document.getElementById('app')
);
