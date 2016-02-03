var interval;
var interval2;

$(document)
		.ready(
				function() {
					setTeaser();
					$('.sunmorning').hide();
					$('.cloud1').hide();
					$('.cloud2').hide();
					$('.cloud3').hide();
					$('.cloud4').hide();
					$('.caption .main').hover(onHover, unHover);

					// open details
					$('.caption .main')
							.click(
									function() {
										$('.next')
												.html(
														'Memuat... <img src="/images/loading.gif" width="26" height="26"></img>');
										animateBuildings();
										setTimeout(function() {
											$('.sunmorning').show();
											setMorning();
										}, 4000);
										$('.caption .main').unbind(
												'mouseenter', onHover);
										$('.caption .main').unbind(
												'mouseleave', unHover);
										$('.content .title .sub').css(
												'visibility', 'hidden');
										$('.content .title .subdate').css(
												'visibility', 'hidden');
										$('.content .title .subinput').css(
												'visibility', 'hidden');
										$('.content .title .main').animate({
											fontSize : '38',
											marginTop : '-27%',
											marginLeft : '-220%'
										}, 750);
										$('.cover').animate({
											left : "-2000",
										}, 1000);
										$('.header .headeroverlay').animate({
											opacity : "0.9",
										}, 500);

										var changeColor = window
												.setInterval(
														function() {
															$(
																	'.content .title .main')
																	.css(
																			'color',
																			'#FFFFFF');
															$(
																	'.header .headeroverlay')
																	.css(
																			'background-color',
																			'#2C3E50');
															$('.details')
																	.animate(
																			{
																				top : '-100%'
																			},
																			500);
															$(
																	'.details .caption')
																	.animate(
																			{
																				left : '0'
																			},
																			4000);
															$('.cloud1').show();

															window
																	.setInterval(
																			function() {
																				$(
																						'.cloud1')
																						.animate(
																								{
																									left : '+=1'
																								},
																								50);
																			},
																			1);
															$('.cloud2').show();
															window
																	.setInterval(
																			function() {
																				$(
																						'.cloud2')
																						.animate(
																								{
																									left : '-=2'
																								},
																								50);
																			},
																			1);
															$('.cloud3').show();
															window
																	.setInterval(
																			function() {
																				$(
																						'.cloud3')
																						.animate(
																								{
																									left : '-=1'
																								},
																								30);
																			},
																			1);
															$('.cloud4').show();
															window
																	.setInterval(
																			function() {
																				$(
																						'.cloud4')
																						.animate(
																								{
																									left : '+=2'
																								},
																								20);
																			},
																			1);
															clearInterval(changeColor);
															$('.next')
																	.html(
																			'Apa itu Tampilin.com?');
														}, 750);
									});

					// close details
					$('.details .caption .backlink')
							.click(
									function() {
										$('.back')
												.html(
														'Memuat... <img src="/images/loading.gif" width="26" height="26"></img>');
										$('.sunmorning').stop();
										$('.details').stop();
										$('.sunmorning').fadeOut('fast');
										$('.cloud1').hide();
										$('.cloud2').hide();
										$('.cloud3').hide();
										$('.cloud4').hide();
										hideBuildings();
										$('.cover').animate({
											left : "0",
										}, 1000);
										$('.header .headeroverlay').animate({
											opacity : "0.6",
										}, 500);
										var changeColor = window
												.setInterval(
														function() {
															$('.sunmorning')
																	.hide();
															$(
																	'.content .title .sub')
																	.css(
																			'visibility',
																			'visible');
															$(
																	'.content .title .subdate')
																	.css(
																			'visibility',
																			'visible');
															$(
																	'.content .title .subinput')
																	.css(
																			'visibility',
																			'visible');
															$(
																	'.content .title .main')
																	.animate(
																			{
																				fontSize : '80',
																				marginTop : '0',
																				marginLeft : '0'
																			},
																			500);
															$(
																	'.content .title .main')
																	.css(
																			'color',
																			'#000000');
															$(
																	'.header .headeroverlay')
																	.css(
																			'background-color',
																			'#000000');
															$('.details')
																	.animate(
																			{
																				top : '0'
																			},
																			500);
															$(
																	'.details .caption')
																	.animate(
																			{
																				left : '-250'
																			},
																			1500);
															$('.caption .main')
																	.bind(
																			'mouseenter',
																			onHover);
															$('.caption .main')
																	.bind(
																			'mouseleave',
																			unHover);
															$('.back')
																	.html(
																			'< Kembali');
															setTeaser();
															window.location.reload();
															clearInterval(changeColor);
														}, 3000);
									});
				});

