$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	});

	jQuery('.selectpicker').selectpicker;


	

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	$('.equal-height').matchHeight({
		property: 'max-height'
	});

	// var chartsheight = $('.flotRealtime2').height();
	// $('.traffic-chart').css('height', chartsheight-122);


	// Counter Number
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 3000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


	 
	 
	// Menu Trigger
	$('#menuToggle').on('click', function(event) {
		var windowWidth = $(window).width();   		 
		if (windowWidth<1010) { 
			$('body').removeClass('open'); 
			if (windowWidth<760){ 
				$('#left-panel').slideToggle(); 
			} else {
				$('#left-panel').toggleClass('open-menu');  
			} 
		} else {
			$('body').toggleClass('open');
			$('#left-panel').removeClass('open-menu');  
		} 
			 
	}); 

	 
	$(".menu-item-has-children.dropdown").each(function() {
		$(this).on('click', function() {
			var $temp_text = $(this).children('.dropdown-toggle').html();
			$(this).children('.sub-menu').prepend('<li class="subtitle">' + $temp_text + '</li>'); 
		});
	});


	// Load Resize 
	$(window).on("load resize", function(event) { 
		var windowWidth = $(window).width();  		 
		if (windowWidth<1010) {
			$('body').addClass('small-device'); 
		} else {
			$('body').removeClass('small-device');  
		} 
		
	});
  
	document.addEventListener('DOMContentLoaded', () => {
		const form = document.querySelector('form');
		const emailField = document.querySelector('input[name="email"]');
		const password1Field = document.querySelector('input[name="password1"]');
		const password2Field = document.querySelector('input[name="password2"]');
		const errorMsg = document.createElement('div');
		errorMsg.className = 'error-message';
	
		form.addEventListener('submit', (e) => {
			// Reset error messages
			errorMsg.innerText = '';
			form.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
	
			// Validate email
			if (!emailField.value.match(/^\S+@\S+\.\S+$/)) {
				e.preventDefault();
				errorMsg.innerText = 'Please enter a valid email address.';
				emailField.classList.add('error');
				emailField.parentNode.appendChild(errorMsg);
			}
	
			// Validate passwords match
			if (password1Field.value !== password2Field.value) {
				e.preventDefault();
				errorMsg.innerText = 'Passwords do not match.';
				password2Field.classList.add('error');
				password2Field.parentNode.appendChild(errorMsg);
			}
		});
	});
	
 
});