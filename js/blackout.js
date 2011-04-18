$(document).ready(function (){
	// 1 line for each element you want to fade in. Adjust delay times in miliseconds (ms).
	$('section').find('article').delay(1000).fadeIn(1);
	$('section').find('div').delay(1000).fadeIn(2000);
	$('section').find('p').delay(3000).fadeIn(2000);
	$('body').find('article').delay(4000).fadeIn(2000);
	$('section').delay(6000).fadeOut(2000);
});