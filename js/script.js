$('.page-scroll').on('click', function(e){

	var ambil = $(this).attr('href');

	var elemenTujuan = $(ambil);

	$('html,body').animate({
		scrollTop : elemenTujuan.offset().top-50
	},1000,'swing');

	e.preventDefault();

});

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0, '+wScroll/3+'%)'
	});

	$('.jumbotron h2').css({
		'transform' : 'translate(0, '+wScroll/.7+'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0, '+wScroll/.7+'%)'
	});


	if(wScroll > $('.portfolio').offset().top-300){

		$('.portfolio .thumbnail').each(function(i){

			setTimeout(function(){

				$('.portfolio .thumbnail').eq(i).addClass('muncul_thumbnail');

			},300*i);

		});


	};

});

$(window).on('load', function(){

	$('.pkiri').addClass('pkiri_muncul');
	$('.pkanan').addClass('pkanan_muncul');

});