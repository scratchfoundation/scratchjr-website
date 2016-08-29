import React from 'react';
import {StaticLinkSectionItem, LinkedSectionItem} from '../../../components/sectionitem/sectionitem.jsx';

export default class HomeSection extends React.Component {
    render() {
        return (
            <div className='content-section' id='curricula-section'>
                <div className='content-section-title'>
                    Curricula
                </div>
                <div className='content-section-description'>
                    These curricula introduce powerful ideas from computer science that are not
                    usually highlighted in early childhood education. We use the term 'powerful
                    idea' to mean a concept that children can learn and that will serve their
                    critical thinking and problem solving abilities beyond the lifetime of a
                    specific classroom technology. While these curricula were designed as tools for
                    teaching ScratchJr, the ultimate goal is to equip students with skills that can
                    be applied outside of the app. Abilities like programming, expressing through
                    technology, and user-centered design are just a few of the powerful ideas
                    covered in our lessons.
                    <br/>
                </div>
                <div className='content-section-items-container'>
                    <StaticLinkSectionItem
                        title='Printable Block Images'
                        format='full'
                        thumbnail='/images/rightandleft.png'
                        description='You can print high quality images of the ScratchJr blocks for classroom instruction... '
                        linkURL='/pdfs/blocks.pdf'
                        linkText='Download PDF'/>
                    <LinkedSectionItem
                        title='Animated Genres Curriculum'
                        format='full'
                        thumbnail='/images/slide1.png'
                        description='This curriculum provides students with the opportunity to learn all of the concepts in ScratchJr and apply these concepts in their own personal creations. At the heart of the curriculum are three types of interactive projects that can be made with ScratchJr... '
                        linkURL='/teach/curricula/animated-genres'
                        linkText='Read more'/>
                    <LinkedSectionItem
                        title='Playground Games Curriculum'
                        format='full'
                        thumbnail='/images/playground/playground.png'
                        description='In the eight lessons of this curriculum, children learn how to use ScratchJr as they re-create familiar playground games. ... '
                        linkText='Read more'
                        linkURL='/teach/curricula/playground'/>
                    <LinkedSectionItem
                        title='Reinforcing Literacy and Math Curriculum'
                        format='full'
                        thumbnail='/images/literacymath/project1.png'
                        description='These curricular modules describe ScratchJr projects that reinforce the Common Core Standards. They could serve as games programmed by older ScratchJr students to be played by younger ScratchJr students... '
                        linkURL='/teach/curricula/literacy-math'
                        linkText='Read more'/>
                </div>
            </div>

        );
    }
}
