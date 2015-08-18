

//Progress Bar Js --- //  
	$(document).ready(function() {
		$('progress').attr ({
			max: $(document).height() - $(window).height()
		});
	});

	$(document).scroll (function() {
		$('progress').attr({
	        value: $(window).scrollTop()
	      });
	});

	$(document).resize (function() {
		$('progress').attr({
	        max: $(document).height() - $(window).height(),
	        value: $(window).scrollTop()
	      });
	});

// Time of Day Js --- 
	$(document).ready(function() {
		sayHello();
		setInterval('sayHello()', 10000);
		});

	function sayHello() {
		var now = new Date();
		var month = now.getMonth();
		var date = now.getDate();
		var hours = now.getHours();
		var msg;
		if (hours < 12) {
		   	msg = "good morning.";
		} else if (hours < 18) {
		   	msg = "good afternoon.";
		} else {
		  	msg = "good evening.";
		}
		$('#header_hello h2').text(msg);
		}

