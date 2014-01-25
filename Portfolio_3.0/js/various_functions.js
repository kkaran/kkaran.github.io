<!-- LOGO SCALING -->
	$(document).ready(function(){
	 $(window).scroll(function(){
	  // get the height of #cover_home
	  var h = $("#splash").outerHeight();
	  var y = $(window).scrollTop();
	  if( y > (h*0.25) ){
	   // if we are show keyboardTips
		   $(".scrollbutton").fadeOut(200);
	  } else {
		   $(".scrollbutton").fadeIn(200);
	  }
	 });
	})	
	
	$(document).ready(function() {
		$(".cover_text_home").hide().delay(100).fadeIn(600),
		$(".show_navigation").hide().delay(300).fadeIn(600),
		$(".home_scrollbutton").hide().delay(500).fadeIn(600);
	}); 
	  
	  <!-- NAVIGATION TOGGLE -->
	  $(document).ready(function() {
	  	   var navwidth = ($("#navigation").width());
				$(".show_navigation").click(function() {
				$("#navigation").fadeIn(0).animate({marginRight: "0px"},0),
				$(".close_navigation").fadeIn(300),
				$(".site").animate({"left": - (navwidth - 30)}, 370),
				$(".show_navigation").fadeOut(500);
	  });
		
		$("#navigation li").click(function() {
			var navwidth = ($("#navigation").width());
				$(".site").delay(500).animate({"left": 0}, 750),
				$("#navigation").delay(200).animate({marginRight: - navwidth}, 400).fadeOut(1000),
				$(".close_navigation").delay(600).fadeOut(300),
				$(".show_navigation").delay(100).fadeIn(300);
		});
		
		$(".close_navigation").click(function() {
			var navwidth = ($("#navigation").width());
				$("#navigation").animate({marginRight: - navwidth}, 50).fadeOut(1000),
				$(".close_navigation").fadeOut(400),
				$(".site").animate({"left": 0}, 500),
				$(".show_navigation").delay(450).fadeIn(600);
		});
	});
		
	$(document).ready(function() {
		$(".show_details").mouseenter(function() {
			$(this).children("em").animate({"top": "-6px"}, 50);
		}),
		$(".show_details").mouseleave(function() {
			$(this).children("em").animate({"top": "0px"}, 50);
		});
	});
	



	