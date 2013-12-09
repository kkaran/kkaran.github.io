/*--
function nextPage(curDiv, nextDiv){
$(curDiv).css('display', 'none');
$(nextDiv).css('display', 'block');
}
author:Tom Benneche class="tomIsAwesome"
*/


function nextPage(curDiv, nextDiv){

	if ($('#oneone').is(':visible')){
		curDiv = $('#oneone');
		nextDiv = $('#twotwo');
		
	} 
	if ($('#twotwo').is(':visible')){
		curDiv = $('#twotwo');
		nextDiv = $('#threethree');
	} 
	if ($('#threethree').is(':visible')){
		curDiv = $('#threethree');
		nextDiv = $('#fourfour');
	} 
	if ($('#fourfour').is(':visible')){
		curDiv = $('#fourfour');
		nextDiv = $('#fivefive');
	} 

	
	
	$(nextDiv).slideDown(1000);
	$(curDiv).slideUp(1000);

}


$(function() {
  $('.nextButtonOne').click(nextPage);

$('.nextButtonTwo').click(nextPage);

$('.nextButtonThree').click(nextPage);

$('.nextButtonFour').click(nextPage);

});
