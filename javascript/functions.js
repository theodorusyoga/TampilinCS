var interval;
var interval2;

$(document).ready(function() {
	setTeaser();
	$('.caption .main').hover(onHover, unHover);

	// open details
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
				top : '-100%'
			}, 500);
			$('.details .caption').animate({
				left : '0'
			}, 1500);
			clearInterval(changeColor);
		}, 750);
	});

	// close dextails
	$('.details .caption .backlink').click(function() {
		$('.cover').animate({
			left : "0",
		}, 1000);
		$('.header .headeroverlay').animate({
			opacity : "0.6",
		}, 500);
		var changeColor = window.setInterval(function() {
			$('.content .title .sub').css('visibility', 'visible');
			$('.content .title .subdate').css('visibility', 'visible');
			$('.content .title .main').animate({
				fontSize : '80',
				marginTop : '0',
				marginLeft : '0'
			}, 500);
			$('.content .title .main').css('color', '#000000');
			$('.header .headeroverlay').css('background-color', '#000000');
			$('.details').animate({
				top : '0'
			}, 500);
			$('.details .caption').animate({
				left : '-250'
			}, 1500);
			$('.caption .main').bind('mouseenter', onHover);
			$('.caption .main').bind('mouseleave', unHover);
			setTeaser();
			clearInterval(changeColor);
		}, 1000);
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

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setTeaser() {
	$('.content .title .main').children('span').each(function() {
		var that = $(this);
		setTimeout(function() {
			that.animate({
				opacity : "1.0"
			}, getRandomInt(100, 1500)).animate({
				visibility : "visible"
			}, getRandomInt(100, 1500));
		}, that.index() * getRandomInt(50, 100));
	});
	var firsttime = window.setInterval(function() {
		$('.caption').animate({
			right : "0"
		}, 500);
		clearInterval(firsttime);
	}, 1000);
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