$(document).ready(function(){
    // $(".about").click(function(){
    //     $("body").toggleClass("change");
    //     $(".title, .list, a").toggleClass("white-text");
    //     $(".back").toggleClass("white");
    // })
    $(".about").hover(function(){
        $("body").toggleClass("change");
        $(".title, .list, a").toggleClass("white-text");
        $(".back").toggleClass("white");
    })
    $(".about").on("tap", function(){
        $("body").toggleClass("change");
        $(".title, .list, a").toggleClass("white-text");
        $(".back").toggleClass("white");
    })
})