function animateBuildings() {
	var time = getRandomInt(1000, 2000);
	/* BUILDINGS */
	var func1 = window.setInterval(function() {
		$('.rumahijo').animate({
			top : '400'
		}, 400);
		clearInterval(func1);
	}, time);
	time = getRandomInt(1000, 2000);
	var func2 = window.setInterval(function() {
		$('.rumahbiru').animate({
			top : '400'
		}, 400);
		clearInterval(func2);
	}, time);
	time = getRandomInt(1000, 2000);
	var func3 = window.setInterval(function() {
		$('.rumahroti').animate({
			top : '400'
		}, 400);
		clearInterval(func3);
	}, time);
	time = getRandomInt(1000, 2000);
	var func4 = window.setInterval(function() {
		$('.rumahpizza').animate({
			top : '400'
		}, 400);
		clearInterval(func4);
	}, time);
	time = getRandomInt(1000, 2000);
	var func5 = window.setInterval(function() {
		$('.rumahkecil').animate({
			top : '400'
		}, 400);
		clearInterval(func5);
	}, time);
	time = getRandomInt(1000, 2000);
	var func6 = window.setInterval(function() {
		$('.tugu').animate({
			top : '325'
		}, 400);
		clearInterval(func6);
	}, time);
	
	/*SPRITES*/
	time = getRandomInt(1000, 2000);
	var func13 = window.setInterval(function() {
		$('.worker').animate({
			top : '345'
		}, 400);
		clearInterval(func13);
	}, time);
	time = getRandomInt(1000, 2000);
	var func14 = window.setInterval(function() {
		$('.traveler').animate({
			top : '345'
		}, 400);
		clearInterval(func14);
	}, time);
	var func15 = window.setInterval(function() {
		$('.talk1').animate({
			left : '150'
		}, 400);
		clearInterval(func15);
	}, time);
	time = getRandomInt(1000, 2000);
	var func16 = window.setInterval(function() {
		$('.bossy').animate({
			top : '360'
		}, 400);
		clearInterval(func16);
	}, time);
	var func17 = window.setInterval(function() {
		$('.talk4').animate({
			left : '380'
		}, 400);
		clearInterval(func17);
	}, time);
	time = getRandomInt(1000, 2000);
	var func18 = window.setInterval(function() {
		$('.baker').animate({
			top : '350'
		}, 400);
		clearInterval(func18);
	}, time);
	var func19 = window.setInterval(function() {
		$('.talk2').animate({
			left : '600'
		}, 400);
		clearInterval(func19);
	}, time);
	time = getRandomInt(1000, 2000);
	var func20 = window.setInterval(function() {
		$('.wisuda').animate({
			top : '335'
		}, 400);
		clearInterval(func20);
	}, time);
	var func21 = window.setInterval(function() {
		$('.talk3').animate({
			left : '850'
		}, 400);
		clearInterval(func21);
	}, time);
	
	/* SHADOWS */
	time = getRandomInt(2000, 2500);
	var func7 = window.setInterval(function() {
		$('.gedung1').animate({
			top : '200'
		}, 400);
		clearInterval(func7);
	}, time);
	time = getRandomInt(2000, 2500);
	var func8 = window.setInterval(function() {
		$('.gedung2').animate({
			top : '250'
		}, 400);
		clearInterval(func8);
	}, time);
	time = getRandomInt(2000, 2500);
	var func9 = window.setInterval(function() {
		$('.gedung3').animate({
			top : '200'
		}, 400);
		clearInterval(func9);
	}, time);
	time = getRandomInt(2000, 2500);
	var func10 = window.setInterval(function() {
		$('.gedung4').animate({
			top : '200'
		}, 400);
		clearInterval(func10);
	}, time);
	time = getRandomInt(2000, 2500);
	var func11 = window.setInterval(function() {
		$('.gedung5').animate({
			top : '200'
		}, 400);
		clearInterval(func11);
	}, time);
	time = getRandomInt(2000, 2500);
	var func12 = window.setInterval(function() {
		$('.gedung6').animate({
			top : '200'
		}, 400);
		clearInterval(func12);
	}, time);
}

