$(document).ready(function () {
    $("nav").animate({
        top: "0px",
        opacity: 1
    }, 1000);
});

$(document).ready(function () {
    $(".herobanner h2").animate({
        top: "20px",
        opacity: 1
    }, 1000);
});

$(document).ready(function () {
    $(".herobanner p").animate({
        bottom: "0px",
        opacity: 1
    }, 2000);
});

$(document).ready(function () {
    $(".our-specials").mouseenter(function () {
        $(".special1").fadeIn();
        $(".special2").fadeIn();
        $(".special3").fadeIn();
    });
});

$(document).ready(function () {
    $(".our-story-right").mouseenter(function () {
        $(".our-story-image").animate({
            right: "0px"
        }, 1000);
    });
});

$(document).ready(function () {
    $(".menu").click(function () {
        $(".menu-row1").toggle(1000);
        $(".menu-row2").toggle(1000);
    });
});


$(document).ready(function () {
    $(".meet-our-chef-content").mouseenter(function () {
        $(".meet-our-chef-image").animate({
            left: "0px",
            opacity: 1
        }, 1000);
    });
})

$(document).ready(function () {
    $("#contact").mouseenter(function () {
        $(".contact").animate({
            right: "0px",
        }, 1000)
    });
});

$(document).ready(function () {
    $("#contact").mouseenter(function () {
        $(".text").animate({
            right: "0px"
        }, 1000)

        $(".social-icons").animate({
            left: "0px"
        }, 1000)
    })
});
