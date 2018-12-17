$(document).ready(function() {
    //your code here


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


    function loadJSON(path, callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', path, true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    function handlePastEmployment(info) {
        var pastemployment = JSON.parse(info)['pastemployment'];
        var employmentdiv = document.getElementById("pastemployment");
        if (!employmentdiv) {
            return;
        }
        for (var i = 0; i < pastemployment.length; i++) {
            $('<div class="row"> \
                        <div class="col-md-3 text-center"> \
                            <a href="' + pastemployment[i]['href'] + '" align="center" class="text-center"><img src=' + pastemployment[i]['img'] + ' alt=' + pastemployment[i]["company"] + ' style="max-width: 70vw; width: 100%; height: 100%;"></a> \
                        </div> \
                        <div class="col-md-9"> \
                            <h2>' + pastemployment[i]["company"] + ': ' + pastemployment[i]["position"] + '</h2> \
                            <strong>Duration:</strong> \
                            <p> ' + pastemployment[i]['timeframe'] + '</p> \
                            <strong>Details:</strong> \
                            ' + pastemployment[i]['details'].map((info) => {
                    return "<p>" + info + "</p>" }).join("") +
                '</div> \
                    </div>').appendTo(employmentdiv);
            if (i !== pastemployment.length - 1) {
                $('<p> <hr> </p>').appendTo(employmentdiv);
            }
        }
    }

    function handleImages(info) {
        var galleries = JSON.parse(info)['images'];
        var photos = document.getElementById("photosandmedia");
        if (!photos){
            return;
        }
        for (var i = 0; i < galleries.length; i++) {
            var gallery = galleries[i];
            var tagname = gallery['from'].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'_').replace(/ /g, '-');
            $('<h3 class="white" align="center">' + gallery['from'] + '</h3>').appendTo(photos);
            $('<div id=' + tagname + ' class="row"></div>').appendTo(photos);
            var temp = document.getElementById(tagname);
            for (var j = 0; j < gallery['galleryurls'].length; j++) {
                var url = gallery['galleryurls'][j];
                $('<div class="col-lg-2 col-md-3 col-sm-6 col-xs-12" style="overflow: hidden" align="center"> \
                    <div class="thumbnail growonhover"> \
                        <img src="' + url + '" data-toggle="modal" data-target="#' + tagname + '-modal" data-slide-to='+j+' width="100%"> \
                    </div> \
                </div>').appendTo(temp);
            }
        }
        createGalleries(galleries);
    }

    function createGalleries(galleries) {
        var photos = document.getElementById("photosandmedia");
        //create image carousels
        for (var i = 0; i < galleries.length; i++) {
            var gallery = galleries[i];
            var tagname = gallery['from'].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'_').replace(/ /g, '-');
            var currmodal = $('<div id=' + tagname + '-modal class="modal fade middleall" align="center"></div>').appendTo(photos)[0];
            var holder = $('<div id=' + tagname + '-carousel-holder></div>').appendTo(currmodal)[0];
            $('<br> <br> <a class="btn btn-default" data-dismiss="modal">Close</a>').appendTo(currmodal);
            var carousel = $('<div id=' + tagname + '-carousel class="carousel slide middleagain" data-ride="carousel"></div>').appendTo(holder)[0];
            var indicators = $('<ol id=' + tagname + '-carousel-indicators class="carousel-indicators"></ol>').appendTo(carousel)[0];
            for (var j = 0;j<gallery['galleryurls'].length;j++) {
                $('<li data-target="#' + tagname + '-carousel" data-slide-to='+j+' class=""></li>').appendTo(indicators);
            }
            var carouselinner = $('<div class="carousel-inner" role="listbox">').appendTo(carousel)[0];
            for (var j = 0;j<gallery['imgurls'].length;j++) {
                if (j === gallery["imgurls"].length -1){
                    state = "active";
                } else {
                    state = "";
                }
                $('<div class="item ' + state + '"> \
                    <img class=' + convert(j+1) + '-slide src="' + gallery['imgurls'][j] + '" style="max-height: 60vh" alt=""> \
                </div>').appendTo(carouselinner);
            }

            $('<a class="left carousel-control" href="http://getbootstrap.com/examples/carousel/#' + tagname + '-carousel" role="button" data-slide="prev"> \
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> \
                <span class="sr-only">Previous</span> \
            </a> \
            <a class="right carousel-control" href="http://getbootstrap.com/examples/carousel/#' + tagname + '-carousel" role="button" data-slide="next"> \
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> \
                <span class="sr-only">Next</span> \
            </a>').appendTo(carousel);
        }
    }

    loadJSON('http://sumobot1.github.io/pastemployment2.json', handlePastEmployment);
    loadJSON('http://sumobot1.github.io/imagegallery.json', handleImages);
});

var special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelvth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
var deca = ['twent', 'thirt', 'fourt', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

function convert(n) {
  if (n < 20) return special[n];
  if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
  return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
}