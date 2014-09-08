	/******************** SVG CrossBrowser FIX by m66design */
$( document ).ready(function() {	
	$('svg').each(function(){
		var viewbox = this.getAttribute('viewBox');
		var elwidth = $(this).width();
		var viewboxArr = viewbox.split(" ");
		var elNewHeight = (elwidth * viewboxArr[3] / viewboxArr[2]);
		$(this).attr({
			'width' : elwidth,
			'height' : elNewHeight
		}).css({
			'width' : elwidth,
			'height' : elNewHeight
		});
	});
});