$(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
})


/*remove active nav class*/

$(window).on('load', function(){
	$('header nav a').click(function(link) {
  		link.preventDefault();
  		$('header nav a').removeClass('active');
  		$(this).addClass('active');	
	})
});



/*if ( display === true ) {
  $( 'header nav a' ).show();
} else if ( display === false ) {
  $( 'header nav a' ).hide();
}*/


/*Toggle slide .about-agency & toggle text .scroll up&down*/

$(window).on('load', function(){
	$('.material-icons').click(function(){
		$('.about-agency').slideToggle('slow', function(){
			$('#scrollUp').toggle();
			$('#scrollDown').toggle();
		});
	})
});
