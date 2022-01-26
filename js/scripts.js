
(function($){
	jQuery(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		$(".hamburger").click(function(){
   			$(this).toggleClass("is-active");
  		});
	
		$("#owl-csel1").owlCarousel({
			items: 4,
			autoplay: true,
			autoplayTimeout: 5000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<i class="fa fa-angle-left" aria-hidden="true"></i>',
						'<i class="fa fa-angle-right" aria-hidden="true"></i>'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				1200: {
					items: 1,						
				}
			}

		});



		$("#owl-csel2").owlCarousel({
			items: 5,
			autoplay: true,
			autoplayTimeout: 10000,
			startPosition: 0,
			rtl: true,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navText: [
						'<i class="fas fa-arrow-left" aria-hidden="true"></i>',
						'<i class="fas fa-arrow-right" aria-hidden="true"></i>'
							],
			navContainer: '.main-content2 .custom-nav',
			responsive:{
				0: {
					items: 3,						
					},
				767: {
					items: 3,						
					},
				1200: {
					items: 5,						
				}
			}

		});

		new WOW().init();



		
	});
})(jQuery);