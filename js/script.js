$(document).ready(function(){
    $(".about").click(function(){
        $("body").toggleClass("change");
        $(".title, .list, .back").toggleClass("white");
    })
    $(".about").hover(function(){
        $("body").toggleClass("change");
        $(".title, .list, .back").toggleClass("white");
    })
})