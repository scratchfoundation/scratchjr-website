var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('../../components/navbar/navbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

var Tab = require('../../components/tab/tab.jsx');

var InterfaceSection = require('../../components/tab-sections/learn-sections/interface.jsx');
var PaintSection = require('../../components/tab-sections/learn-sections/paint.jsx');
var BlocksSection = require('../../components/tab-sections/learn-sections/blocks.jsx');
var TipsSection = require('../../components/tab-sections/learn-sections/tips.jsx');

require('../../../static/js/lib/content-nav.js');

require('./learn.scss');

var Learn = React.createClass({
	type: 'Learn',
  componentDidMount: function() {

    var interfaceDescriptions = [
    ["1 | Save", "Save the current project and exit to the Home page."],
    ["2 | Stage", "This is where the action takes place in the project. To delete a character, press and hold it."],
    ["3 | Presentation Mode", "Expand the stage to the full screen."],
    ["4 | Grid", "Toggle on (and off) the x-y coordinate grid."],
    ["5 | Change Background", "Select or create a background image for the stage."],
    ["6 | Add Text", "Write titles and labels on the stage."],
    ["7 | Reset Characters", "Reset all characters to their starting positions on the stage. (Drag characters to set up new starting positions.)"],
    ["8 | Green Flag", "Start all programming scripts that begin with a \"Start on Green Flag\" block by tapping here."],
    ["9 | Pages", "Select among the pages in your project \u2014 or tap the plus sign to add a new page. Each page has its own set of characters and a background. To delete a page, press and hold it. To reorder pages, drag them to new positions."],
    ["10 | Project Information", "Change the title of the project, see when the project was created, and share the project (if supported by your device)."],
    ["11 | Undo and Redo", "If you make a mistake, tap Undo to go back in time, reversing the last action. Tap Redo to reverse the last Undo."],
    ["12 | Programming Script", "Snap blocks together to make a programming script, telling the character what to do. Tap anywhere on a script to make it run. To delete a block or script, drag it outside the programming area. To copy a block or script from one character to another, drag it onto the character's thumbnail."],
    ["13 | Programming Area", "This is where you connect programming blocks to create scripts, telling the character what to do."],
    ["14 | Blocks Palette", "This is the menu of programming blocks. Drag a block into the programming area, then tap on it to see what it does."],
    ["15 | Block Categories", "This is where you can select a category of programming blocks: Triggering Blocks (Yellow), Motion (Blue), Looks (Purple), Sounds (Green), Control (Orange), End Blocks (Red)."],
    ["16 | Characters", "Select among the characters in your project \u2014 or tap the plus sign to add a new one. Once a character is selected, you can edit its scripts, tap its name to rename it, or tap the paintbrush to edit its image. To delete a character, press and hold it. To copy a character to another page, drag it to the page thumbnail."]
    ];
    var paintDescriptions = [
    ["1 | Undo", "Reverses the most recent change."],
    ["2 | Redo", "Reverses the most recent Undo."],
    ["3 | Shape", "Choose a shape to draw: line, circle/ellipse, rectangle, or triangle."],
    ["4 | Character Name", "Edit the name of the character."],
    ["5 | Cut", "After selecting the Cut tool, you can tap a character or shape to remove it from the canvas."],
    ["6 | Duplicate", "After selecting the Duplicate tool, you can tap a character or shape to create a copy of it."],
    ["7 | Rotate", "After selecting the Rotate tool, you can rotate a character or shape around its center."],
    ["8 | Drag", "After selecting the Drag tool, you can drag a character or shape on the canvas. If you tap on a shape, you can then edit the shape by dragging the dots that appear."],
    ["9 | Save", "Save changes and leave the Paint Editor."],
    ["10 | Fill", "After selecting the Fill tool, you can tap any section of a character or shape to fill it with the currently selected color."],
    ["11 | Camera", "After selecting the Camera tool, you can tap any section of a character or shape, and then tap the camera button to fill the section with a new photo taken with the camera."],
    ["12 | Color", "Select a new color to use for drawing and filling in shapes."],
    ["13 | Line Width", "Change the width of the lines in the shapes you are drawing."],
    ];

    $(document).on('click', '.interface-button', function (e) {
      $('.interface-button').removeClass('interface-button-selected');
      $(this).addClass('interface-button-selected');
      $('#interface-key-header').text(interfaceDescriptions[parseInt($(this).text() - 1)][0]);
      $('#interface-key-description').text(interfaceDescriptions[parseInt($(this).text() - 1)][1]);
    });

    $(document).on('click', '.paint-button', function (e) {
      $('.paint-button').removeClass('paint-button-selected');
      $(this).addClass('paint-button-selected');
      $('#paint-key-header').text(paintDescriptions[parseInt($(this).text() - 1)][0]);
      $('#paint-key-description').text(paintDescriptions[parseInt($(this).text() - 1)][1]);
    });
  },
	render: function() {
		return (
			<div>
        <NavBar selected="learn"/>
        <div id="content">
          <div id="content-nav">
            <Tab tabId="interface" title="Interface Guide" iconClass="interface-guide-icon" location="left" />
            <Tab tabId="paint" title="Paint Editor Guide" iconClass="paint-guide-icon" location="middle" />
            <Tab tabId="blocks" title="Block Descriptions" iconClass="blocks-guide-icon" location="middle" />
            <Tab tabId="tips" title="Tips &amp; Hints" iconClass="videos-icon" location="right" />
          </div>
          <InterfaceSection />
          <PaintSection />
          <BlocksSection />
          <TipsSection />
        </div>
        <Footer />
      </div>
		);
	}
});

ReactDOM.render(<Learn />, document.getElementById('app'));