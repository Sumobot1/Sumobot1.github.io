/*On Scroll, if not at the top of the page, change the color on the background from transparent to grey.  If at top of page, turn from grey to transparent*/
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        $(".navbar-default").css("background-color", "#777");
        $(".navbar-default").css("border-color", "#777");
        $(".navbar-default").css("opacity", "0.9");
    } else {
        $(".navbar-default").css("background-color", "transparent");
        $(".navbar-default").css("border-color", "transparent");
        if (isopen == 1) {
            $(".navbar-default").css("background-color", "#777");
            $(".navbar-default").css("border-color", "#777");
            $(".navbar-default").css("opacity", "0.9");
        }
    }
})

/*If the dropbown menu (mobile) is open, do not make the nav bar background transparent when at the top of the page*/
var isopen = 0;

function isitopen() {
    if (isopen == 0) {
        $(".navbar-default").css("background-color", "#777");
        $(".navbar-default").css("border-color", "#777");
        $(".navbar-default").css("opacity", "0.9");
        isopen = 1;
    } else if (isopen == 1) {
        if (window.scrollY > 0) {
            $(".navbar-default").css("background-color", "#777");
            $(".navbar-default").css("border-color", "#777");
            $(".navbar-default").css("opacity", "0.9");
            isopen = 0;
        } else {
            $(".navbar-default").css("background-color", "transparent");
            $(".navbar-default").css("border-color", "transparent");
            isopen = 0;
        }

    }
}
