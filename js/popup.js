$(function() {
	var random = Math.floor(Math.random()*$("p").length);
	$("p").eq(random).show();
});