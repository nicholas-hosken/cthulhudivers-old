$(document).ready(function() {	
	reset();
});
function reset() {
	effects();
	validate();

	$('.hide').hide();
	
	$('.focusBox').focus();
	
	$(".menuOptions").mouseenter(function () {
		$(".menuOptionsTools",this).stop(true,true).slideDown(200);
	});
	$(".menuOptions").mouseleave(function () {
		$(".menuOptionsTools",this).stop(true,true).slideUp(20);
	});
	$('.imagebox').magnificPopup({ 
		type: 'image',
		gallery: {
			enabled: false,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

}

function showMenu(x) {
	var status=$(".menu-mobile").css('display');
	if (status == 'none') { 
		$('.menu-mobile').show("slide", { direction: "left" }, 200);
	}
	else { 
		$('.menu-mobile').hide("slide", { direction: "left" }, 200);		
	}
}