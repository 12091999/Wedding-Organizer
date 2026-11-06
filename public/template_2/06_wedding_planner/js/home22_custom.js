  //   home 8 page js start   //

			// Magnific popup-video
      $(".youtube-link").grtyoutube({
        autoPlay: true,
        theme: "dark",
      });

       
    

    // counter  js  start
  $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }

    });  
  })




// gallery js start

$('.portfolio_img_text').magnificPopup({
  delegate: '.img-link',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      return item.el.attr('title') + '<small></small>';
    }
  }
});

// wedding_slider  js start 

$('.wedding_slider .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  center:true,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
   }
})


$('.wedding_slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
     return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
  items: 3,
  loop:true,
  center:true,
  margin:30,
  nav:false,
  dots:false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:3
    }
 }
});

$(document).ready(function ($) {
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".next-btn").click(function () {
     owl.trigger("next.owl.carousel");
  });
  $(".prev-btn").click(function () {
     owl.trigger("prev.owl.carousel");
  });
  $(".prev-btn").addClass("disabled");
  $(owl).on("translated.owl.carousel", function (event) {
     if ($(".owl-prev").hasClass("disabled")) {
        $(".prev-btn").addClass("disabled");
     } else {
        $(".prev-btn").removeClass("disabled");
     }
     if ($(".owl-next").hasClass("disabled")) {
        $(".next-btn").addClass("disabled");
     } else {
        $(".next-btn").removeClass("disabled");
     }
  });
});
  // wedcouple_slider

  $('.wedcouple_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
     }
  })
  $(".wedcouple_slider  .owl-prev").html('<svg fill="none"  viewBox="0 0 56 11"><path fill="#111"  d="M1.256 4.353H55.71v1.496H1.256V4.353z"/><path fill="#111" d="M6.016 10.205a.747.747 0 00.44-1.354L1.688 5.396c-.122-.088-.192-.188-.192-.275 0-.087.07-.188.191-.277L6.46 1.352A.748.748 0 005.576.144L.803 3.637C.292 4.01 0 4.553.001 5.123c0 .571.296 1.112.81 1.484l4.767 3.455a.742.742 0 00.438.142z"/></svg>');
  $(".wedcouple_slider  .owl-next").html('<svg fill="none"  viewBox="0 0 56 11"><path fill="#111"   d="M54.455 4.353H0v1.496h54.455V4.353z"/><path fill="#111" d="M49.695 10.205a.747.747 0 01-.44-1.354l4.768-3.455c.122-.088.192-.188.192-.275 0-.087-.07-.188-.191-.277L49.25 1.352a.748.748 0 01.884-1.208l4.773 3.493c.511.374.804.916.802 1.487 0 .571-.296 1.112-.81 1.484l-4.767 3.455a.742.742 0 01-.438.142z"/></svg>');
  
 //  testimonial wrapper

 $('.wedtestimonial_slider .owl-carousel').owlCarousel({
  // loop:true,
  margin:40,
  center:true,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      991:{
        items:1
      },
      1000:{
          items:2.5
      }
   }
})
$(".wedtestimonial_slider  .owl-prev").html('<svg fill="none"  viewBox="0 0 56 11"><path fill="#111"  d="M1.256 4.353H55.71v1.496H1.256V4.353z"/><path fill="#111" d="M6.016 10.205a.747.747 0 00.44-1.354L1.688 5.396c-.122-.088-.192-.188-.192-.275 0-.087.07-.188.191-.277L6.46 1.352A.748.748 0 005.576.144L.803 3.637C.292 4.01 0 4.553.001 5.123c0 .571.296 1.112.81 1.484l4.767 3.455a.742.742 0 00.438.142z"/></svg>');
$(".wedtestimonial_slider .owl-next").html('<svg fill="none"  viewBox="0 0 56 11"><path fill="#111"   d="M54.455 4.353H0v1.496h54.455V4.353z"/><path fill="#111" d="M49.695 10.205a.747.747 0 01-.44-1.354l4.768-3.455c.122-.088.192-.188.192-.275 0-.087-.07-.188-.191-.277L49.25 1.352a.748.748 0 01.884-1.208l4.773 3.493c.511.374.804.916.802 1.487 0 .571-.296 1.112-.81 1.484l-4.767 3.455a.742.742 0 01-.438.142z"/></svg>');

$('.wedtestimonial_slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
  if (!e.namespace)  {
     return;
  }
  var carousel = e.relatedTarget;
  $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
}).owlCarousel({
  items: 2.5,
  loop:true,
  center:true,
  margin:40,
  nav:false,
  dots:false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    991:{
      items:1
    },
    1000:{
        items:2.5
    }
  }
});

//  header search js start

$(document).ready(function () {
  $(".sidebar-toggle , .sidebar-close").click(function () {
      $("#right-sidebar").toggleClass("open")
  });
});


// header js start
(function ($) {
  $(document).ready(function () {

    $('#cssmenu li.active').addClass('open').children('ul').show();
    $('#cssmenu li.has-sub>a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(200);
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(200);
            element.siblings('li').children('ul').slideUp(200);
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(200);
        }
    });

});
})(jQuery);

// menu fixed
$(window).scroll(function () {
var window_top = $(window).scrollTop() + 1;
if (window_top > 100) {
$('.menu-items-wrapper').addClass('menu-fixed animated fadeInDown');
} else {
$('.menu-items-wrapper').removeClass('menu-fixed animated fadeInDown');
}
});

// toggle cross btn js
$(".toggle-main-wrapper , #toggle_close").on("click", function () {
$("#sidebar").toggleClass("open")
});



