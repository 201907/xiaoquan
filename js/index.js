$(function(){
    var random = Math.floor(Math.random()*$("li").length); 
    var selectLi = $("li").eq(random);
    if(selectLi!=null && typeof(selectLi) != undefined){
        $("#aud").attr('src',"audio/" + selectLi.attr("id") + ".mp3").get(0).play();
        $("#nowPlay").text("正在播放："+selectLi.attr("title"));
    }
    $("#images li").click(function(){
        var id = $(this).attr("id");
        var path = "audio/" + id + ".mp3";
        var audio = $("#aud");
        var title = $(this).attr("title");
        if(path != audio.attr("src")){
            audio.attr('src',path).get(0).play();
            $("#nowPlay").text("正在播放："+$(this).attr("title"));
        }
        var button = $("#button")
        $("#myModalLabel").text(title); 
        if(id === "pianpianxihuanni"){
            $(".modal-body").html("<img src='images/pianpianxihuanni.jpg' style='width:100%;'/>")
        }else{
            $(".modal-body").html(eval(id));   
        }        
        button.get(0).click();        
    });
    $("li").hover(
        function(){
            $(this).text($(this).attr("title"));
        },
        function(){
            $(this).text("");
        }
    )
})