$(function(){
	$(".container .bottom").click(function(e){
		if($(e.target).is(".btn")){
			var $i =$(e.target).index();
			$(".container .top .item").removeClass("active")
			.eq($i).addClass("active");
			$(".container .bottom .btn").removeClass("active");
			$(e.target).addClass("active");
		}
		
	});
});