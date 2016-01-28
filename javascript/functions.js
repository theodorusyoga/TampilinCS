var interval;
var interval2;

$(document).ready(function() {
	setTeaser();
	$('.caption .main').hover(onHover, unHover);
	$('.caption .main').click(function() {
		$('.caption .main').unbind('mouseenter', onHover);
		$('.caption .main').unbind('mouseleave', unHover);
		$('.content .title .sub').css('visibility', 'hidden');
		$('.content .title .subdate').css('visibility', 'hidden');
		$('.content .title .main').animate({
			fontSize : '38',
			marginTop : '-40%',
			marginLeft : '-240%'
		}, 750);
		$('.cover').animate({
			left : "-2000",
		}, 1000);
		$('.header .headeroverlay').animate({
			opacity : "0.9",
		}, 500);
	
		var changeColor = window.setInterval(function() {
			$('.content .title .main').css('color', '#FFFFFF');
			$('.header .headeroverlay').css('background-color', '#2C3E50');
			$('.details').animate({
				top: '-100%'
			}, 500);
			clearInterval(changeColor);
		}, 750);
	});
});

function onHover() {
	clearInterval(interval);
	$('.cover').animate({
		left : "-50",
	}, 300);
	$('.header .headeroverlay').animate({
		opacity : "0.9"
	}, 300);
}

function unHover() {
	$('.cover').animate({
		left : "0",
	}, 1000);
	$('.header .headeroverlay').animate({
		opacity : "0.6"
	}, 1000);
	setTeaser();
}

function setTeaser() {
	interval = window.setInterval(function() {
		$('.cover').animate({
			left : "-50",
		}, 500);
		$('.header .headeroverlay').animate({
			opacity : "0.9"
		}, 500);
		interval2 = window.setInterval(function() {
			$('.cover').animate({
				left : "0",
			}, 1000);
			$('.header .headeroverlay').animate({
				opacity : "0.6"
			}, 1000);
			clearInterval(interval2);
		}, 500);
	}, 4000);
}