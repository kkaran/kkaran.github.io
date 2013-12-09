/*--
function nextPage(curDiv, nextDiv){
$(curDiv).css('display', 'none');
$(nextDiv).css('display', 'block');
}
*/


function nextPage(curDiv, nextDiv){
$(curDiv).hide();
$(nextDiv).show(0).delay(5000);
}


$('nextButtonOne').on('click', nextPage('.tomIsAwesomeOne', '.tomIsAwesomeTwo'));
$('nextButtonTwo').on('click', nextPage('.tomIsAwesomeTwo', '.tomIsAwesomeThree'));
$('nextButtonThree').on('click', nextPage('.tomIsAwesomeThree', '.tomIsAwesomeFour'));
$('nextButtonFour').on('click', nextPage('.tomIsAwesomeFour', '.tomIsAwesomeFive'));
