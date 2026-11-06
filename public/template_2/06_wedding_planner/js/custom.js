// Template Name: Food Heaven HTML
// Version: 1.0.0
// Author: Webstrot 

// Preloader js
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(450).fadeOut("slow");
});

$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

$(document).ready(function($) {
    var mastHeight = $('.medicalHeader').outerHeight();
    $('.medicalTopBanner').css('padding-top', mastHeight); 
});

$(document).ready(function(){
  $(".navbar-nav .dropdown").hover(            
      function() {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
          $(this).toggleClass('open');        
      },
      function() {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
          $(this).toggleClass('open');       
      }
  );
});

$(document).ready(function () {
  $('.medicalFooter .footerMenuLink ul li a').hover(function () {
      $(this).find('i.fa').addClass('fa-dot-circle-o');
  }, function () {
      $(this).find('i.fa').removeClass('fa-dot-circle-o');
  });
});



$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('.my-menu-header').addClass('navShadow') : $('.my-menu-header').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});

	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	// $('#menu-toggle').on('click', () => {
	// 	$('#menu-toggle').toggleClass('closeMenu');
	// 	$('ul').toggleClass('showMenu');
		
	// 	$('li').on('click', () => {
	// 		$('ul').removeClass('showMenu');
	// 		$('#menu-toggle').removeClass('closeMenu');
	// 	});
	// });
	
});