function hideBuildings() {
	var time = getRandomInt(2000, 2500);
	/* BUILDINGS */
	var func1 = window.setInterval(function() {
		$('.rumahijo').animate({
			top : '700'
		}, 400);
		clearInterval(func1);
	}, time);
	time = getRandomInt(2000, 2500);
	var func2 = window.setInterval(function() {
		$('.rumahbiru').animate({
			top : '700'
		}, 400);
		clearInterval(func2);
	}, time);
	time = getRandomInt(2000, 2500);
	var func3 = window.setInterval(function() {
		$('.rumahroti').animate({
			top : '700'
		}, 400);
		clearInterval(func3);
	}, time);
	time = getRandomInt(2000, 2500);
	var func4 = window.setInterval(function() {
		$('.rumahpizza').animate({
			top : '700'
		}, 400);
		clearInterval(func4);
	}, time);
	time = getRandomInt(2000, 2500);
	var func5 = window.setInterval(function() {
		$('.rumahkecil').animate({
			top : '700'
		}, 400);
		clearInterval(func5);
	}, time);
	time = getRandomInt(2000, 2500);
	var func6 = window.setInterval(function() {
		$('.tugu').animate({
			top : '700'
		}, 400);
		clearInterval(func6);
	}, time);
	
	/*SPRITES*/
	time = getRandomInt(1000, 2000);
	var func13 = window.setInterval(function() {
		$('.worker').animate({
			top : '900'
		}, 400);
		clearInterval(func13);
	}, time);
	time = getRandomInt(1000, 2000);
	var func14 = window.setInterval(function() {
		$('.traveler').animate({
			top : '900'
		}, 400);
		clearInterval(func14);
	}, time);
	var func15 = window.setInterval(function() {
		$('.talk1').animate({
			left : '-400'
		}, 400);
		clearInterval(func15);
	}, time);
	time = getRandomInt(1000, 2000);
	var func16 = window.setInterval(function() {
		$('.bossy').animate({
			top : '900'
		}, 400);
		clearInterval(func16);
	}, time);
	var func17 = window.setInterval(function() {
		$('.talk4').animate({
			left : '-400'
		}, 400);
		clearInterval(func17);
	}, time);
	time = getRandomInt(1000, 2000);
	var func18 = window.setInterval(function() {
		$('.baker').animate({
			top : '900'
		}, 400);
		clearInterval(func18);
	}, time);
	var func19 = window.setInterval(function() {
		$('.talk2').animate({
			left : '1400'
		}, 400);
		clearInterval(func19);
	}, time);
	time = getRandomInt(1000, 2000);
	var func20 = window.setInterval(function() {
		$('.wisuda').animate({
			top : '900'
		}, 400);
		clearInterval(func20);
	}, time);
	var func21 = window.setInterval(function() {
		$('.talk3').animate({
			left : '1400'
		}, 400);
		clearInterval(func21);
	}, time);
	
	/* SHADOWS */
	time = getRandomInt(1000, 2000);
	var func7 = window.setInterval(function() {
		$('.gedung1').animate({
			top : '900'
		}, 400);
		clearInterval(func7);
	}, time);
	time = getRandomInt(1000, 2000);
	var func8 = window.setInterval(function() {
		$('.gedung2').animate({
			top : '900'
		}, 400);
		clearInterval(func8);
	}, time);
	time = getRandomInt(1000, 2000);
	var func9 = window.setInterval(function() {
		$('.gedung3').animate({
			top : '900'
		}, 400);
		clearInterval(func9);
	}, time);
	time = getRandomInt(1000, 2000);
	var func10 = window.setInterval(function() {
		$('.gedung4').animate({
			top : '900'
		}, 400);
		clearInterval(func10);
	}, time);
	time = getRandomInt(1000, 2000);
	var func11 = window.setInterval(function() {
		$('.gedung5').animate({
			top : '900'
		}, 400);
		clearInterval(func11);
	}, time);
	time = getRandomInt(1000, 2000);
	var func12 = window.setInterval(function() {
		$('.gedung6').animate({
			top : '900'
		}, 400);
		clearInterval(func12);
	}, time);
}

