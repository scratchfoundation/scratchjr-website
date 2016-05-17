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
    this.props.clickSubsection(this.props.id);
  },
  render: function() {
    var href;
    var clickHandler;
    var description;
    // Use Case 1: linking to static content (i.e. PDF) 
    if (this.props.href) {
      href = this.props.href;
      description = 
        <div className="content-section-item-description">
          {this.props.description}
          <a className="read-more" href={this.props.href}>
            {this.props.linkText}
          </a>
        </div>;
    // Use Case 2: link that changes the display content section
    } else if (this.props.linkText) {
      href = "#" + this.props.id;
      clickHandler = this.handleClick;
      description = 
        <div className="content-section-item-description">
          {this.props.description}
          <a className="read-more" id={this.props.id} href={"#" + this.props.id} onClick={this.handleClick}>
            {this.props.linkText}
          </a>
        </div>;
    // Use Case 3: no links, just text description
    } else {
      description = 
        <div className="content-section-item-description">
          {this.props.description}
        </div>;
    }
    return (
      <div className="content-section-full-item" key={this.props.id}>
        <div className="content-section-item-title">
          <a className="read-more" id={this.props.id} href={href} onClick={clickHandler}>
            {this.props.title}
          </a>
        </div>
        <div className="content-section-item-thumbnail">
          <a className="read-more" id={this.props.id} href={href} onClick={clickHandler}>
            <img className="content-section-item-thumbnail-image" src={this.props.thumbSrc}/>
          </a>
        </div>
        {description}
      </div>
    );
  }
});

module.exports = GenericSectionItem;