$(document).ready(function(){
	
	 $.get( "stream.php?feedtype=lite", function( data ) {
	$( "#photo-wall").html( data );
		$("img").addClass('inactiveImage');
	$("#welcome-overlay").click(function(){

	$("#welcome-overlay").hide( "slow" );
	$("body").css("overflow","visible");
	});
	
	
	
	$("img").click(function(){
	var widthOfImage = $(this).width();
	if(widthOfImage <= 381){
		$(this).width("100%");
		$(this).height("100%");
		$(this).toggleClass('inactiveImage activeImage');
		$(".inactiveImage").hide( "slow" );
	}else{
		$(this).width("20%");
		$(this).height("200px");
				$(this).toggleClass('activeImage inactiveImage');
		$(".inactiveImage").show( "slow" );
	}
	console.log(widthOfImage);
	});
		
	//Reload the page manually
	$(".reload-icon").click(function(){
	$.get( "stream.php?feedtype=lite", function( data ) {
	$( "#photo-wall").html( data );
		$("img").addClass('inactiveImage');
		});	
	});

	});
		
		
	

});