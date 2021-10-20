$(function() {
	$('.main-bd-l li').click(function(event) {
		$(this).children().addClass('current');
		$(this).siblings('li').children().removeClass('current');
	});
	var num=0;
	var numj=0;
	var timer=null;
	timer=setInterval(fun,3000);
	function fun(){
		num++;
		if(num>7){
			num=1;
			$('.banner ul').css('left',0)
		}
		dst=-num*998;
		$('.banner ul').animate({left:dst},500);
	}
	$('.banner ul li').hover(function() {
		clearInterval(timer);
	}, function() {
		timer=setInterval(fun, 3000);
	});	
});