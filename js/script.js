$(document).ready(function(){
    $("body").click(function(){
        $("body, .back").toggleClass("change");
        $(".title, .list, a").toggleClass("white-text");
        $(".back").toggleClass("white");

        if ( $(".about").hasClass("about-background") ){
            $(".about").removeClass("about-background");
            $(".about").addClass("fire");
        } else {
            $(".about").removeClass("fire");
            $(".about").addClass("about-background");
        }
    })
    // $(".about").hover(function(){
    //     $("body").toggleClass("change");
    //     $(".title, .list, a").toggleClass("white-text");
    //     $(".back").toggleClass("white");
    // })
    // $(".about").on("tap", function(){
    //     $("body").toggleClass("change");
    //     $(".title, .list, a").toggleClass("white-text");
    //     $(".back").toggleClass("white");
    // })
})