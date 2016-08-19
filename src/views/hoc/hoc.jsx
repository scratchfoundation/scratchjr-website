import React from 'react';
import {render} from 'react-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import {StaticLinkSectionItem} from '../../components/sectionitem/sectionitem.jsx';

export default class HourOfCode extends React.Component {
    render () {
        return (
            <div>
                <NavBar/>
                <div id='content'>
                    <div className='content-section'>
                        <div className='content-section-title'>
                            Try Coding with ScratchJr
                        </div>
                        <div className='content-section-description'>
                            Try these teacher-led activities to explore creative coding with ScratchJr.
                        </div>
                        <div className='content-section-items-container'>
                            <StaticLinkSectionItem
                                format='full'
                                title='Can I Make the Sun Set?'
                                thumbnail={
                                    <img
                                        className = 'content-section-item-thumbnail-image'
                                        src = '/images/activitycards/card06-sun.png' />
                                }
                                description=
                                    'Students will get an introduction to programming by making a sun set over a city
                                    landscape! [Ages 5 - 9. Programming, Storytelling, Mathematics,Creativity] '
                                linkURL='https://drive.google.com/file/d/0B_kqMacZctDuTG5CdEhoR2o3M0E/view'
                                linkText='See more'/>

                            <StaticLinkSectionItem
                                format='full'
                                title='Can I Make a Spooky Forest?'
                                thumbnail={
                                    <img
                                        className = 'content-section-item-thumbnail-image'
                                        src = '/images/activitycards/card05-forest.png' />
                                }
                                description=
                                    'Students will learn more features of ScratchJr by creating a spooky
                                    forest with multiple characters! [Ages 5 - 9. Art, Storytelling, Sequence] '
                                linkURL='https://drive.google.com/file/d/0B_kqMacZctDuWDRtLXQwRWp4ZGc/view'
                                linkText='See more'/>

                            <StaticLinkSectionItem
                                format='full'
                                title='Can I Make My Characters Greet Each Other?'
                                thumbnail={
                                    <img
                                        className = 'content-section-item-thumbnail-image'
                                        src = '/images/activitycards/card08-greet.png' />
                                }
                                description=
                                    'Students will learn advanced features of the ScratchJr app when
                                    they make a dog and kitten meet each other and exchange hellos! [Ages 5 - 9.
                                    Programming, Storytelling, Mathematics, Creativity] '
                                linkURL='https://drive.google.com/file/d/0B_kqMacZctDuNVg0QTJaWUR6WVE/view'
                                linkText='See more'/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

render(
    <HourOfCode/>,
    document.getElementById('app'));
