function validate() {

	function isNumeric(input,type) {
		if (type == 1) { var number = /^\+{0,1}(?:[0-9]+){0,1}(?:\.[0-9]+){0,1}$/i; }
		else { var number = /^\-{0,1}(?:[0-9]+){0,1}(?:\.[0-9]+){0,1}$/i; }
		var regex = RegExp(number);
		return regex.test(input) && input.length>0;
	}$('.validate input').focus(function () {
			$(this).removeClass('red');
			$(this).removeClass('green');
			var parent = $(this).parent().parent();	
			$("#msgBar").slideUp(200);	
	});
	
	$('.validate .validate-integer').blur(function () {
		var parent = $(this).parent().parent();
		var text = $(this).val();
		if (!isNumeric(text,0)) {
			$('.validate-image', parent).html('<img src="img/buttons/cross.html">');
			$('.validate-msg', parent).html('Invalid input');
			$(this).attr('validated','false');
			$(this).removeClass('green');
			$(this).addClass('red');	
		} else {
			$('.validate-image', parent).html('<img src="img/buttons/tick2.html">');
			$('.validate-msg', parent).html('');
			$(this).attr('validated','true');	
			$(this).removeClass('red');
			$(this).addClass('green');	
		}
	});
	$('.validate .validate-positive-integer').blur(function () {
		var parent = $(this).parent().parent();
		var text = $(this).val();
		if (!isNumeric(text,1)) {
			$('.validate-image', parent).html('<img src="img/buttons/cross.html">');
			$('.validate-msg', parent).html('Invalid input');
			$(this).attr('validated','false');
			$(this).removeClass('green');
			$(this).addClass('red');	
		} else {
			$('.validate-image', parent).html('<img src="img/buttons/tick2.html">');
			$('.validate-msg', parent).html('');
			$(this).attr('validated','true');	
			$(this).removeClass('red');
			$(this).addClass('green');	
		}
	});
	$('.validate .validate-required').blur(function () {
		var parent = $(this).parent().parent();
		var text = $(this).val();
		if (text.length < 1) {
			$('.validate-image', parent).html('<img src="img/buttons/cross.html">');
			$('.validate-msg', parent).html('That is a required field');
			$(this).attr('validated','false');
			$(this).removeClass('green');
			$(this).addClass('red');	
		} else {
			$('.validate-image', parent).html('<img src="img/buttons/tick2.html">');
			$('.validate-msg', parent).html('');
			$(this).attr('validated','true');	
			$(this).removeClass('red');
			$(this).addClass('green');	
		}
	});
	$('.validate .validate-select').change(function () {
		$(this).blur();
	});
	$('.validate .validate-select').blur(function () {
		var parent = $(this).parent().parent();
		var text = $(this).val();
		if (text < 1) {
			$('.validate-image', parent).html('<img src="img/buttons/cross.html">');
			$('.validate-msg', parent).html('That is a required field');
			$(this).attr('validated','false');
			$(this).removeClass('green');
			$(this).addClass('red');
		} else {
			$('.validate-image', parent).html('<img src="img/buttons/tick2.html">');
			$('.validate-msg', parent).html('');
			$(this).attr('validated','true');	
			$(this).removeClass('red');
			$(this).addClass('green');	
		}
	});
	$('.validate-form').submit(function () {
		var lyte = '';
		var validate = true;
		$('.required', this).each(function(index) {
			$(this).blur();
			if ($(this).attr('validated') == 'false') { validate = 'false'; }
		});
		var attr = $(this).attr('lytebox');
		if (attr == 'on') { lyte = 'Box'; }
		if (validate == 'false') {
			var status = $('#msgBar'+lyte).css('display');
			if (status == 'none') { 
				$('#msgText'+lyte).html('<b>Error</b>: You have not completed all the necessary fields.');
				$("#msgBar"+lyte).addClass('red');
				$("#msgBar"+lyte).hide();
				$("#msgBar"+lyte).slideDown(100);
			}
			return false;
		}
	});	
	$(".integer-only").keyup( function() {		
		var num = $(this).val();
		m = num.match(/[^\d]/g,'');
		if (m != null) {
			num = num.replace(/[^\d]/g,'');		
			$(this).val(num);
		}
	});
	$(".number-only").keyup( function() {		
		var num = $(this).val();
		m = num.match(/[^\d\ ]/g,'');
		if (m != null) {
			num = num.replace(/[^\d\ ]/g,'');
			$(this).val(num);
		}
	});
	$(".text-only").keyup( function() {		
		var num = $(this).val();
		m = num.match(/[^\D]/g,'');
		if (m != null) {
			num = num.replace(/[^\D]/g,'');
			$(this).val(num);
		}
	});
}