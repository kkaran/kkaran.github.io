	<!-- LOGO SCALING -->
	$(document).ready(function(){
	 $(window).scroll(function(){
	  // get the height of #cover_home
	  var h = $(".cover_home").outerHeight();
	  var y = $(window).scrollTop();
	  if( y > (h*0.35) ){
	   // if we are show keyboardTips
		   $(".home_scrollbutton").fadeOut(300);
	  } else {
		   $(".home_scrollbutton").fadeIn(300);
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
	
	$(document).ready(function() {
		$(".scroll").click(function() {
			$(".scroll").addClass("active");
		});
	});
	
	$(document).ready(function() {
		if (window.location.href.match("http://www.timbrack.de/#arbeiten")) {
			$(".scroll").addClass("active");
		} 
		else {
		}
	});

	<!-- SMOOTH SCROLLING -->
	$(document).ready(function() {
		$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
		});
	});
	
	<!-- SMOOTH SCROLLING LIVE -->
	 $(document).ready(function() {
		$(".scroll").live('click', function(event) {		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
		});
	});
		
	  $(document).ready(function() {
		$(".page_item_has_children").mouseover(function() {
			$(this).children(".children").fadeIn();
		})
	  });