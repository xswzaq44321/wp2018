var $doc = $('.flex-container');
var $object = $('body');
var background_img_height;
var url = $('body').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '');
var bgImg = $('<img />');

bgImg.hide();
bgImg.bind('load', function () {
	background_img_height = $(this).height();
});
$('body').append(bgImg);
bgImg.attr('src', url);
$('.flex-container').scroll(function () {
	var from_top = $doc.scrollTop(),
		total_height = $doc.prop("scrollHeight"),
		bg_css = '0px ' + (-from_top / total_height * background_img_height) + 'px';XMLDocument
	$object.css({ "background-position": bg_css });
});