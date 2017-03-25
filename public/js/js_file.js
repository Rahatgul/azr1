// JavaScript Document
$(document).ready(function () {
	$('.toggle-nav').click(function () {
		$(this).toggleClass('active');
		$('nav ul').toggleClass('active');
	});
});

$(document).ready(function (e) {
	$(':button').bind('mouseenter mouseleave', function () {
		$(this).toggleClass('color');
				});
});


$(document).ready(function (e) {
	$('div .btn_our-mission').bind('mouseenter mouseleave', function () {
		$('.btn-color').slideToggle();
	});

});


$(document).ready(function () {

	var pathName = window.location.pathname
	if(pathName){
		pathName = pathName.toLowerCase();
		if(pathName == "/contactform.html"){
			setTimeout(function(){
				if(!isTransactionFailed){
					window.location.href = "https://azrkhanresources.com/index.html";
				}
			}, 3000);
		}
	}

	$('.check_btn').change(function () {
		if ($('.check_btn').is(':checked')) {
			$('.cnfrn_btn').removeAttr('disabled', 'disabled').addClass('pay_btn_aftr');
		}
		else {
			$('.cnfrn_btn').attr('disabled', 'disabled').removeClass('pay_btn_aftr');
		}
	});


	$(".select_currency").on("change", function(){
		var selectedVal = $(this).val();
		$("#CurrencyCode").val(selectedVal);
	});

	$("#btn_submitPaymentMethodForm").on("click", function () {
		$("#CustName").val($(".txtUserName").val().trim());
		$("#CustEmail").val($(".txtUserEmail").val().trim());
		$("#CustPhone").val($(".txtUserPhone").val().trim());
		$("#PaymentID").val(Date.now());
		var enteredPayment = Number($(".txtUserPayment").val().trim());
		var selectedCurrency = $(".select_currency").val();
		if(!enteredPayment){
			alert("Action denied, please enter a valid number in payment field.");
			return $(".txtUserPayment").focus();
		}
		if(!selectedCurrency){
			alert("Action denied, please select a currency.");
			return $(".select_currency").focus();
		}

		$("#Amount").val(parseInt(enteredPayment) + ".00");
		
		var str = "9Mv2OTA6" + $("#ServiceID").val()+ $("#PaymentID").val() + $("#MerchantReturnURL").val() + $("#MerchantCallbackURL").val() + $("#Amount").val() + $("#CurrencyCode").val() + $("#CustIP").val() + $("#PageTimeout").val()
		//var str = "akr12345" + $("#ServiceID").val()+ $("#PaymentID").val() + $("#MerchantReturnURL").val() + $("#MerchantCallbackURL").val() + $("#Amount").val() + $("#CurrencyCode").val() + $("#CustIP").val() + $("#PageTimeout").val()

		$("#HashValue").val(SHA256(str));
		$("#paymentDataForm").submit();

	});
});

$(document).ready(function () {

	var pathName = window.location.pathname;
	if(pathName){
		if(pathName.match("/service.html", "gi") ){
			localStorage.removeItem("selectedServiceAmmount");
		}
	}



	$('#web_des').css('background-color', '#191919');
	$('.left_nav ul li').bind('click', function () {
		$('.left_nav ul li').css('background-color', 'Gray')
		$(this).css('background-color', '#191919');

	});

	$(document).on("click", ".anchor_approvePayment", function(){
		//selectedServiceAmmount		
		var selectedServiceAmmount = $(this).attr("data-code");
		if(selectedServiceAmmount){
			localStorage.setItem("selectedServiceAmmount", selectedServiceAmmount);	
			window.location.href = "/contactform.html";	
		}
	});

});  /*--------------services lists colors--------------------*/



/*--------------image gallery--------------------*/
$(document).ready(function () {
	$('.our_servic-box').hover(function () {
		$(this).find('.effect').stop().slideToggle('slow').animate(2000);
		$(this).find('.hover_btn').stop().slideToggle('slow');
				});
});


$(document).ready(function () {
	$('#hover').hover(function () {
		$(this).find('.btn-color').slideToggle();
				});
});


$(document).ready(function() {
	$('.img_box').hover(function(){
		$(this).find('.project_hover').stop().slideToggle('slow').animate(2000);
		});
});


$(document).ready(function () {
	$('div #input_btn').bind('mouseenter mouseleave', function () {
		$('.btn_hover').slideToggle();
	});

});

$(document).ready(function () {
	$('div #input_btn').mouseenter(function (e) {
		$('#input_btn p').css('color', 'white');
	});

				$('div #input_btn').mouseleave(function (e) {
		$('#input_btn p').css('color', 'black');
	});
});


$(document).ready(function () {
	$("#web_dev").click(function () {
		$('#hide1,#hide7,#hide8,#hide9,#hide10,#hide11').hide();
		$('#hide2').fadeIn();
	});

	$("#web_des").click(function () {
		$('#hide2,#hide7,#hide8,#hide9,#hide10,#hide11').hide();
		$('#hide1').fadeIn();
	});


});

$(document).ready(function () {
	$("#w_app").click(function () {
		$("#hide1,#hide2,#hide8,#hide9,#hide10,#hide11").hide();
		$('#hide7').fadeIn();
	});
});

$(document).ready(function () {
	$("#graphic").click(function () {
		$("#hide1,#hide2,#hide7,#hide9,#hide10,#hide11").hide();
		$('#hide8').fadeIn();
	});
});


$(document).ready(function () {
	$("#seo").click(function () {
		$("#hide1,#hide2,#hide7,#hide8,#hide10,#hide11").hide();
		$('#hide9').fadeIn();
	});
});



$(document).ready(function () {
	$("#softw").click(function () {
		$("#hide1,#hide2,#hide7,#hide8,#hide9,#hide11").hide();
		$('#hide10').fadeIn();
	});
});


$(document).ready(function () {
	$("#mob_app").click(function () {
		$("#hide1,#hide2,#hide7,#hide8,#hide9,#hide10").hide();
		$('#hide11').fadeIn();
	});
});