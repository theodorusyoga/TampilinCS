var interval;
var interval2;

$(document).ready(function() {
	setTeaser();
	$('.sunmorning').hide();
	$('.caption .main').hover(onHover, unHover);

	// open details
	$('.caption .main').click(function() {
		animateBuildings();
		var nightint = window.setInterval(function(){
			setNight();
			clearInterval(nightint);
		}, 3000);
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

	// close details
	$('.details .caption .backlink').click(function() {
		$('.sunmorning').fadeOut('fast');
		hideBuildings();	
		$('.cover').animate({
			left : "0",
		}, 1000);
		$('.header .headeroverlay').animate({
			opacity : "0.6",
		}, 500);
		var changeColor = window.setInterval(function() {
			$('.sunmorning').hide();
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
		}, 3000);
	});
});

function animateBuildings(){
	var time = getRandomInt(1000, 2000);
	/*BUILDINGS*/
	var func1 = window.setInterval(function(){
		$('.rumahijo').animate({
			top: '400'	
		}, 400);
		clearInterval(func1);
	}, time);
	time = getRandomInt(1000, 2000);
	var func2 = window.setInterval(function(){
		$('.rumahbiru').animate({
			top: '400'	
		}, 400);
		clearInterval(func2);
	}, time);
	time = getRandomInt(1000, 2000);
	var func3 = window.setInterval(function(){
		$('.rumahroti').animate({
			top: '400'	
		}, 400);
		clearInterval(func3);
	}, time);
	time = getRandomInt(1000, 2000);
	var func4 = window.setInterval(function(){
		$('.rumahpizza').animate({
			top: '400'	
		}, 400);
		clearInterval(func4);
	}, time);
	time = getRandomInt(1000, 2000);
	var func5 = window.setInterval(function(){
		$('.rumahkecil').animate({
			top: '400'	
		}, 400);
		clearInterval(func5);
	}, time);
	time = getRandomInt(1000, 2000);
	var func6 = window.setInterval(function(){
		$('.tugu').animate({
			top: '325'	
		}, 400);
		clearInterval(func6);
	}, time);
	/*SHADOWS*/
	time = getRandomInt(2000, 2500);
	var func7 = window.setInterval(function(){
		$('.gedung1').animate({
			top: '200'	
		}, 400);
		clearInterval(func7);
	}, time);
	time = getRandomInt(2000, 2500);
	var func8 = window.setInterval(function(){
		$('.gedung2').animate({
			top: '250'	
		}, 400);
		clearInterval(func8);
	}, time);
	time = getRandomInt(2000, 2500);
	var func9 = window.setInterval(function(){
		$('.gedung3').animate({
			top: '200'	
		}, 400);
		clearInterval(func9);
	}, time);
	time = getRandomInt(2000, 2500);
	var func10 = window.setInterval(function(){
		$('.gedung4').animate({
			top: '200'	
		}, 400);
		clearInterval(func10);
	}, time);
	time = getRandomInt(2000, 2500);
	var func11 = window.setInterval(function(){
		$('.gedung5').animate({
			top: '200'	
		}, 400);
		clearInterval(func11);
	}, time);
	time = getRandomInt(2000, 2500);
	var func12 = window.setInterval(function(){
		$('.gedung6').animate({
			top: '200'	
		}, 400);
		clearInterval(func12);
	}, time);
}

function hideBuildings(){
	var time = getRandomInt(2000, 2500);
	/*BUILDINGS*/
	var func1 = window.setInterval(function(){
		$('.rumahijo').animate({
			top: '700'	
		}, 400);
		clearInterval(func1);
	}, time);
	time = getRandomInt(2000, 2500);
	var func2 = window.setInterval(function(){
		$('.rumahbiru').animate({
			top: '700'	
		}, 400);
		clearInterval(func2);
	}, time);
	time = getRandomInt(2000, 2500);
	var func3 = window.setInterval(function(){
		$('.rumahroti').animate({
			top: '700'	
		}, 400);
		clearInterval(func3);
	}, time);
	time = getRandomInt(2000, 2500);
	var func4 = window.setInterval(function(){
		$('.rumahpizza').animate({
			top: '700'	
		}, 400);
		clearInterval(func4);
	}, time);
	time = getRandomInt(2000, 2500);
	var func5 = window.setInterval(function(){
		$('.rumahkecil').animate({
			top: '700'	
		}, 400);
		clearInterval(func5);
	}, time);
	time = getRandomInt(2000, 2500);
	var func6 = window.setInterval(function(){
		$('.tugu').animate({
			top: '700'	
		}, 400);
		clearInterval(func6);
	}, time);
	/*SHADOWS*/
	time = getRandomInt(1000, 2000);
	var func7 = window.setInterval(function(){
		$('.gedung1').animate({
			top: '900'	
		}, 400);
		clearInterval(func7);
	}, time);
	time = getRandomInt(1000, 2000);
	var func8 = window.setInterval(function(){
		$('.gedung2').animate({
			top: '900'	
		}, 400);
		clearInterval(func8);
	}, time);
	time = getRandomInt(1000, 2000);
	var func9 = window.setInterval(function(){
		$('.gedung3').animate({
			top: '900'	
		}, 400);
		clearInterval(func9);
	}, time);
	time = getRandomInt(1000, 2000);
	var func10 = window.setInterval(function(){
		$('.gedung4').animate({
			top: '900'	
		}, 400);
		clearInterval(func10);
	}, time);
	time = getRandomInt(1000, 2000);
	var func11 = window.setInterval(function(){
		$('.gedung5').animate({
			top: '900'	
		}, 400);
		clearInterval(func11);
	}, time);
	time = getRandomInt(1000, 2000);
	var func12 = window.setInterval(function(){
		$('.gedung6').animate({
			top: '900'	
		}, 400);
		clearInterval(func12);
	}, time);
}

var t = 0;
function setNight() {
	if ($('.sunmorning').position().top == -199) // sun in the top
		return;
	$('.sunmorning').show();
	t += 0.05;
	var r = 200;
	var xcenter = 0;
	var ycenter = 0;
	var left = Math.floor(xcenter + (r * Math.cos(t)));
	var top = Math.floor(ycenter + (r * Math.sin(t)));
	$('.sunmorning').animate({
		top : top,
		left : left,
	}, 5, function() {
		setNight();
	});
}

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