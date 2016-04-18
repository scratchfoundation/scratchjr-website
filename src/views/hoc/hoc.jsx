var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('../../components/navbar/navbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

var HourOfCode = React.createClass({
	type: 'HourOfCode',
  componentDidMount: function() {

    // ~~~~ content-nav.js ~~~~~

    $(function() {
      // add read-more link to related item thumbnail image and title
      $(".content-section-item-thumbnail-image").wrap(function() {
        return $(this).parent().siblings().find($(".read-more")).clone().text("");
      } );
      $(".content-section-item-title").wrapInner(function() {
        return $(this).siblings().find($(".read-more")).clone().text("");
      } );

      // load the correct content based on URL if there is a #hash
      var hash = location.hash.substr(1);
      if (hash){
        if ($('#'+hash+'-section').length) {
          updateContent(hash+'-section');
          updateCategory(hash+'-nav');
        } else {
          updateContent(hash);
          var category = $(".read-more#"+hash).closest($(".content-section")).attr('id').replace("section", "nav");
          updateCategory(category);
        }
      }
    });

    $(document).on('click', '.content-nav-item', function(e) {
      updateContent($(this).attr('id').replace('nav', 'section'));
      updateCategory($(this).attr('id'));
    });

    $(document).on('click', '.read-more', function(e) {
      updateContent($(this).attr('id')+"-section");
    });

    function updateContent(sectionId) {
      var section = $("#"+sectionId);
      if(section.length)  {
        $('.content-section').removeClass('content-section-selected');
        section.addClass('content-section-selected');
        if($(".content-section-selected.content-subpage").length) {
          $('html,body').scrollTop($("#content").offset().top);
        }
      }
    }

    function updateCategory(navId) {
      if($("#"+navId).length)  {
        $('.content-nav-item').removeClass('content-nav-item-selected');
        $("#"+navId).addClass('content-nav-item-selected');
      }

    }
    // ~~~~~~~~~~~~~~~~~~~
  },
	render: function() {
		return (
      <div>
        <NavBar />
        <div id="content">
          <div className="content-section content-section-selected">
            <div className="content-section-title">
              Try Coding with ScratchJr
            </div>
            <div className="content-section-description">
              Try these teacher-led activities to explore creative coding with ScratchJr.
            </div>
            <div className="content-section-items-container">
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Can I Make the Sun Set?
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/activitycards/card06-sun.png" />
                </div>
                <div className="content-section-item-description">
                  Students will get an introduction to programming by making a sun set over a city landscape! <em>Ages 5-9. Programming, Storytelling, Mathematics, Creativity</em> <a className="read-more" href="https://drive.google.com/file/d/0B_kqMacZctDuTG5CdEhoR2o3M0E/view?usp=sharing" target="_blank"> See more</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Can I Make a Spooky Forest?
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/activitycards/card05-forest.png" />
                </div>
                <div className="content-section-item-description">
                  Students will learn more features of ScratchJr by creating a spooky forest with multiple characters! <em>Ages 5-9. Art, Storytelling, Sequence</em> <a className="read-more" href="https://drive.google.com/file/d/0B_kqMacZctDuWDRtLXQwRWp4ZGc/view" target="_blank"> See more</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Can I Make My Characters Greet Each Other?
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/activitycards/card08-greet.png" />
                </div>
                <div className="content-section-item-description">
                  Students will learn advanced features of the ScratchJr app when they make a dog and kitten meet each other and exchange hellos! <em>Ages 5-9. Programming, Storytelling, Mathematics, Creativity</em> <a className="read-more" href="https://drive.google.com/file/d/0B_kqMacZctDuNVg0QTJaWUR6WVE/view" target="_blank"> See more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
		);
	}
});

ReactDOM.render(<HourOfCode />, document.getElementById('app'));