var t = 0;

function setMorning() {
	if ($('.sunmorning').position().top < -199) {
		var night = setTimeout(function() {
			if (isNight == false) {
				setTimeout(function() {
					$('.buildings .rumahijo').css('background-image',
							"url('/images/night/Rumah ijo.png')");
					$('.buildings .rumahbiru').css('background-image',
							"url('/images/night/Rumah biru.png')");
					$('.buildings .rumahpizza').css('background-image',
							"url('/images/night/Rumah pizza.png')");
					$('.buildings .rumahroti').css('background-image',
							"url('/images/night/Rumah roti.png')");
					$('.buildings .rumahkecil').css('background-image',
							"url('/images/night/Rumah kecil.png')");
					$('.shadows .gedung1').css('background-image',
							"url('/images/night/Gedung1.png')");
					$('.shadows .gedung2').css('background-image',
							"url('/images/night/Gedung2.png')");
					$('.shadows .gedung3').css('background-image',
							"url('/images/night/Gedung3.png')");
					$('.shadows .gedung5').css('background-image',
							"url('/images/night/Gedung1.png')");
					$('.shadows .gedung6').css('background-image',
							"url('/images/night/Gedung3.png')");
				}, 5000);

				$('.details').animate({
					backgroundColor : jQuery.Color("rgba(37, 54, 82, 1)")
				}, 5000);
			}
			// change night building

			else if (isNight == true) {
				setTimeout(function() {
					$('.buildings .rumahijo').css('background-image',
							"url('/images/morning/Rumah ijo.png')");
					$('.buildings .rumahbiru').css('background-image',
							"url('/images/morning/Rumah biru.png')");
					$('.buildings .rumahpizza').css('background-image',
							"url('/images/morning/Rumah pizza.png')");
					$('.buildings .rumahroti').css('background-image',
							"url('/images/morning/Rumah roti.png')");
					$('.buildings .rumahkecil').css('background-image',
							"url('/images/morning/Rumah kecil.png')");
					$('.shadows .gedung1').css('background-image',
							"url('/images/morning/Gedung1.png')");
					$('.shadows .gedung2').css('background-image',
							"url('/images/morning/Gedung2.png')");
					$('.shadows .gedung3').css('background-image',
							"url('/images/morning/Gedung3.png')");
					$('.shadows .gedung5').css('background-image',
							"url('/images/morning/Gedung1.png')");
					$('.shadows .gedung6').css('background-image',
							"url('/images/morning/Gedung3.png')");
				}, 5000);

				$('.details').animate({
					backgroundColor : jQuery.Color("rgba(0, 133, 198, 1)")
				}, 5000);
			}

			setNight();
		}, 5000);

		return;
	}

	t += 0.05;
	var r = 200;
	var xcenter = 0;
	var ycenter = 0;
	var left = Math.floor(xcenter + (r * Math.cos(t)));
	var top = Math.floor(ycenter + (r * Math.sin(t)));
	$('.sunmorning').animate({
		top : top,
		left : left,
	}, 50, function() {
		setMorning();
	});
}

var isNight = false;
function setNight() {
	if ($('.sunmorning').position().top > 169) {
		if (isNight == false) {
			$('.sunmorning').css("background-image",
					"url('/images/night/Moon.png')");
			isNight = true;
		} else if (isNight == true) {
			$('.sunmorning').css("background-image",
					"url('/images/morning/sun.png')");
			isNight = false;
		}
		var night = setTimeout(function() {
			setMorning();
		}, 10);

		return;
	}

	t += 0.05;
	var r = 200;
	var xcenter = 0;
	var ycenter = 0;
	var left = Math.floor(xcenter + (r * Math.cos(t)));
	var top = Math.floor(ycenter + (r * Math.sin(t)));
	$('.sunmorning').animate({
		top : top,
		left : left,
	}, 50, function() {
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