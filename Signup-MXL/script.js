	

$('next-button').on('click', function(){

			    $(".tomIsAwesome")({
			        fx : "scrollVert",
			        next : ".moveUp a",
			        prev : ".moveDown a",
			        startingSlide : 1,
			        timeout : 0
			    });
			  });


$('current-div').hide();
$('next-div').show(0).delay(5000);
});