function ajaxFunction(x){
	$.get('/'+ajaxVar+"&pg="+pg, function(data) {
		reset();
	});
}
function GetCart(){
	var display = $('.cart-box').css('display');
	if (display == 'none') {	
		$.get('/ajax/get-cart', function(data) {
			$('.cart-box').html(data);
			$('.cart-box').fadeIn(300);
		});	
	} else {
		$('.cart-box').fadeOut(300);
	}
}