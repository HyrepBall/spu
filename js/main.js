$(document).ready(function() {

	(function() {
		$('.about-graphic__toggle').click(function() {
			console.log(123)
			$('.about-graphic__hide').slideDown(300)
		})
	})();

	(function () {
		var form = $("form");
	    $.validator.messages.required = 'Обязательно для заполнения';
	    form.each( function() {
	        // _this = $(this);
	        $(this).validate({
	            errorClass: "-error",
	            validClass: "-valid"
	        });
	    });

	    form.submit (function(event) {
	        var _this = $(this);
	        if (_this.valid())
	        {
	        	objGA.send('save_order');
	        	objGA2.send('save_order');
	        	yaTarget.yandexTarget('save_order');
	            $.ajax({
	                type: _this.attr("method"),
	                url: _this.attr("action"),
	                data: _this.serialize(),
	                success: function(data) {
	                    console.log(data);
	                    _this.find("button").text("Успешно");
	                    _this
	                        .find("button")
	                        .prop('disabled', true);
	                    _this[0].reset();
	                    _this.find("div.form").css({'display': 'none'});
	                    _this.find("p.success").css({'display': 'block'});
	                }
	            });
	        }
	        event.preventDefault();
	    });
	})();



	if( $(window).width() < 900 ) {
	    $('.navi-li a').click(function () {
	    	$('#burger').toggleClass('open');
			$('.navi').toggleClass('nav-fix');
	    });
	};

	(function () {
		var stickyOffset = $('.navi').offset().top;

		$(window).scroll(function(){
		  var sticky = $('.navi'),
		      scroll = $(window).scrollTop();

		  if (scroll >= stickyOffset) sticky.addClass('sticky');
		  else sticky.removeClass('sticky');
		});
	})();

	$('.type-radio').change(function () {
		$('.radio-body').fadeOut(200);
		$(this).siblings('.radio-body').fadeIn(200);
	});

	$('[popup-trigger="map"]').click(function (e) {
		e.preventDefault;
		$('[popup-index="map"]').fadeIn(450);
	    $('[popup-index="map"]').find('.popup-box-1').addClass('popup-effect');
	});

	$('[popup-trigger="login"]').click(function (e) {
		e.preventDefault;
		$('[popup-index="login"]').fadeIn(450);
	    $('[popup-index="login"]').find('.popup-box-1').addClass('popup-effect');
	});

	$('[popup-trigger="1"]').click(function () {
		var actionType = $(this).data('an');
		objGA.send(actionType);
		objGA2.send(actionType);
		yaTarget.yandexTarget(actionType);
		
	    $('[popup-index="1"]').fadeIn(450);
	    $('[popup-index="1"]').find('.popup-box-1').addClass('popup-effect');
	  });

	$('[popup-trigger="2"]').click(function () {
		var actionType = $(this).data('an');
		objGA.send(actionType);
		objGA2.send(actionType);
		yaTarget.yandexTarget(actionType);
		
	  $('[popup-index="2"]').fadeIn(450);
	  $('[popup-index="2"]').find('.popup-box-1').addClass('popup-effect');
	});

	$('[popup-trigger="3"]').click(function () {
		var actionType = $(this).data('an');
		objGA.send(actionType);
		objGA2.send(actionType);
		yaTarget.yandexTarget(actionType);
		
	  $('[popup-index="3"]').fadeIn(450);
	  $('[popup-index="3"]').find('.popup-box-1').addClass('popup-effect');
	});

  $('.popup-closearea, .popup-kick').click(function () {
    $(this).closest('.popup-wrap').fadeOut(450);
    $(this).closest('.popup-wrap').find('.trigger-effect').removeClass('popup-effect');
  })

	$('#burger').click(function(){
		$(this).toggleClass('open');
		$('.navi').toggleClass('nav-fix');
	});

	$('.comments-slider').tabslet({
		attribute: 'alt',
		animation: true,
		controls:     {
			prev: '.prev-com',
			next: '.next-com'
		}
	});

	$('.prices-slider').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1400,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 950,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 710,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 500,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		  ],
	});



   /*scrollToLink*/
	$('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
	   var desc = $(this).data('desc');
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
       if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	   $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); // анимируем скроолинг к элементу scroll_el
       }
       
	   return false; // выключаем стандартное действие
   });

});

yaTarget = {
	yandexTarget: function(event) {
		try {
			yaCounter45046586.reachGoal(event);
		}
		catch(e) {}
	}
};

objGA = {
	send: function(event) {
		try {
			console.log(event);
			ga('send', {
				hitType: 'event',
				eventAction: event
			});
		}
		catch(e) {}
	}
}

objGA2 = {
	send: function(event) {
		try {
			ga('send', 'event', 'buttons', event);
		}
		catch(e) {}
	}
}