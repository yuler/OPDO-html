$(function(){

	// $('select.select2').select2();

	$('.bs3-datepicker').datepicker({
		language: 'zh-CN',
		autoclose : true,
		format: 'yyyy-mm-dd',
		// endDate : '2013-02-02'
	})

	$('.raty').raty({ 
		starType: 'i',
		hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
		starOff: 'fa fa-star-o',
		starOn: 'fa fa-star',
	});
	


});
_V_("podo_video_1").ready(function(){

	// Store the video object
	var myPlayer = this; 
	// Make up an aspect ratio
	var aspectRatio = 9/16; 
	function resizeVideoJS(){
		var width = document.getElementById(myPlayer.id).parentElement.offsetWidth;
		myPlayer.width(width - 30).height( width * aspectRatio );
	}
	// Initialize resizeVideoJS()
	resizeVideoJS();
	// Then on resize call resizeVideoJS()
	window.onresize = resizeVideoJS; 

});
