// navigation links are hashes where the target is the id of the content div
// e.g. href='#activities' will show the content-section div with id='activities-section'
// nav items should have id <target>-nav e.g. activities-nav
// content sections should have id <target>-section e.g. activities-section
// read-more items should have an id, the target section should have id <target>-section

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
  console.log(section);
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
