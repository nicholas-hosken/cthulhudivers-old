function effects() {   

	checkScroll();
	$(window).scroll(function() {
		checkScroll();
	});
	checkSize();
	$(window).resize(function() {
		checkSize();
	});
	$('.banners').waitForImages({
		waitForAll: true,
		finished: function() {
			$('.banner').show();	
			$('.loader').hide();	
			$('.banners').css('background-color','#fff');	
			banners();
		}
	});
	$('.menu-link').hover(function() {
		$(".menuOptionsTools",this).css('display', 'block').css('opacity', '0');
		$(".menuOptionsTools",this).stop(true,true).animate({ top: '75px', opacity: '1'}, 300);
	}, function() {
		$(".menuOptionsTools",this).stop(true,true).animate({ top: '65px', opacity: '0'}, 100, function() {
			$(this).css('display', 'none');
		});
	})
	$('.menu-link:not(.active)').hover(function() {
		$('.link-line',this).css('opacity','0').stop().animate({ width: '100%',opacity: '1'}, 400);
	}, function() {
		$('.link-line',this).stop().animate({ width: '0px'}, 400); 
	})
}
function checkScroll() {
	var scroll = $(window).scrollTop();
	if (scroll < 0) {
		$('.menu').css('background','rgba(0,0,0,0.5)');
	} else {
		var opacity = (scroll) + 200;
		var height = $(window).height() / 2;
		opacity = opacity / (height+200);
		if (opacity > 0.8) { opacity = 0.8; }
		$('.menu').css('background','rgba(0,0,0,'+opacity+')');
	}
}

function checkSize() {
	height = $(window).height();
	$('.mobile-menu').css('height',height+'px')
	var newheight = height - 470;
	if (newheight < height / 2) { newheight = height / 2; }
	newheight = height - 80;
	$(".banner").css('height',newheight+'px');
	$(".banners").css('height',newheight+'px');
	
	
	height = $(window).height();
	$('.home-image').css('height',height+'px');
	var titleheight = $('.home-title').height();
	var newheight = (height / 2) - (titleheight/2);
	if (newheight < 80) { newheight = 80; }
	$('.home-title').css('top',newheight+'px');
	
	$('.content-image').css('height',(height/2)+'px');
	$('.content-title').css('top',(((height/2)/2) - 50)+'px');
}
var timer;
function banners() {
	var x = 0;
	$('.banners .banner').each(function () {
		x++;
		$(this).attr("rel",x);
		$(this).attr("id","banner-"+x);
		$('.dots').append('<a href="javascript:;" onClick="scrollBanner('+x+')"><div class="dot" id="dot-'+x+'"></div></a>');
	});
	$('#dot-1').addClass('active');
	$('.banners').attr('banners',x);
	timer = setTimeout(scrollBanner, 2000);
}
function scrollBanner(next) {
	var id = $('.banner.active').attr("rel");
	var active = $('#banneractive').val();
	if ((!next || next != id) && active=='0') {
	
		$('.dot').removeClass('active');
		
		$('#banneractive').val('1');
		$('.banner.active').addClass('transition');
		$('.banner.active').removeClass('active');
		if (!next) {
			var next = (id*1) + 1;
		}
		var banners = $('.banners').attr('banners');
		if (next > banners) { next = 1; }
		$("#banner-"+next).addClass('active');
		clearTimeout(timer);
		$('#dot-'+next).addClass('active');
		$('.banner.transition').fadeOut(1000, function() {
			$(this).removeClass('transition');
			$(this).show();
			clearTimeout(timer);
			timer = setTimeout(scrollBanner, 2000);
			$('#banneractive').val('0');
		});
	}
}