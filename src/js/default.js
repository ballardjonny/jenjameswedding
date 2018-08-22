// Default JavaScript Functions and Initiations
$(document).ready(function() {

  // Functions go here...

// Set the date we're counting down to
var countDownDate = new Date("Jun 17, 2019 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = "<div style='display:inline-block;margin:10px;'><h4>" + days + "</h4>" + "<span class='countdown-copy grey'>days</span></div>" + "<div style='display:inline-block;margin:10px;'><h4>" + hours + "</h4>" + "<span class='countdown-copy grey'>hours</span></div>"
    + "<div style='display:inline-block;margin:10px;'><h4>" + minutes + "</h4>" + "<span class='countdown-copy grey'>mins</span></div>";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

//Smooth-scroll //

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

}); // end document ready
