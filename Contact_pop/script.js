     <!-- CONTACT TOGGLE NAVIGATION -->
      $(document).ready(function() {
           var navwidth = ($("#contact_form").width());
                $(".contact_show").click(function() {
                $("#contact_form").fadeIn(0).animate({marginRight: "0px"},0),
                $(".close").fadeIn(300),
                $(".site").animate({"left": - (navwidth - 30)}, 370),
                $(".contact_show");
      });
        
        $("#contact_form").click(function() {
            var navwidth = ($("#contact_form").width());
                $(".site").delay(500).animate({"left": 0}, 750),
                $("#contact_form").delay(200).animate({marginRight: - navwidth}, 400),
                $(".contact_show").delay(100).fadeIn(300);
        });
        
        $(".close_navigation").click(function() {
            var navwidth = ($("#contact_form").width());
                $("#contact_form").animate({marginRight: - navwidth}, 50).fadeOut(1000),
                $(".close").fadeOut(400),
                $(".site").animate({"left": 0}, 500),
                $(".contact_show").delay(450).fadeIn(600);
        });
    });