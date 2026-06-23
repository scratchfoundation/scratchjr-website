/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import './info.scss';

const InfoSection = () => (
    <div className="content-section" id="info-section">
        <div className="content-section-title">About ScratchJr</div>
        <div className="content-section-description">
            This is background information about ScratchJr. You can find answers to troubleshooting
            questions in the 'FAQ' section.
        </div>

        <div id="video-wrapper">
            <iframe
                src="//player.vimeo.com/video/101760650?portrait=0&byline=0&title=0"
                width="640"
                height="360"
                frameBorder="0"
                allowFullScreen
            />
        </div>

        <div id="content-description">

            <div className="content-description-section">
                 <div className="content-description-answer">{''}</div>
                <div className="content-description-question">What is ScratchJr?</div>
                <div className="content-description-answer">
                    ScratchJr is an introductory programming language that enables young children
                    (ages 5-7) to create their own interactive stories and games. Children snap
                    together graphical programming blocks to make characters move, jump, dance, and
                    sing. Children can modify characters in the paint editor, add their own voices
                    and sounds, even insert photos of themselves -- then use the programming blocks
                    to make their characters come to life.
                </div>
                <div className="content-description-answer">
                    ScratchJr was launched in 2014, inspired by the popular{' '}
                    <a href="https://scratch.mit.edu">Scratch programming language</a>
                    {', '}used by millions of young people (ages 8 and up) around the world.
                    ScratchJr is designed, based on evidence from over {' '}
    <a href="scratchjr.org/research">20 years of research</a> {' '} at the
                    DevTech Research Group, to be developmentally appropriate for young children's
                    cognitive, personal, social and emotional growth.
                </div>
                <div className="content-description-answer">
                    ScratchJr is available as a free app for iPads, Android tablets, and
                    Chromebooks. For more information about ScratchJr,
                    see{' '}<a href="https://scratchjr.org/about/FAQ">scratchjr.org/FAQ</a>.
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">Why ScratchJr?</div>
                <div className="content-description-answer">
                    Coding (or computer programming) is a new type of literacy.
                    Just as writing helps you organize your thinking and express your ideas,
                    the same is true for coding. As young children code with ScratchJr, they
                    learn how to create and express themselves with the computer. In the process,
                    children learn to solve problems and design projects, and they develop sequencing
                    skills that are foundational for later academic success. They also use math and
                    language in a meaningful and motivating context, supporting the development of
                    early-childhood numeracy and literacy. With ScratchJr, children aren't just
                    learning to code, they are coding to learn.
                </div>
                <div className="content-description-answer">
                    Furthermore, ScratchJr supports children's social and emotional development. When children work together on ScratchJr projects, they practice collaboration, communication, and creative problem-solving. Sharing ideas, giving feedback, and building stories together helps children develop empathy and confidence. Through the process of designing and animating their own characters and worlds, children learn to express their feelings and perspectives in new ways, developing the social and emotional skills that are just as essential as academic ones
                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">Who Created ScratchJr?</div>
                <div className="content-description-answer">
                    ScratchJr was developed by the{' '}
                    <a href="http://sites.bc.edu/devtech">Developmental Technologies (DevTech) Research Group</a>
                    {' '}at the{' '}
                    <a href="https://ase.tufts.edu/epcshd/">Eliot-Pearson Department of Child Study and Human Development</a>
                    {' '}at{' '}
                    <a href="https://www.tufts.edu/">Tufts University</a>,
                    now at the{' '}
                    <a href="https://www.bc.edu/bc-web/schools/lynch-school.html">Lynch School of Education and Human Development</a>
                    {' '}at{' '}
                    <a href="https://www.bc.edu/">Boston College</a>
                    {' '}(led by{' '}
                    <a href="http://marinabers.com">Marina Umaschi Bers</a>,
                    with contributions from Amanda Strawhacker, Claire Caine, Louise Flannery,
                    Elizabeth Kazakoff and Dylan Portelance),
                    the{' '}
                    <a href="https://llk.media.mit.edu/">Lifelong Kindergarten</a>
                    {' '}group at the{' '}
                    <a href="https://www.media.mit.edu/">MIT Media Lab</a>
                    {' '}(led by{' '}
                    <a href="https://web.media.mit.edu/~mres/">Mitchel Resnick</a>,
                    with contributions from Chris Garrity, Tim Mickel, Carl Bowman, Champika Fernando,
                    Natalie Rusk, Sayamindu Dasgupta, and Chris Graves),
                    and the{' '}
                    <a href="https://www.playfulinvention.com/">Playful Invention Company</a>
                    {' '}(led by Paula Bontá and Brian Silverman, with contributions from
                    Jack Geddes and Adrian Gabriel).
                    The Android version of ScratchJr was implemented by{' '}
                    <a href="https://www.twosigma.com/">Two Sigma</a>
                    {' '}(led by Mark Roth, with contributions from Kevin Hu), with input from Benesse Corp.
                </div>
                <div className="content-description-answer">
                    The graphics and illustrations for ScratchJr were created by{' '}
                    <a href="https://www.hvingtquatre.com/">HvingtQuatre Company</a>
                    {' '}(led by Julien Gelifier and Adrien Valesa),{' '}
                    <a href="https://sarahjt.com/">Sarah Thomson</a>,
                    Peter Mueller, and Jillian Lombardi. Paula Aguilera of the MIT Media Lab
                    produced the ScratchJr video. We would also like to thank everyone who
                    participated in the beta-test communities for iPad and Android, particularly
                    Sergio Antolinez, Vandendaele Didier, and Sjoerd Dirk Meijer.
                </div>
                <div className="content-description-answer">
                    Since then, ScratchJr has been maintained and extended by the DevTech Research
                    Group at Boston College with the support of the Scratch Foundation. In April of 2025, 
                    the DevTech Research Group hosted a 10th Birthday Celebration for ScratchJr, to honor
                    a decade of bringing free coding education to children, families and educators 
                    around the world. 
                    <div className="content-description-answer">
                        <div className="content-description-answer">{''}</div>
    <img src="/images/marinaandmitchbday.png" alt="Marina and Mitch with a ScratchJr Birthday Cake" style={{width: '50%', height: 'auto', display: 'block', margin: '0 auto'}}/>
    
</div>

                </div>
            </div>

            <div className="content-description-section">
                <div className="content-description-question">
                    Who Helped to Translate ScratchJr?
                </div>
                <div className="content-description-answer">
                    ScratchJr has been translated into more than a dozen languages with the generous
                    help of volunteer translators from around the world.  If you are interested in joining our translation team to bring ScratchJr to even more
    children around the world, please reach out to{' '}
    <a href="mailto:info@scratchjr.org">info@scratchjr.org</a>. {' '}Special thanks go to the
                    translators who helped with our first translation into Spanish: Teresa
                    Martínez Pérez, childhood education student; Marta Bonet Garrosa,
                    Manuela Lara Lara, and Lidia Piñeiro, of Editorial Santillana; Sergio
                    Antolinez, CEO of Tecnoaprendo; and Luisa María Palacios Maroto.
                </div>
                <div className="content-description-answer">If you enjoy using this free app, curricular materials,
                     and teaching resources please consider making {' '}
    <a href="https://scratchjr.org/donate" target="_blank" rel="noopener noreferrer">a donation</a> {' '} to the DevTech Research Group, which 
                      provides ongoing support for all materials and outreach supporting, professional development 
                      and research. We appreciate donations of all sizes, large and small. </div>

                

            </div>

        </div>
    </div>
);

export default InfoSection;