window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        //alert("shit")
        $(".navbar-default").css("background-color", "#777"); /*found in bootstrap.css*/
        $(".navbar-default").css("border-color", "#777"); /*Apparently ff is not a colour but fff is... wtf*/
        $(".navbar-default").css("opacity", "0.9");
        /*$(".navbar-default").animate({"background-color": "#fff"}, "slow");*/
    } else {
        $(".navbar-default").css("background-color", "transparent");
        $(".navbar-default").css("border-color", "transparent");
        if (isopen == 1) {
            $(".navbar-default").css("background-color", "#777"); /*found in bootstrap.css*/
            $(".navbar-default").css("border-color", "#777"); /*Apparently ff is not a colour but fff is... wtf*/
            $(".navbar-default").css("opacity", "0.9");
        }
    }
})
var isopen = 0;

function isitopen() {
    if (isopen == 0) {
        $(".navbar-default").css("background-color", "#777"); /*found in bootstrap.css*/
        $(".navbar-default").css("border-color", "#777"); /*Apparently ff is not a colour but fff is... wtf*/
        $(".navbar-default").css("opacity", "0.9");
        isopen = 1;
        /*alert(isopen);*/
    } else if (isopen == 1) {
        if (window.scrollY > 0) {
            $(".navbar-default").css("background-color", "#777"); /*found in bootstrap.css*/
            $(".navbar-default").css("border-color", "#777"); /*Apparently ff is not a colour but fff is... wtf*/
            $(".navbar-default").css("opacity", "0.9");
            isopen = 0;
        } else {
            $(".navbar-default").css("background-color", "transparent");
            $(".navbar-default").css("border-color", "transparent");
            isopen = 0;
        }

    }
}
/*window.addEventListener("load", function(){*/
/*var isopen = 0;*/
/*	alert(isopen);
})*/
/*$(document).ready(function(){
    // Show the Modal on load
    
    // Hide the Modal
    $("#myBtn").click(function(){
        $("#myModal").modal("hide");
    });
});*/
/*$(document).keypress(function(e) { 
    if (e.keyCode == 27) { 
        $("#myModal").fadeOut(500);
        //or
        window.close();
    } 
});*/
/*var imgTesting = new Image();
imgTesting.src = "img/Circletearexwhite.png"
window.addEventListener("load", function(){
	alert("fuck");
	var img = document.getElementById("img/Circletearexwhite.png");
	alert("fuck this");
	var width = img.clientWidth;
	var height = img.clientHeight;
	alert("fuck fuck fuck");
	$(".homeimage").css("max-width", "1%");
	var imgWidth = imgTesting.width;
	var imgHeight = imgTesting.height;
	var windWidth = $(window).width;
	var windHeight = $(window).height;
	if (imgHeight>windHeight){
		$(".homeimage").css("max-height", "60%");
	}
	if (imgWidth>windWidth){
		$(".homeimage").css("max-width", "40%");
	}
	alert(imgTesting.height);
	alert(imgTesting.width);


})*/
