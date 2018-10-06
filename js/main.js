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


/*Social show & hide*/

$(window).on('load', function(){
  $('.swap').click(function(){
    $('.socialIcon').toggle();
    $('.menu').toggle();
    $('.border').toggle();
    $('.border1').toggle();
  })
})


if (screen.width <= 425) {
  $('header').attr('style', 'height: 325px !important');
  $('body').attr('style', 'max-width: 425px !important;');
  $('.logo').attr('style', 'top: 29px !important;');
  $('.scrollUp').attr('style', 'font-size: 14px !important;');
  $('.scrollDown').attr('style', 'font-size: 14px !important;');
} else if (screen.width <=375) {
  $('header nav').attr('style', 'font-size: 7px !important;');
} else if (screen.width <=320) {
  alert('More than 960');
}




// function screenClass() {
//     if($(window).innerWidth() > 425) {
//       $('header').attr('style', 'height: 353px !important');
//     }
//   }




/*if ( display === true ) {
  $( 'header nav a' ).show();
} else if ( display === false ) {
  $( 'header nav a' ).hide();
}*/


/*Toggle slide .about-agency & toggle text .scroll up&down*/

$(window).on('load', function(){
	$('.scroll .material-icons').click(function(){
		$('.about-agency').slideToggle('slow', function(){
			$('#scrollUp').toggle();
			$('#scrollDown').toggle();
		});
	})
});
