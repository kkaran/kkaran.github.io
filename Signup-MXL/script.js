function nextPage(curDiv, nextDiv){
$(curDiv).css('display', 'none');
$(nextDiv).css('display', 'block').delay(5000);
}


$('nextButtonOne').on('click', nextPage('.tomIsAwesomeOne', '.tomIsAwesomeTwo'));
$('nextButtonTwo').on('click', nextPage('.tomIsAwesomeTwo', '.tomIsAwesomeThree'));
$('nextButtonTwo').on('click', nextPage('.tomIsAwesomeThree', '.tomIsAwesomeFour'));

