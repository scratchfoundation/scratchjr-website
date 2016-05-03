import React from 'react';

var GenericSectionItem = React.createClass({
  /** 
    TODO: the below code is a bit hacky. It handles a click on a GenericSectionItem and then replaces
      the main section of the page with the corresponding GenericSection, however it uses pure javascript
      manipulation of the DOM. Should be converted to pure React (i.e. use a Flux pattern). 
  **/
  handleClick: function() {
    var clickedSection = document.querySelector("#" + this.props.id + "-section");
    var contentSections = document.querySelectorAll('.content-section');
    for (var i=0; i < contentSections.length; i++) {
      contentSections[i].classList.remove('content-section-selected');
    }
    clickedSection.classList.add('content-section-selected');
    if (document.querySelector(".content-section-selected.content-subpage")) {
      var offset = document.querySelector('#content').offsetTop;
      window.scrollTo(0, offset)
    }
    // if($(".content-section-selected.content-subpage").length) {
    //   $('html,body').scrollTop($("#content").offset().top);
    // }
  },
  render: function() {
    var description;
    if (this.props.linkText) {
      description = 
        <div className="content-section-item-description">
          {this.props.description}
          <a className="read-more" id={this.props.id} href={"#"+this.props.id} onClick={this.handleClick}>
            {this.props.linkText}
          </a>
        </div>;
    } else {
      description = 
        <div className="content-section-item-description">
          {this.props.description}
        </div>;
    }
    return (
      <div className="content-section-full-item">
        <div className="content-section-item-title">
          {this.props.title}
        </div>
        <div className="content-section-item-thumbnail">
          <img className="content-section-item-thumbnail-image" src={this.props.thumbSrc}/>
        </div>
        {description}
      </div>
    );
  }
});

module.exports = GenericSectionItem;