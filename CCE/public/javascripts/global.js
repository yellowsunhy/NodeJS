$(function(){
	// $('#search_box').hint();
	$('body').prepend('<div class="probe" style="position:fixed;top:200px;z-index:1000;"></div>')
	$(window).resize(function(){
		console.log($(window).width())
		$('.probe').html($(window).width())
	})
});