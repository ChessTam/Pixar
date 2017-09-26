$(function(){
	/*底部官方賬號圖標鼠標移入移出效果*/
	$(".icon").children("a").mouseover(function(){
		$(this).css("opacity",1).siblings("a").css("opacity",0.5)
	})
	$(".icon").children("a").mouseout(function(){
		$(".icon").children("a").css("opacity",1)
	})
	
	/*中間主體部分big-banner滾輪滾動條兩張圖片上升距離不同效果*/
	/*$(window).scroll( function() {
		 var top = $(window).scrollTop() + 10;
		$(".big-banner").animate({"top":top},30)
	} );*/
})