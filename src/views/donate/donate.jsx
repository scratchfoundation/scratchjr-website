var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('../../components/navbar/navbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

require('./donate.scss');

var Donate = React.createClass({
	type: 'Donate',
	componentDidMount: function() {

	},
	render: function() {
		return (
			<div>
        <NavBar />
        <div id="content">

          <h1>Donate</h1>

          <p>If you enjoy using the free ScratchJr app, please consider making a donation to the Scratch Foundation (<a href="http://www.scratchfoundation.org/">www.scratchfoundation.org</a>), a nonprofit organization that provides ongoing support for ScratchJr. We appreciate donations of all sizes, large and small.</p>

          <div className="donation-block">
            <a href="https://secure.donationpay.org/scratchfoundation/" id="donate-button" >
              <div  className="blue-button">
                Donate
              </div>
            </a>
          </div>
        </div>
        <Footer />
			</div>
		)
	}
});

ReactDOM.render(<Donate />, document.getElementById('app'));