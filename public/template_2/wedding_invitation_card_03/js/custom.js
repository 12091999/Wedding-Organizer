//  ============  custom js start  ==========  //

// image change automatically js start  

var $imgs = $(".fader").find("img"),
  i = 0;

function changeImage() {
  var next = (++i % $imgs.length);
  $($imgs.get(next - 1)).fadeOut(500);
  $($imgs.get(next)).fadeIn(500);
}
var interval = setInterval(changeImage, 2000);

// aos animation

AOS.init();
$(document).on('ready', function () {
  // initialization of aos
  AOS.init({
    duration: 2000,
    once: true
  });
});