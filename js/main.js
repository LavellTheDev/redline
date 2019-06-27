//Project Name:redline brokers
//Client Name: Michael
//Author: Lavell Wesley
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
//
//
//
//
//
//
//
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//Start of FAQ CODE()
//--------------------------------------------------------------
function faqControl(){
$('.a').hide();
$('.q').on("click", function(){
	var answerLi = $(this).next();
  if($(this).attr("data-icon") === "+"){
  	$(this).attr("data-icon", "-");
    answerLi.slideDown();
  }else{
	$(this).attr("data-icon", "+");
  	answerLi.slideUp();
  }
});
}

$(document).ready(function() {
	faqControl();
});

////////////////////End of FAQ CODE////////////////////

////////////////////Start of MAP//////////////////////

function toggleBackBay(){
   var x = document.getElementById('backbayCard');
   if (x.style.display !== "block") {
     x.style.display = "block"
   }else{
     x.style.display = "none";
   }
   // x.style.transition =
 }

function toggleBeaconHill(){
  var x = document.getElementById('beaconhillCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleCambridge(){
  var x = document.getElementById('cambridgeCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleCharles(){
  var x = document.getElementById('charlestownCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleDowntown(){
  var x = document.getElementById('downtownCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleDorchester(){
  var x = document.getElementById('dorchesterCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleEastBoston(){
  var x = document.getElementById('eastbostonCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleFenway(){
  var x = document.getElementById('fenwayCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleJamaicaPlain(){
  var x = document.getElementById('jamaicaplainCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleLeatherDistrict(){
  var x = document.getElementById('leatherdistrictCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleNorthEnd(){
  var x = document.getElementById('northendCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleRoxbury(){
  var x = document.getElementById('roxburyCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleSeaport(){
  var x = document.getElementById('seaportCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleSouthBoston(){
  var x = document.getElementById('southbostonCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleSoutEnd(){
  var x = document.getElementById('southendCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}

function toggleWestEnd(){
  var x = document.getElementById('westendCard');
  if (x.style.display !== "block") {
    x.style.display = "block"
  }else{
    x.style.display = "none";
  }
}


/////////////////End of map/////////////////////////

////////////////start backtotop////////////////////

$(document).ready(function(){
      var btt = $('.backToTop');

      $(window).on('scroll', function(){
          var self = $(this),
              height = self.height(),
              top = self.scrollTop();
          if(top > height) {
            if(!btt.is(':visible')){
                btt.show()
            }
          }else{
            btt.hide();
          }
      });
});

///////////////end of backtotop///////////////////

//start accordian js//
//start accordian js//
//start accordian js//
var accordians = document.getElementsByClassName("accordian")

for (var i = 0; i < accordians.length; i++) {
  accordians[i].onclick = function (){
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      //if accordian is open we need to close it
      content.style.maxHeight = null;
    }else {
      //accordian is closed
      content.style.maxHeight = content.scrollHeight + "px"
    }
  };
};
//end accordian js//
//end accordian js//
//end accordian js//

////Start of Reveal Side Bar/////////////////////
  $(document).ready(function(){
      $('.fa.fa-bars').on('click', function(){
        $('.sidebar').toggle(1000);
    });
  });
////////End of Reveal Side Bar//////////////////

$(window).bind("load", function() {
	$('#movie-area').load('movie.html');
}); 
