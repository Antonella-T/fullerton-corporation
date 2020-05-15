console.log('Script file loaded.');

$(document).ready(function () {

  /***** SLIDING IMAGES START *****/

  // 1. Obtain all the elements but the first one, and hide them.
  $('.slide-show > div:gt(0)').hide();

  // 2. Set an interval to change images every 3 seconds.
  setInterval(function () {
    // Obtain first element.
    $('.slide-show > div:first')
      // Transition fade out img.
      .fadeOut(2000)
      // Go to next element.
      .next()
      // Transition fade in.
      .fadeIn(2000)
      // Go back to the origin element.
      .end()
      // Cut and add element to the end of the container.
      .appendTo('.slide-show');
  }, 3000);
   /***** SLIDING IMAGES END *****/


  /***** READ MORE - SHOW LESS START *****/

  // 1. Obtain HTML elements and hide them.
  $('.hidden-content').hide();
  
  // 2. Add event listener ‘click’ to each button and run the callback.
  $('.show-hidden').on('click', function () {
    // Store the btn in a variable (in this case 'this' represents the btn) to generate a reference and not search for it again.
    var btn = $(this);
    // Store in a variable the element that contains the hidden content.
    var paragraph = btn.prev('.hidden-content');
    // Evaluate if paragraph is visible to choose the btn label.
    var txt = paragraph.is(':visible') ? 'Read more' : 'Read less';
    // Update btn with new label.
    btn.text(txt);
    // Display/hide paragraph with a transition of 3ms. 
    paragraph.slideToggle(300);
  });
  /***** READ MORE - SHOW LESS END *****/
});
