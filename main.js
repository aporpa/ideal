$(function() {
	$("#map").click(function(){
		$("html, body").animate({ scrollTop: $('#onmap').offset().top }, 500);
	});
	$("#prices").click(function(){
		$("html, body").animate({ scrollTop: $('#onprices').offset().top }, 500);
	});
	$("#faq").click(function(){
		$("html, body").animate({ scrollTop: $('#onfaq').offset().top }, 500);
	});
	$("#deals").click(function(){
		$("html, body").animate({ scrollTop: $('#ondeals').offset().top }, 500);
	});
});