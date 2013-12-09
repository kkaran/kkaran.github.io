function nextPage(curDiv, nextDiv){
$(curDiv).hide();
$(nextDiv).show(0).delay(5000);
}


$('nextButtonOne').on('click', nextPage('.tomIsAwesomeOne', '.tomIsAwesomeTwo'));
$('nextButtonTwo').on('click', nextPage('.tomIsAwesomeTwo', '.tomIsAwesomeThree'));
$('nextButtonTwo').on('click', nextPage('.tomIsAwesomeThree', '.tomIsAwesomeFour'));

