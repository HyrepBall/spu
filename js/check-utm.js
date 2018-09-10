(function () {
	var url = window.location.href; // or window.location.href for current url
	console.log();
	if ( url.indexOf('utm_campaign') !== -1 ) {
		checkUTM();
	}
	function checkUTM () {
	    var captured = /utm_campaign=([^&]+)/.exec(url)[1]; 
	    var result = captured;
	    if ( result === 'window-1' ) {
	    	$('.promo').show();
	    	$('.promo2').hide();
	    } else if ( result === 'window-2' ) {
	    	$('.promo').hide();
	    	$('.promo2').show();
	    }
	}
})();