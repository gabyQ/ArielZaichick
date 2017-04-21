;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#az-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#az-menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : 'nav-list',
			'id' : ''
		});

		$('#index-page').prepend($clone);

		// click the burger
		$('.js-az-nav-toggle').on('click', function(){

			if ( $('body').hasClass('az-offcanvas') ) {
				$('body').removeClass('az-offcanvas');
			} else {
				$('body').addClass('az-offcanvas');
			}
			//$('body').toggleClass('az-offcanvas');

		});

		$(window).resize(function(){
			var w = $(window);

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('az-offcanvas') ) {
					$('body').removeClass('az-offcanvas');
				}
			}

		});	

	}


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	

	// Document on load.
	$(function(){

		offcanvas();
		contentWayPoint();

	});


}());