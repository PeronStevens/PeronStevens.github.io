$(document).ready(function(){
    $(".tools").click(function(){
        $(".devicon-wrap").slideUp();
    })
    $(".about").hover(function(){
        $("body").toggleClass("change");
        $(".title, .list").toggleClass("white");
    })
})