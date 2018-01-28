$(function(){
	var scrollTop=parseInt(document.documentElement.scrollTop);
	var windowHeight=parseInt(document.body.clientHeight);
	var windowWidth=parseInt(document.body.scrollWidth);
	var speed=(windowHeight-scrollTop)/500;
	var $sakuraDiv=$("#sakura");
	for(var i=0;i<30;i++){
		var $imgDiv=$("<div></div>");
		$imgDiv.css({
			top:Math.random()*-1000+scrollTop,
			left:Math.random()*windowWidth,
			opacity:0.5+Math.random()
		})
		$imgDiv.addClass("sakura");
		$imgDiv.addClass("type"+(1+Math.round(Math.random()*6)));
		$imgDiv.addClass("types"+(1+Math.round(Math.random()*6)));
		$imgDiv.addClass("typec"+(1+Math.round(Math.random()*6)));
		$imgDiv.addClass("typea"+(1+Math.round(Math.random()*6)));
		$sakuraDiv.append($imgDiv);
	}
	setInterval(function(){
		$sakuraDiv.find("div").each(function(){
			var speed=1+Math.random()*2;
			if(parseInt($(this).css("top"))>=windowHeight-50||parseInt($(this).css("left"))>=windowWidth-50){
				$(this).fadeOut(100,function(){
					$(this).fadeIn(100);
					$(this).css({top:scrollTop,left:Math.random()*windowWidth});
				})
			}else{
				$(this).css({top:parseInt($(this).css("top"))+speed,left:parseFloat($(this).css("left"))+0.5});
			}
		})
	},20)
})